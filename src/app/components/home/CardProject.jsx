'use client'
import React, { useContext, useState } from 'react'
import { Card, CardBody, CardFooter, Heading, Image, Stack, Text, Badge, Box, useColorModeValue } from '@chakra-ui/react'
import { motion } from "framer-motion"
import { IconArrowUpRight, IconBrandGithub } from '@tabler/icons-react';
import Link from 'next/link';

export default function CardProject({ date, srcImg, title, description, subtitle, tech, to, isHoveredGlobal, commitsData, gitHub }) {
    const [isHovered, setIsHovered] = useState(false);
    const color = useColorModeValue('blackAlpha.700', 'whiteAlpha.700')
    const colorBadge = useColorModeValue('green', 'purple')
    const colorHover = useColorModeValue('purple.700', 'purple.200')
    const colorHoverTitle = useColorModeValue('orange.700', 'orange.200')
    const bgContainer = useColorModeValue('rgba(0, 0, 0, 0.06)', 'rgba(255, 255, 255, 0.06)')
    const colorIcon = useColorModeValue('brown', '#F6AD55')

    return (
        <motion.div
            key={'title'}
            onHoverStart={() => {
                setIsHovered(true);
            }}
            onHoverEnd={() => {
                setIsHovered(false);
            }}
            whileHover={{
                backgroundColor: bgContainer,
                cursor: 'pointer'
            }}
            style={{
                width: '100%',
                borderRadius: '8px',
                opacity: isHoveredGlobal && !isHovered ? 0.6 : 1,
                transition: 'opacity 0.2s'
            }}
        >
            <Card as={Link} target='_blank' href={to} direction={{ base: 'column', lg: srcImg ? 'column' : 'row' }} overflow='hidden' bg={'none'} p={5}>
                {
                    srcImg ?
                        <Image
                            objectFit='cover'
                            maxW={{ base: '100%', sm: 'full' }}
                            src={srcImg}
                            alt='Caffe Latte'
                            pt={{base:0,md:5}}
                            pl={{base:0,md:5}}
                            maxH={'250px'}
                        />
                        :
                        <Box pt={5} w={{base:'100%',md:'20%'}}>
                            <Text as={'p'} fontSize='sm'>
                                {date}
                            </Text>
                        </Box>
                }

                <Stack gap={0} width={{base:'100%',md:srcImg ? '100%' : '80%'}}>
                    <CardBody p={{base:2, md:5}}>
                        <Heading display={'flex'} w={'full'} alignItems={'center'} justifyContent={'space-between'} size='md' color={isHovered ? colorHoverTitle : color} transition='color 0.2s'>
                            <Box display={'flex'} gap={2}>
                                {title}
                                <motion.div
                                    animate={{ x: isHovered ? 5 : 0, y: isHovered ? -5 : 0 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                >
                                    <IconArrowUpRight size={'20px'} />
                                </motion.div>
                            </Box>
                            {
                                gitHub &&
                                <motion.div
                                    whileHover={{
                                        color: '#D6BCFA'
                                    }}
                                    style={{
                                        color: isHovered ? colorIcon : colorBadge,
                                        transition: 'color 0.1s'
                                    }}
                                >
                                    <IconBrandGithub onClick={() => window.open(gitHub)} size={'40px'} />
                                </motion.div>
                            }

                        </Heading>

                        <Text fontSize={'sm'} color={isHovered ? colorHover : color} transition='color 0.2s'>
                            {subtitle}
                        </Text>

                        <Text py='2' color={color} fontSize={{base:'sm', md:'md'}} >
                            {description}
                        </Text>
                    </CardBody>

                    <CardFooter mt={0} pl={0} pt={{base:2, md:0}} gap={2} display={'flex'} flexWrap={'wrap'} width={'100%'}>
                        {
                            tech?.map((unit, i) => (
                                <Badge borderRadius='7px' p={1} colorScheme={colorBadge} key={i}>{unit}</Badge>
                            ))
                        }
                    </CardFooter>
                </Stack>
            </Card>
        </motion.div>
    )
}
