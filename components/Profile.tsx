/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { FC, useEffect } from 'react';
import { User } from '@/types';
import { useFetch } from '@/hooks/useFetch';
import { Text, Flex, Image } from '@chakra-ui/react';
import { Loader } from './Loader';
import { getUserById } from '@/api/users';
import toast from 'react-hot-toast';
import { ReloadButton } from './ReloadButton';

type Props = {
  userId: string;
};

export const Profile: FC<Props> = ({ userId }) => {
  const { data: user, isLoading, error } = useFetch<User>({
    req: () => getUserById(userId),
  });

  useEffect(() => {
    if (!error?.message) {
      return;
    }

    toast.error(error.message);
  }, [error?.message]);

  if (error) {
    return (
      <>
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

  if (isLoading) {
    return <Loader text="Loading user data..." height="40vh" />
  }

  if (!isLoading && !user) {
    return (
      <Text 
        fontSize="4xl" 
        fontWeight="600"
      >
        User with id {userId} not found
      </Text>
    );
  }
  
  const { address, company, ...userData } = user as User;

  return (
    <Flex 
      justify="space-between"
      direction="row-reverse"
      gap={10}
      p={4} 
      shadow="md" 
      borderWidth="1px" 
      borderRadius="md"
    >
      <Image 
        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.username}`}
        width={300}
        height={300}
        alt="user's avatar"
      />

      <Flex
        direction="column"
        gap={2}
      >
        <Text fontSize="xl" fontWeight="bold">{userData.name}</Text>
        <Text>@{userData.username}</Text>

        <Text>
          Email:&nbsp; 
          <a
            href={`mailto:${userData.email}`} 
            style={{ color: 'blue' }}
          >
            {userData.email}
          </a>
        </Text>

        <Text>
          Phone:&nbsp; 
          <a
            href={`tel:${userData.phone}`} 
            style={{ color: 'green' }}
          >
            {userData.phone}
          </a>
        </Text>

        <Text>
          Website:&nbsp; 
          <a 
            href={`https://${userData.website}`} 
            target="_blank"
            style={{ color: 'red' }}
          >
            {`https://${userData.website}`}
          </a>
        </Text>

        <div>
          Address:&nbsp;
          <address style={{ display: 'inline-block' }}>
            {address.street}, {address.suite}, {address.city}, {address.zipcode}
          </address>
        </div>

        <Text>Company: <strong>{company.name}</strong></Text>
        <Text>Catchphrase: <strong>{company.catchPhrase}</strong></Text>
        <Text>BS: <strong>{company.bs}</strong> </Text>
      </Flex>
    </Flex>
  );
};
