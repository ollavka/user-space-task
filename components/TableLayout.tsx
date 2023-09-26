'use client';

import { FC, ReactNode } from 'react';
import { TableColumnHead } from './TableColumnHead';
import {
  Table,
  Thead,
  Tfoot,
  Tr,
  Th,
  TableContainer,
} from '@chakra-ui/react';
import { SortField, SortKey } from '@/types';

type Props = {
  children: ReactNode;
};

export const TableLayout: FC<Props> = ({ children }) => {
  const titles: SortKey[] = Object.keys(SortField) as SortKey[];

  return (
    <TableContainer
      border="1px solid rgba(28, 28, 28, 0.1)"
      borderRadius="10px"
      style={{ marginBlock: '60px' }}
    >
      <Table variant="striped">
        <Thead>
          <Tr>
            {titles.map((title) => (
              <TableColumnHead key={title} title={title} />
            ))}
          </Tr>
        </Thead>
        {children}
        <Tfoot>
          <Tr>
            {titles.map((key) => (
              <Th key={key}>{key}</Th>
            ))}
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};
