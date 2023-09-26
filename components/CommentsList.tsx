'use client';

import { FC } from 'react';
import { Box, Text, VStack, Flex } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { Comment } from '@/types';

type Props = {
  comments: Comment[];
};

export const CommentsList: FC<Props> = ({ comments }) => {
  return (
    <VStack 
      align="start" 
      spacing={4} 
      mb={8}
    >
      {comments.map((comment) => (
        <Box
          key={comment.id}
          p={4}
          borderWidth="1px"
          borderRadius="md"
          width="100%"
        >
          <Box bg="gray.200" p={2} borderRadius="md" mb={2}>
            <Text fontSize="lg" fontWeight="bold">
              {comment.name}
            </Text>
            <Flex alignItems="center" color="gray.700">
              <EmailIcon mr={2} mt={0.5} color="gray.500" />
              <a href={`mailto:${comment.email}`}>
                {comment.email}
              </a>
            </Flex>
          </Box>

          <Text fontSize="md">{comment.body}</Text>
        </Box>
      ))}
    </VStack>
  );
};
