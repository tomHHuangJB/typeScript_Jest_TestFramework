export type AsyncTask<T> = () => Promise<T>;

export const delay = (ms: number, signal?: AbortSignal): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(new Error('aborted'));
      return;
    }
    const timeout = setTimeout(() => resolve(), ms);
    signal?.addEventListener('abort', () => {
      clearTimeout(timeout);
      reject(new Error('aborted'));
    }, { once: true });
  });
};

export interface RetryOptions {
  retries: number;
  backoffMs: number;
  isRetryable?: (error: unknown) => boolean;
}

export const retry = async <T>(task: AsyncTask<T>, options: RetryOptions): Promise<T> => {
  const isRetryable = options.isRetryable ?? (() => true);
  let attempt = 0;
  let lastError: unknown;

  while (attempt <= options.retries) {
    try {
      return await task();
    } catch (error) {
      lastError = error;
      if (!isRetryable(error) || attempt === options.retries) {
        throw error;
      }
      await delay(options.backoffMs);
      attempt += 1;
    }
  }

  throw lastError;
};
