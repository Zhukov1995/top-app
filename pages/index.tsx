import React from 'react';
import TitleTag from '@/components/title/title';

export default function Home(): JSX.Element {
  return (
    <>
      <TitleTag tag='h1'>Hello NextJS</TitleTag>
      <TitleTag tag='h2'>Hello NextJS</TitleTag>
      <TitleTag tag='h3'>Hello NextJS</TitleTag>
      <TitleTag tag='h4'>Hello NextJS</TitleTag>
      <TitleTag tag='h5'>Hello NextJS</TitleTag>
      <TitleTag tag='h6'>Hello NextJS</TitleTag>
    </>
  )
}
