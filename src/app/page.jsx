'use client'
import { Box, Button, Divider, Flex, Heading, HStack, Switch, Text, useColorMode, useColorModeValue, VStack, IconButton } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Description from "./components/home/Description";
import Projects from "./components/home/Projects";
import Experience from "./components/home/Experience";
import Footer from "./components/home/Footer";
import { motion } from 'framer-motion';
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [showComponent, setShowComponent] = useState(true)

  const bg = useColorModeValue('orange.50', 'blackAlpha.700')
  const bgButton = useColorModeValue('blackAlpha.700', 'orange.50')

  const fadeInUp = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: { duration: 0.6, delay: 3 } // Retraso escalonado
    })
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(false);
    }, 3000); // 1 segundo

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>

      {
        showComponent && <LoadingScreen />
      }
      <Flex
        bg={bg}
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
          pt={{ base: 5, md: 20 }}
          pb={{ base: 0, md: 20 }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            style={{ width: '100%' }}
          >
            <Heading mt={{ base: 10, md: 0 }} pl={5} as='h4' size={'md'} display={{ base: 'flex', md: 'none' }}>Sobre mi</Heading>
            <Description />
            <Experience name='experience' />
            <Projects name='projects' />
            <Footer />
          </motion.div>
        </VStack>

        <IconButton
          position={'absolute'}
          right={{ base: 5, md: 20 }}
          top={{ base: 10, md: 20 }}
          borderRadius={'50%'}
          aria-label='Color mode'
          icon={colorMode === 'light' ? <IconSun /> : <IconMoon />}
          onClick={toggleColorMode}
          color={bg}
          bg={bgButton}
          variant='outline'
          _hover={{
            color: bgButton,
            bg: bg
          }}
        />


      </Flex >
    </>
  );
}
