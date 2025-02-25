import React from 'react'
import { Heading } from '@/registry/src/components/ui/heading'

const HeadingDemo = () => {
  return (
    <div className=''>
      <Heading variant='h1'>Heading H1</Heading>
      <Heading variant='h2' className='-mt-7'>Heading H2</Heading>
      <Heading variant='h3' className='-mt-5'>Heading H3</Heading>
      <Heading variant='h4'>Heading H4</Heading>
      <Heading variant='h5' className='mb-1'>Heading H5</Heading>
      <Heading variant='h6'>Heading H6</Heading>
    </div>
  )
}

export default HeadingDemo