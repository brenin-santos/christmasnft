import React from 'react';
import { ChakraProvider, theme, Box, Text } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import { Header, Link, ImageIcon, ImageGif } from './components';

function Wrapper() {
  return (
    <ChakraProvider theme={theme}>
      <Header>
        <Box display="flex" width="55%" gap="2rem" justifyContent="flex-end">
          <Link href="https://twitter.com.br">
            <ImageIcon
              src="https://raw.githubusercontent.com/brenin-santos/NFTMinter1FreeNextPay/master/public/img/twitter.png"
              alt="Twitter"
            />
          </Link>
          <Link href="https://twitter.com.br">
            <ImageIcon
              src="https://raw.githubusercontent.com/brenin-santos/nftsimplepagefreela/main/public/img/etherscan.png"
              alt="Twitter"
            />
          </Link>
          <Link href="https://twitter.com.br">
            <ImageIcon
              src="https://raw.githubusercontent.com/brenin-santos/nftsimplepagefreela/main/public/img/opensea.png"
              alt="Twitter"
            />
          </Link>
        </Box>

        <Box width="45%" display="flex" justifyContent="end">
          <ColorModeSwitcher marginRight="2rem" />
        </Box>
      </Header>
      <Box
        as="section"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        padding="3rem"
        gap="1rem"
      >
        <Text fontSize="14.075rem" wordBreak="break-word" textAlign="center">
          THE POTATOZ
        </Text>
        <Text fontSize="2rem" wordBreak="break-word" textAlign="center" marginTop="3rem">
          9,999 SMALL SPECIES LEADING THE WAY TO MEMELAND.
        </Text>
        <Text fontSize="1.25rem" wordBreak="break-word" textAlign="center" width="70%">
          A long time ago, in a memetaverse far, far away… Memeland was a deserted land unsuitable
          for life. Until [redacted] years ago, early lifeforms started to appear. Memeland's first
          residents, it turns out, were a bunch of Potatoz. Who left the Potatoz there?
        </Text>
      </Box>
      <Box
        as="section"
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding="3rem"
        gap="4rem"
      >
        <ImageGif src="img/portal.gif" width="400px" height="400px"></ImageGif>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding="0.5rem"
          flexDirection="column"
        >
          <Text as="b" fontSize="4rem" width="410px" wordBreak="break-all" textAlign="left">
            PORTAL TO MEMELAND
          </Text>
          <Text fontSize="1.5rem" width="410px" wordBreak="break-all" textAlign="left">
            A long time ago, in a memetaverse far, far away… Memeland was a deserted land unsuitable
            for life. Until [redacted] years ago, early lifeforms started to appear. Memeland's
            first residents, it turns out, were a bunch of Potatoz. Who left the Potatoz there?
          </Text>
        </Box>
      </Box>
      <Box
        as="section"
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding="3rem"
        gap="4rem"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding="0.5rem"
          flexDirection="column"
          max-width="400px"
          max-height="400px"
        >
          <Text as="b" fontSize="4rem" width="410px" wordBreak="break-all" textAlign="left">
            PORTAL TO MEMELAND
          </Text>
          <Text fontSize="1.5rem" width="410px" wordBreak="break-all" textAlign="left">
            A long time ago, in a memetaverse far, far away… Memeland was a deserted land unsuitable
            for life. Until [redacted] years ago, early lifeforms started to appear. Memeland's
            first residents, it turns out, were a bunch of Potatoz. Who left the Potatoz there?
          </Text>
        </Box>
        <ImageGif src="img/companion.gif" width="400px" height="400px"></ImageGif>
      </Box>
    </ChakraProvider>
  );
}

export default Wrapper;
