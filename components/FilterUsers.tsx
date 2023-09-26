/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { 
  useState, 
  useCallback, 
  useEffect, 
  ChangeEvent 
} from 'react';
import {
  InputGroup, 
  Input, 
  InputLeftAddon, 
  Flex, 
  Button,
  Spinner
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useURL } from '@/hooks/useURL';
import debounce from 'lodash.debounce';

export const FilterUsers = () => {
  const { params, pushParams, removeAllParams } = useURL();

  const [isProcessing, setIsProcessing] = useState(false);

  const queryParam = params.get('query') || '';
  const [query, setQuery] = useState(queryParam);

  const applyQuery = useCallback(
    debounce(pushParams, 1000),
    [params.toString()]
  );

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const normalizedValue = value.trim();

    setQuery(value);

    if (normalizedValue) {
      applyQuery({ query: normalizedValue });

      return;
    }

    applyQuery.cancel();
    pushParams({ query: null });
  };

  useEffect(() => {
    if (!queryParam) {
      setQuery('');
    }
  }, [queryParam]);

  useEffect(() => {
    const startProcessing = queryParam !== query;

    if ((isProcessing && !startProcessing) || !query) {
      setIsProcessing(false);

      return;
    }

    if (startProcessing) {
      setIsProcessing(true);
    }
  }, [query, queryParam]);

  return (
    <Flex gap={5} alignItems="center">
      <InputGroup size="lg">
        <InputLeftAddon pointerEvents="none" >
          {isProcessing ? (
            <Spinner size="sm" />
          ) : (
            <SearchIcon color="gray.700" />
          )}
        </InputLeftAddon>
        <Input
          type="search"
          placeholder="Enter username..."
          value={query}
          onChange={handleQueryChange}
          />
      </InputGroup>
      <Button 
        size="lg" 
        colorScheme='blue'
        isDisabled={!params.size}
        onClick={removeAllParams}
      >
        Clear all filters
      </Button>
    </Flex>
  );
};
