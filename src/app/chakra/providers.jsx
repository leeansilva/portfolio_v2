// app/providers.tsx
'use client'
import { ChakraProvider } from '@chakra-ui/react'
import { tableAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { Inter } from "next/font/google";
import { RefProvider } from '../context/RefContext'
// import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
// import '../chakra/style.css'

const inter = Inter({ subsets: ["latin"] });

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys)

const baseStyle = definePartsStyle({
  tr: {
    fontFamily: inter.style.fontFamily, // change the font family
  },
  th: {
    fontFamily: inter.style.fontFamily, // change the font family
  },
})
const tableTheme = defineMultiStyleConfig({ baseStyle })

const theme = extendTheme({
  components: { Table: tableTheme },
})

export default function Providers({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <RefProvider>
        {/* <ProgressBar color='#364e32' height='3px' /> */}
        {children}
      </RefProvider>
    </ChakraProvider>
  )
}