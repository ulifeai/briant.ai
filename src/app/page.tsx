"use client";
import React from 'react';

import Navbar from '../components/blocks/public/Navbar'; 
import Header from '../components/blocks/public/Header'; 


type LayoutSectionsType = {
  title: string;
  description: string;
}

export default function Home() {


  return (
    <>
    <Navbar />
    <Header />
    </>

  );

}



