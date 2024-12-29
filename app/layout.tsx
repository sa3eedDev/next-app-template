'use client';

import {IconCoffee , IconLibraryPlus } from '@tabler/icons-react'
import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript, UnstyledButton, NavLink, ActionIcon } from '@mantine/core';
import { theme } from '../theme';
import { AppShell, Burger,Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';


export default function RootLayout({ children }: { children: any }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
      <MantineProvider theme={theme}>
      <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">        
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
          />
          <Group justify="space-between" style={{ flex: 2 }}>
            <Group>
              <IconCoffee size={30}/>
              <Link href={"/"}><strong>Caffeine Addict</strong></Link>
            </Group>
            <Group>
            <ActionIcon
              component='a'
              href="/addRecipe"
              size="lg"
              aria-label="Gradient action icon"
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan', deg: 261 }}
            >
              <IconLibraryPlus/>
            </ActionIcon>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md">          
        <Group>
        <NavLink
              href="#required-for-focus"
              label="Add Recipe"
              leftSection={<IconLibraryPlus size="1rem" stroke={1.5} />}
            />
        </Group>
      </AppShell.Navbar>

      <AppShell.Main>
          {children}
      </AppShell.Main>
    </AppShell>
    </MantineProvider>

        
      </body>
    </html>
  );
}
