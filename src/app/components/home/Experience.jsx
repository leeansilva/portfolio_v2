import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import CardProject from './CardProject'
import Link from 'next/link'
import { useRefs } from '@/app/context/RefContext';
// import { experience } from '@/data/experience';
import { IconArrowRight } from '@tabler/icons-react';
import { HoverContext } from '@/app/context/HoverContext';
import { motion } from "framer-motion"
import { useLanguage } from '@/app/context/LanguageContext';

export default function Experience() {
  const { experienceRef } = useRefs();
  const { isHoveredGlobal, setGlobalHover } = useContext(HoverContext);
  const [linkHover, setLinkHover] = useState(false);
  const { texts, experiences } = useLanguage();

  return (
    <motion.div
      onHoverStart={() => {
        setGlobalHover(true);
      }}
      onHoverEnd={() => {
        setGlobalHover(false);
      }}
    >
      <VStack zIndex={10} ref={experienceRef} id='experience' p={0} justifyContent={'center'} alignItems={'flex-start'} width={'100%'} mt={{ base: 20, md: 40 }} gap={10} >
        <Heading position={'sticky'} top={0} pl={5} as='h4' size={'md'} display={{ base: 'flex', md: 'none' }}>Experiencia</Heading>
        {
          experiences.map((work, i) => (

            <CardProject
              key={i}
              date={work.date}
              to={work.link}
              title={work.rol}
              subtitle={work.place}
              description={work.description}
              tech={work.tech}
              isHoveredGlobal={isHoveredGlobal}
            />

          ))
        }

        <motion.div
          onHoverStart={() => setLinkHover(true)}
          onHoverEnd={() => setLinkHover(false)}
          style={{ display: 'flex', gap: '5px', justifyContent: 'center', alignItems: 'center' }}
        >
          <Link
            style={{
              display: 'flex',
              gap: '5px',
              borderBottom: linkHover ? '3px solid purple' : '3px solid black',
              transition: 'border 0.2s',
              paddingBottom: '2px',
              fontSize: '20px',
            }}
            href={'https://www.canva.com/design/DAFR-Wj7XB8/5NOIdw9jSXqLlS8XzoKldw/view?utm_content=DAFR-Wj7XB8&utm_campaign=designshare&utm_medium=link&utm_source=editor'}
            target='_blank'
          >
            <Text ml={{ base: 5, md: 0 }} fontSize={{ base: 'md', md: 'lg' }}>{texts.links[0]}</Text>
          </Link>
          <motion.div
            animate={{ x: linkHover ? 5 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <IconArrowRight size={'20px'} />
          </motion.div>
        </motion.div>
      </VStack>
    </motion.div>
  )
}
