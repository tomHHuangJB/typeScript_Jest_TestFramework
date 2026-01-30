import { formatUserLabel, hasEmail, isPrivileged, type User } from '../../src/basics/types.js';

const baseUser: User = { id: 'u-1', role: 'user' };

describe('basics/types', () => {
  test('isPrivileged returns true for admin and user', () => {
    expect(isPrivileged({ ...baseUser, role: 'admin' })).toBe(true);
    expect(isPrivileged({ ...baseUser, role: 'user' })).toBe(true);
    expect(isPrivileged({ ...baseUser, role: 'guest' })).toBe(false);
  });

  test('hasEmail is a type guard', () => {
    const userWithEmail: User = { ...baseUser, email: 'qa@example.com' };
    if (hasEmail(userWithEmail)) {
      expect(userWithEmail.email).toContain('@');
    }
    expect(hasEmail({ ...baseUser, email: 'a@b' })).toBe(false);
  });

  test('formatUserLabel composes label safely', () => {
    expect(formatUserLabel(baseUser)).toBe('[user] u-1');
    expect(formatUserLabel({ ...baseUser, email: 'qa@example.com' }))
      .toBe('[user] u-1 <qa@example.com>');
  });
});
