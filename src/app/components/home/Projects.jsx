import { Heading, Text, VStack } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import CardProject from './CardProject'
import Link from 'next/link'
import { useRefs } from '@/app/context/RefContext';
import { projects } from '@/data/works';
import { IconArrowRight } from '@tabler/icons-react';
import { HoverContext } from '@/app/context/HoverContext';
import { motion } from "framer-motion"

export default function Projects() {
  const { projectsRef } = useRefs();
  const { isHoveredGlobal, setGlobalHover } = useContext(HoverContext);
  const [linkHover, setLinkHover] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setGlobalHover(true)}
      onHoverEnd={() => setGlobalHover(false)}
    >
      <VStack ref={projectsRef} id='projects' p={0} justifyContent={'center'} alignItems={'flex-start'} width={'100%'} mt={{base:20, md:40}} gap={10} mb={{base:5, md:40}}>
      <Heading pl={5} as='h4' size={'md'} display={{ base: 'flex', md: 'none' }}>Proyectos</Heading>
        {
          projects?.map((project, i) => (
            project.description != null &&
            <CardProject
              key={i}
              title={project.name}
              description={project.description}
              tech={project.topics}
              srcImg={project.srcImg}
              isHoveredGlobal={isHoveredGlobal}
              to={project.liveDemo ? project.liveDemo : project.html_url}
              gitHub={project.liveDemo && project.html_url}
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
              fontSize: '20px'
            }}
            href={'https://github.com/leeansilva'}
            target='_blank'
          >
            <Text ml={{base:5, md:0}} fontSize={{base:'md', md:'lg'}}>Ver todos mis proyectos</Text>
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
