'use client'
import React, { useEffect, useState } from 'react';
import { Box, Divider, Flex, Heading, HStack, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp } from '@tabler/icons-react'
import { useInView, motion } from 'framer-motion';
import { useRefs } from '../context/RefContext';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function NavBar() {
    const { descriptionRef, experienceRef, projectsRef } = useRefs();
    const { texts } = useLanguage();
    
    const isDescriptionInView = useInView(descriptionRef);
    const isExperienceInView = useInView(experienceRef, { margin: "90% 0px -80% 0px" });
    const isProjectsInView = useInView(projectsRef, { margin: "90% 0px -80% 0px" });
    
    const colorHover = useColorModeValue('orange', 'purple');
    const color = useColorModeValue('blackAlpha.700', 'whiteAlpha.700');

    return (
        <Box
            display={'flex'}
            flexDir={{ base: 'column', md: 'column' }}
            width={{ base: '100%', md: '50%' }}
            h={{ base: 'max-content', md: '100vh' }}
            position={{ base: 'relative', md: 'sticky' }}
            top={0}
            padding={{base:5, md:20}}
            pt={{base:10, md:20}}
            justifyContent={'space-between'}
        >
            <Flex flexDir={'column'} height={'max-content'} gap={{base:2, md:5}}>
                <Heading as='h1' size={{base:'2xl', md:'3xl'}}>Leandro Silva</Heading>
                <Heading as='h4' size={{base:'md', md:'lg'}}>Frontend developer</Heading>
                <Text maxW={'300px'} as='p' fontSize={{base:'sm', md:'md'}} color={color}>{texts.subtitle}</Text>
            </Flex>

            <VStack display={{base:'none', md:'flex'}} alignSelf={'flex-start'} alignItems={'flex-start'}>
                <AnimatedLink href={"description"} isInView={isDescriptionInView}>
                    {texts.menu[0]}
                </AnimatedLink>
                <AnimatedLink href={"experience"} isInView={isExperienceInView}>
                    {texts.menu[1]}
                </AnimatedLink>
                <AnimatedLink href={"projects"} isInView={isProjectsInView}>
                    {texts.menu[2]}
                </AnimatedLink>
            </VStack>

            <HStack mt={{base:5, md:0}} gap={5} width={{base:'70%', md:'max-content'}} justify={'space-between'}>
                <Text as={Link} href={'https://github.com/leeansilva'} _hover={{color:colorHover}} ><IconBrandGithub size={'34px'} /></Text>
                <Text as={Link} href={'https://www.linkedin.com/in/leandrosilva-/'} _hover={{color:colorHover}} ><IconBrandLinkedin size={'34px'} /></Text>
                <Text as={Link} href={'https://www.instagram.com/leeansilva_/'} _hover={{color:colorHover}} ><IconBrandInstagram size={'34px'} /></Text>
                <Text as={Link} href={'https://api.whatsapp.com/send/?phone=%2B541135654619&text=Hola%20+Lean!%20+me+gust%C3%B3%20tu%20portfolio!...+&type=phone_number&app_absent=0'} _hover={{color:colorHover}} ><IconBrandWhatsapp size={'34px'} /></Text>
            </HStack>
        </Box>
    )
}

const AnimatedLink = ({ href, children, isInView }) => {
    const [isHovered, setIsHovered] = useState(false);
    const color = useColorModeValue('blackAlpha.700', 'whiteAlpha.700')
    const colorHover = useColorModeValue('black', 'white')

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
                background={isHovered || isInView ? colorHover : color}
                width={isHovered || isInView ? '60px' : '20px'}
                transition={'all 0.2s'}
            />
            <Text
                style={{
                    cursor: 'pointer', transition: 'all 0.2s', fontSize: '20px',
                }}
                color= {isHovered || isInView ? colorHover : color}
                transition={'all 0.2s'}
                as={Link}
                id='linkScroll'
                onClick={handleClick}
                href={'#'}
            >
                {children}
            </Text>
        </motion.div>
    )
}
