'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Tbody, Tr, Td, Text } from '@chakra-ui/react';
import { TableLayout } from './TableLayout';
import type { User } from '@/types';

type Props = {
  users: User[];
};

export const UsersTable: FC<Props> = ({ users }) => {
  return (
    <>
      {users.length > 0 ? (
        <TableLayout>
          <Tbody>
            {users.map((user) => (
              <Tr key={user.id}>
                <Td>{user.id}</Td>
                <Td>
                  <Link href={`/users/${user.id}`} style={{ color: 'green' }}>
                    {user.name}
                  </Link>
                </Td>
                <Td>{user.username}</Td>
                <Td style={{ color: 'blue' }}>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </TableLayout>
      ) : (
        <Text mt={30} fontSize="2xl">
          No users with this username were found
        </Text>
      )}
    </>
  );
};
