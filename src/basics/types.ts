export type Role = 'admin' | 'user' | 'guest';

export interface User {
  id: string;
  role: Role;
  email?: string;
}

export const isPrivileged = (user: User): boolean =>
  user.role === 'admin' || user.role === 'user';

export const hasEmail = (user: User): user is User & { email: string } =>
  typeof user.email === 'string' && user.email.length > 3;

export const formatUserLabel = (user: User): string => {
  const emailPart = hasEmail(user) ? ` <${user.email}>` : '';
  return `[${user.role}] ${user.id}${emailPart}`;
};
