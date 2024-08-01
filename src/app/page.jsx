'use client'
import { Box, Button, Divider, Flex, useColorMode, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Description from "./components/home/Description";
import Projects from "./components/home/Projects";
import Experience from "./components/home/Experience";
import Footer from "./components/home/Footer";


export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      bg={'blackAlpha.700'}
      maxH={{ base: 'max-content', md: '100vh' }}
      overflow={'auto'}
      flexDir={{ base: 'column', md: 'row' }}
      pl={{ md: 0, lg: 30, xl: '300px' }}
      pr={{ md: 0, lg: 30, xl: '300px' }}
      as={'main'}
      id="main"
    >
      <NavBar />

      <VStack
        width={{ base: '100svw', md: '50%' }}
        pt={20}
        pb={20}
      >
        <Description />
        <Experience name='experience' />
        <Projects name='projects' />
        <Footer />

      </VStack>

      <Button onClick={toggleColorMode} position={'absolute'} right={'50px'} top={20}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>

    </Flex>
  );
}
