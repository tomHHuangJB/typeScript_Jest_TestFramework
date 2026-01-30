import { jest } from '@jest/globals';
import { delay, retry } from '../../src/async/retry.js';

describe('async/retry', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('delay waits for the given duration', async () => {
    const promise = delay(1000);
    await jest.advanceTimersByTimeAsync(1000);
    await expect(promise).resolves.toBeUndefined();
  });

  test('retry succeeds after transient failures', async () => {
    jest.useRealTimers();
    const task = jest
      .fn<() => Promise<string>>()
      .mockRejectedValueOnce(new Error('flaky'))
      .mockRejectedValueOnce(new Error('flaky'))
      .mockResolvedValue('ok');

    const promise = retry(task, { retries: 3, backoffMs: 250 });

    await expect(promise).resolves.toBe('ok');
    expect(task).toHaveBeenCalledTimes(3);
  });

  test('retry stops on non-retryable error', async () => {
    const task = jest.fn<() => Promise<unknown>>();
    task.mockRejectedValue(new Error('fatal'));
    const isRetryable = (error: unknown) => !(error instanceof Error) || error.message !== 'fatal';

    await expect(retry(task, { retries: 2, backoffMs: 100, isRetryable }))
      .rejects.toThrow('fatal');
    expect(task).toHaveBeenCalledTimes(1);
  });

  test('delay rejects immediately when aborted before start', async () => {
    const controller = new AbortController();
    controller.abort();
    await expect(delay(100, controller.signal)).rejects.toThrow('aborted');
  });

  test('delay rejects when aborted after scheduling', async () => {
    const controller = new AbortController();
    const promise = delay(1000, controller.signal);
    controller.abort();
    await expect(promise).rejects.toThrow('aborted');
  });

  test('retry throws lastError when retries is negative', async () => {
    const task = jest.fn<() => Promise<unknown>>();
    task.mockRejectedValue(new Error('never-called'));
    await expect(retry(task, { retries: -1, backoffMs: 10 })).rejects.toBeUndefined();
    expect(task).not.toHaveBeenCalled();
  });
});
