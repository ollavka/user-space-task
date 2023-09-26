/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { FC, useState, useEffect } from 'react';
import { ReactNode } from 'react';
import { useParams } from 'next/navigation'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { UserTab, UserTabKey } from '@/types';
import { useURL } from '@/hooks/useURL';
import { capitalize } from '@/utils/capitalize';
import { Title } from './Title';
import { Loader } from './Loader';

type Props = {
  children?: ReactNode;
};

export const UserTabs: FC<Props> = ({ children }) => {
  const { params, pushParams } = useURL();
  const { userId } = useParams();

  const content = params.get('content') || '';

  const [tabIndex, setTabIndex] = useState<number | null>(null);

  const tabKeys = Object.keys(UserTab);
  const tabValues = Object.values(UserTab);

  useEffect(() => {
    const index = tabKeys.indexOf(content);

    if (!content || index < 0) {
      setTabIndex(0);
      pushParams({ content: tabKeys[0] })

      return;
    }

    setTabIndex(index);
  }, []);

  const onTabChange = (index: number) => {
    setTabIndex(index);
  };

  const changeParams = (tab: UserTabKey) => {
    pushParams({ content: tab })
  };

  const title = tabValues[(tabIndex || 0)];

  if (tabIndex === null) {
    return <Loader text={`Loading ${content} of user ${userId}...`} />
  }

  return (
    <>
      <Title>{`${title} ${userId}`}</Title>
      <Tabs
        index={tabIndex as number}
        onChange={onTabChange}
        >
        <TabList>
          {tabKeys.map(tab => (
            <Tab
              key={tab}
              onClick={() => changeParams(tab as UserTabKey)}
            >
              {capitalize(tab)}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabValues.map(tab => (
            <TabPanel key={tab}>
              {children}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
};
