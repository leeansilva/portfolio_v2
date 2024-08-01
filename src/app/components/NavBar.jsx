'use client'
import React, { useEffect, useState } from 'react';
import { Box, Divider, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp } from '@tabler/icons-react'
import { useInView, motion } from 'framer-motion';
import { useRefs } from '../context/RefContext';
import Link from 'next/link';

export default function NavBar() {
    const { descriptionRef, experienceRef, projectsRef } = useRefs();

    const isDescriptionInView = useInView(descriptionRef);
    const isExperienceInView = useInView(experienceRef, { margin: "90% 0px -80% 0px" });
    const isProjectsInView = useInView(projectsRef, { margin: "90% 0px -80% 0px" });

    return (
        <Box
            display={'flex'}
            flexDir={{ base: 'row', md: 'column' }}
            width={{ base: '100vw', md: '50%' }}
            h={{ base: '40svh', md: '100vh' }}
            position={{ base: 'relative', md: 'sticky' }}
            top={0}
            padding={20}
            justifyContent={'space-between'}
        >
            <Flex flexDir={'column'} height={'max-content'} gap={5}>
                <Heading as='h1' size='3xl'>Leandro Silva</Heading>
                <Heading as='h4' size='lg'>Frontend developer</Heading>
                <Text maxW={'300px'} as='p' size={'md'} color={'whiteAlpha.700'}>Apasionado por crear experiencias digitales excepcionales.</Text>
            </Flex>

            <VStack alignSelf={'flex-start'} alignItems={'flex-start'}>
                <AnimatedLink href={"description"} isInView={isDescriptionInView}>
                    Sobre mi
                </AnimatedLink>
                <AnimatedLink href={"experience"} isInView={isExperienceInView}>
                    Experiencia
                </AnimatedLink>
                <AnimatedLink href={"projects"} isInView={isProjectsInView}>
                    Proyectos
                </AnimatedLink>
            </VStack>

            <HStack gap={5}>
                <Link href={'#'}><IconBrandGithub size={'34px'} /></Link>
                <Link href={'#'}><IconBrandLinkedin size={'34px'} /></Link>
                <Link href={'#'}><IconBrandInstagram size={'34px'} /></Link>
                <Link href={'#'}><IconBrandWhatsapp size={'34px'} /></Link>
            </HStack>
        </Box>
    )
}

const AnimatedLink = ({ href, children, isInView }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        let target = document.getElementById(href);
        document.getElementById("main").scroll({
            top: target.offsetTop - 80,
            behavior: 'smooth'
        });
    }

    return (
        <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: 'max-content', gap: '15px' }}
        >
            <Divider
                height={'2px'}
                borderRadius={'5px'}
                background={isHovered || isInView ? 'white' : 'whiteAlpha.700'}
                width={isHovered || isInView ? '60px' : '20px'}
                transition={'all 0.2s'}
            />
            <Link
                style={{
                    cursor: 'pointer', transition: 'all 0.2s', fontSize: '20px',
                    color: isHovered || isInView ? 'white' : 'gray'
                }}
                id='linkScroll'
                onClick={handleClick}
                href={'#'}
            >
                {children}
            </Link>
        </motion.div>
    )
}
