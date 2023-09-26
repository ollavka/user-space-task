import { SortField, SortOrder, User } from '@/types';
import { normalizeStr } from './normalizeStr';

interface Options {
  query: string;
  sortField?: SortField;
  isReversed?: boolean;
}

export const getFilteredUsers = (users: User[], options: Options) => {
  const { query, sortField, isReversed } = options;

  let filteredUsers = [...users];

  const normalizedQuery = normalizeStr(query);

  if (normalizedQuery) {
    filteredUsers = filteredUsers.filter(({ username }) =>
      normalizeStr(username).includes(normalizedQuery),
    );
  }

  if (sortField) {
    filteredUsers = filteredUsers.sort((user1, user2) => {
      switch (sortField) {
        case SortField.ID:
          return user1[sortField] - user2[sortField];

        case SortField.Username:
        case SortField.Name:
        case SortField.Email:
          return user1[sortField].localeCompare(user2[sortField]);

        default:
          return 0;
      }
    });
  }

  if (isReversed) {
    filteredUsers.reverse();
  }

  return filteredUsers;
};
