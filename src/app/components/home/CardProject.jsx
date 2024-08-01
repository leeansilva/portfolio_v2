import React, { useState } from 'react'
import { Card, CardBody, CardFooter, Heading, Image, Stack, Text, Badge } from '@chakra-ui/react'
import { motion } from "framer-motion"


export default function CardProject({ date, srcImg, title, description, subtitle, tech, to }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                cursor:'pointer',
            }}
            style={{ width: '100%', borderRadius:'8px' }}
        >
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                bg={'none'}
                p={5}
            >
                {
                    !date ?
                        <Image
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                            alt='Caffe Latte'
                        />
                        :
                        <Text
                            as={'p'}
                            w={{ base: '100%', sm: '450px' }}
                            fontSize='sm'
                            display={'flex'}
                            justifyContent={'flex-start'}
                            alignItems={'flex-start'}
                            pt={5}
                        >
                            {date}
                        </Text>
                }

                <Stack gap={0}>
                    <CardBody>
                         <Heading size='md' color={isHovered ? 'orange.300' : 'white'} transition='color 0.2s'>
                            {title}
                        </Heading>

                        <Text fontSize={'sm'} color={isHovered ? 'purple.200' : 'white'} transition='color 0.2s'>
                            {subtitle}
                        </Text>

                        <Text py='2' color={'whiteAlpha.700'}>
                            {description}
                        </Text>
                    </CardBody>

                    <CardFooter gap={2} display={'flex'} flexWrap={'wrap'}>
                        {
                            tech?.map((unit, i) => (
                                <Badge borderRadius='7px' p={1} colorScheme='purple'>{unit}</Badge>
                            ))
                        }

                    </CardFooter>
                </Stack>
            </Card>
        </motion.div>

    )
}
