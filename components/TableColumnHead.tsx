/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { FC, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { Th, Flex, Tooltip } from '@chakra-ui/react';
import { TriangleUpIcon, TriangleDownIcon } from '@chakra-ui/icons';
import { useURL } from '@/hooks/useURL';
import { SearchParams, SortField, SortKey, SortOrder } from '@/types';
import { getSearchWith } from '@/utils/searchHelper';

type Props = {
  title: SortKey;
};

export const TableColumnHead: FC<Props> = ({ title }) => {
  const { params, pathname } = useURL();

  const sortParam = params.get('sort') || null;
  const orderParam = params.get('order') || null;

  const sort = SortField[title as SortKey];

  const firstClick = sortParam !== sort;
  const secondClick = sortParam === sort && !orderParam;
  const thirdClick = sortParam === sort && orderParam === SortOrder.Desc;

  const getNewQuery = useCallback(() => {
    let newParams: SearchParams = {
      ...Object.fromEntries(params.entries()),
    };

    switch (true) {
      case firstClick: {
        newParams = {
          ...newParams,
          sort,
          order: null,
        };

        break;
      }

      case secondClick: {
        newParams = {
          ...newParams,
          sort,
          order: SortOrder.Desc,
        };

        break;
      }

      case thirdClick: {
        newParams = {
          ...newParams,
          sort: null,
          order: null,
        };

        break;
      }

      default:
        break;
    }

    return getSearchWith(params, newParams);
  }, [params]);

  const currentSort = useMemo(() => {
    let sortOrder = SortOrder.Default;

    switch (true) {
      case firstClick:
        sortOrder = SortOrder.Asc;
        break;

      case secondClick:
        sortOrder = SortOrder.Desc;
        break;

      case thirdClick:
      default:
        SortOrder.Default
        break;
    }

    return sortOrder;
  }, [sortParam, orderParam, title]);
  
  const tooltipLabel = (currentSort === SortOrder.Default) 
    ? `${currentSort} by ${title}`
    : `Sort by ${title} (${currentSort})`;

  return (
    <Th>
      <Tooltip
        label={tooltipLabel}
        hasArrow
        placement="top"
        closeOnClick={false}
        gutter={20}
      >
        <Link
          href={{ pathname, query: getNewQuery() }}
        >
          <Flex 
            justify="space-between" 
            align="center" 
            gap={5}
          >
            <span>{title}</span>

            <Flex direction="column">
              <TriangleUpIcon color={`gray.${secondClick ? 800 : 400}`} />
              <TriangleDownIcon color={`gray.${thirdClick ? 800 : 400}`} />
            </Flex>
          </Flex>
        </Link>
      </Tooltip>
    </Th>
  );
};
