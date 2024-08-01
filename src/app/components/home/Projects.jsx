import { VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import CardProject from './CardProject'
import Link from 'next/link'
import { useRefs } from '@/app/context/RefContext';

export default function Projects() {
  const { projectsRef } = useRefs();
  const [data, setData] = useState(null);
  // https://api.github.com/users/{username}/repos?per_page=100&page=1

  useEffect(() => {
    fetch('https://api.github.com/users/leeansilva/repos?per_page=100&page=1')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data)
      });
  }, []);

  return (
    <VStack ref={projectsRef} id='projects' p={0} justifyContent={'center'} alignItems={'flex-start'} width={'100%'} mt={40} gap={10} mb={40}>
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <Link href={'#'}>Ver todos mis proyectos</Link>
    </VStack>
  )
}
