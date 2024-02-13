import React, { useState, useEffect, useRef } from 'react';
import { Theme } from '@radix-ui/themes';
import { Card, Inset, Strong, Text } from '@radix-ui/themes';

const Portfolio = ( {content} ) => {
  
  return (
    <>
    
    <Theme>
          <Card size="2" style={{ maxWidth: 240 }}>
                <Inset clip="padding-box" side="top" pb="current">
                  <img
                    src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                    alt="Bold typography"
                    style={{
                      display: 'block',
                      objectFit: 'cover',
                      width: '100%',
                      height: 140,
                    }}
                  />
                </Inset>
                <div>{content}</div>
            </Card>
      </Theme>
    
    </>
  );
};

export default Portfolio;
