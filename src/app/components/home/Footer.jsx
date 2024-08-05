import { Link, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  const color = useColorModeValue('blackAlpha.700', 'whiteAlpha.700')
  return (
 
      <Text
      as={'footer'}
      pb={20}
      color={color}
      pl={{base:5, md: '0'}}
      pr={{base:5, md: '0'}}
      >
        Diseño creado por <Link href='https://brittanychiang.com/'>Brittany Chiang</Link>, codeado en Visual Studio por mí :). Construido con NextJS y Chakra UI, deploy en Vercel. La fuente de todos los textos es Inter.
      </Text>
    
  )
}
