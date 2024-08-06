import { useLanguage } from '@/app/context/LanguageContext';
import { Link, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  const color = useColorModeValue('blackAlpha.700', 'whiteAlpha.700');
  const { texts } = useLanguage();
  return (
 
      <Text
      as={'footer'}
      pb={20}
      color={color}
      pl={{base:5, md: '0'}}
      pr={{base:5, md: '0'}}
      >
        {texts.footer.title}<Link href='https://brittanychiang.com/'>Brittany Chiang</Link>{texts.footer.text1}
      </Text>
    
  )
}
