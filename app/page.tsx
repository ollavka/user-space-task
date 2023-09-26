'use client';

import { useMemo, useEffect } from 'react';
import { UsersTable } from '@/components/UsersTable';
import { FilterUsers } from '@/components/FilterUsers';
import { getUsers } from '@/api/users';
import { SortField, SortOrder, User } from '@/types';
import { getFilteredUsers } from '@/utils/getFilteredUsers';
import { useURL } from '@/hooks/useURL';
import { useFetch } from '@/hooks/useFetch';
import { Title } from '@/components/Title';
import { Loader } from '@/components/Loader';
import { Text } from '@chakra-ui/react';
import { ReloadButton } from '@/components/ReloadButton';
import toast from 'react-hot-toast';

export default function UsersPage() {
  const { data: users, isLoading, error } = useFetch<User[]>({
    startValue: [],
    req: getUsers,
  });

  const { params } = useURL();

  const query = params.get('query') || '';
  const sort = params.get('sort') || '';
  const order = params.get('order') || '';

  const filteredUsers = useMemo(() => {
    return getFilteredUsers(users as User[], {
      query,
      sortField: sort as SortField,
      isReversed: order === SortOrder.Desc,
    })
  }, [users, query, order, sort]);

  useEffect(() => {
    if (!error?.message) {
      return;
    }

    toast.error(error.message);
  }, [error?.message]);

  if (isLoading) {
    return <Loader text="Loading users page..." />
  }

  if (error) {
    return (
      <>
        <Title>Users page</Title>
        <Text
          fontSize="2xl"
          fontWeight="600"
          color="red.400"
          mt={10}
        >
          Oops! Something went wrong
        </Text>
        <ReloadButton />
      </>
    )
  }

  return (
    <>
      <Title>Users page</Title>
      <FilterUsers />
      <UsersTable users={filteredUsers} />
    </>
  );
}
