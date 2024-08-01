import { VStack } from '@chakra-ui/react'
import React from 'react'
import CardProject from './CardProject'
import Link from 'next/link'
import { useRefs } from '@/app/context/RefContext';
import { experience } from '@/data/experience';

export default function Experience() {
  const { experienceRef } = useRefs();
  return (
    <VStack ref={experienceRef} id='experience' p={0} justifyContent={'center'} alignItems={'flex-start'} width={'100%'} mt={40} gap={10}>
      {
        experience.map((work, i) => (
          <CardProject
            date={work.date}
            to={work.link}
            title={work.rol}
            subtitle={work.place}
            description={work.description}
            tech={work.tech}
          />
        ))
      }

      <Link href={'#'}>Ver CV completo</Link>
    </VStack>
  )
}
