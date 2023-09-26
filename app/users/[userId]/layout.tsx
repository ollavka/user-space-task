import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { UserTabs } from '@/components/UserTabs';

export const metadata: Metadata = {
  title: 'Profile | Test task',
};

interface UsersLayoutProps {
  children: ReactNode;
}

export default function UsersLayout({ children }: UsersLayoutProps) {
  return (
    <UserTabs>{children}</UserTabs>
  );
}
