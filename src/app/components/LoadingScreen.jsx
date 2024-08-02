import { Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import AnimatedSVG from './AnimatedSvg'
import { motion } from 'framer-motion';

export default function LoadingScreen() {
    const bg = useColorModeValue('orange.50', '#090c10')

    return (
        <Box
            position={'absolute'}
            zIndex={100000}
            h={'100svh'}
            w={'100svw'}
            bg={bg}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <motion.div
                initial={{ opacity: 1, scale: 1 }}
                animate={{
                    opacity: [1, 0.8, 0], // Cambia la opacidad en diferentes fases
                    scale: [1, 1.02 ,0.6] // Cambia el tamaño en diferentes fases
                }}
                transition={{
                    duration: 1, // Duración total de la animación
                    ease: "easeInOut",
                    delay:2,
                    times: [0, 0.7, 1] // Proporciona tiempos relativos para cada fase
                }}
            >
                <AnimatedSVG />
            </motion.div>
        </Box>
    )
}
