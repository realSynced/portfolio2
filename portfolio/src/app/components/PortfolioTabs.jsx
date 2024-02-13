import React, { useState, useEffect, useRef } from 'react';
import { Theme } from '@radix-ui/themes';
import { Card, Inset, Strong, Text, Tabs, Box } from '@radix-ui/themes';
import Portfolio from "./Portfolio"

export default function PortoflioTabs() {

    const aviDesc = () => {
        return (
            <>
            
            <Text as="p" size="3">
                  <Strong>Typography</Strong> is the art and technique of arranging type to
                  make written language legible, readable and appealing when displayed.
            </Text>

            </>
        );
    }
  
  return (
    <>
    
    <Tabs.Root defaultValue="account">
            <Tabs.List>
                <Tabs.Trigger value="account">Websites</Tabs.Trigger>
                <Tabs.Trigger value="documents">Mini-Bios</Tabs.Trigger>
                {/* <Tabs.Trigger value="settings">Settings</Tabs.Trigger> */}
            </Tabs.List>

            <Box px="4" pt="3" pb="2">
                <Tabs.Content value="account">
                    <Portfolio content={aviDesc()}></Portfolio>
                </Tabs.Content>

                <Tabs.Content value="documents">
                    
                </Tabs.Content>

                {/* <Tabs.Content value="settings">
                    <Text size="2">Edit your profile or update contact information.</Text>
                </Tabs.Content> */}
            </Box>
    </Tabs.Root>
    
    </>
  );
};
