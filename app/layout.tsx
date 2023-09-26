import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { Providers } from '@/components/Providers';
import { HomeButton } from '@/components/HomeButton';
import { Container } from '@chakra-ui/react';

export const metadata: Metadata = {
  title: 'Userspage | Test task',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      style={{
        marginRight: 'calc(-1 * (100vw - 100%))',
        overflowX: 'hidden',
      }}
    >
      <body>
        <Providers>
          <Container maxW="container.xl" pt={30}>
            <HomeButton />
            <Toaster />
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
