import React from 'react'
import { useRefs } from '@/app/context/RefContext';
import { Text, useColorModeValue } from '@chakra-ui/react'
import { Element } from 'react-scroll';

export default function Description() {
    const { descriptionRef } = useRefs();
    const color = useColorModeValue('blackAlpha.700', 'whiteAlpha.700')
    const colorNegrita = useColorModeValue('black', 'white')
    return (

        <Text
            as={'p'}
            fontSize={{ base: 'sm', md: 'md' }}
            color={color}
            w={'100%'}
            p={{ base: '5', md: 0 }}
            id='description'
            ref={descriptionRef}
        >
            <Text
                as={'span'}
                color={colorNegrita}
                fontSize={{ base: 'sm', md: 'md' }}
                w={'max-content'}
            >¿Cómo llegué hasta aquí? </Text>
            En 2022, mi interés dio un giro radical al tomar un curso de JavaScript y escribir mi primer "alert('Hola mundo')". Este logro encendió mi curiosidad y me sumergió en la
            <Text
                as={'span'}
                color={colorNegrita}
                fontSize={{ base: 'sm', md: 'md' }}
                w={'max-content'}
            > informática. </Text>
            Me apasiona el desarrollo frontend, es como tener una hoja en blanco donde puedo dar vida a diseños creativos, pero estoy en constante exploración, adentrándome en el desarrollo backend y ciencia de datos. Soy un tipo raro que disfruta resolviendo problemas de diseño y construyendo interfaces inteligentes. Mi enfoque es hacer que las aplicaciones web sean útiles e interesantes. Para mantenerme al día, sigo novedades en redes sociales y me relaciono con profesionales. 
            <Text
                as={'span'}
                color={colorNegrita}
                fontSize={{ base: 'sm', md: 'md' }}
                w={'max-content'}
            > Siempre busco oportunidades y desafíos para crecer en el mundo IT.</Text>
            
        </Text>
    )
}
