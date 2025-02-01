import Navbar from './nav-bar';
import NavbarMobile from './nav-bar-mobile';
import React from 'react';

export default async function Nav() {
  return (
    <>
      <NavbarMobile />
      <Navbar />
    </>
  );
}
