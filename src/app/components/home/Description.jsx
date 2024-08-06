import React from 'react'
import { useRefs } from '@/app/context/RefContext';
import { Text, useColorModeValue } from '@chakra-ui/react'
import { Element } from 'react-scroll';
import { useLanguage } from '@/app/context/LanguageContext';

export default function Description() {
    const { descriptionRef } = useRefs();
    const { texts } = useLanguage();
    const color = useColorModeValue('blackAlpha.700', 'whiteAlpha.700');
    const colorNegrita = useColorModeValue('black', 'white');

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
            >{texts.description.title}</Text>
            {texts.description.text1}
            <Text
                as={'span'}
                color={colorNegrita}
                fontSize={{ base: 'sm', md: 'md' }}
                w={'max-content'}
            > {texts.description.text2}</Text>
            {texts.description.text3}
            <Text
                as={'span'}
                color={colorNegrita}
                fontSize={{ base: 'sm', md: 'md' }}
                w={'max-content'}
            >{texts.description.text4}</Text>
            
        </Text>
    )
}
