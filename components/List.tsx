import { FC } from 'react';
import { Box, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

type ListProps<T> = {
  items: T[];
  details: string;
  linkPath: string;
};

export const List: FC<ListProps<any>> = ({ items, details, linkPath }) => {
  return (
    <Box>
      {items.map((item) => (
        <Box
          key={item.id}
          p={4}
          borderWidth="1px"
          borderRadius="md"
          mb={4}
        >
          <Box mb={5}>
            <Text
              fontSize="xl"
              fontWeight="bold"
            >
              {item.title}
            </Text>

            {item?.body && (
              <Text>{item.body}</Text>
            )}
          </Box>

          <NextLink href={`${linkPath}/${item.id}`} passHref>
            <Link color="blue.500">View {details}</Link>
          </NextLink>
        </Box>
      ))}
    </Box>
  );
};
