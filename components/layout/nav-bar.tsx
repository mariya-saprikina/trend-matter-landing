'use client';

import useScroll from '@/utils/hooks/use-scroll';
import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {User} from '@supabase/supabase-js';

export default function Navbar() {
  const scrolled = useScroll(50);
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;

  return (
    <header
      className={`fixed z-10 padding-x py-4 w-full ${
        scrolled
          ? 'border-b border-gray-200 bg-secondary/50 backdrop-blur-xl'
          : 'bg-secondary'
      }`}
    >
      <nav className="flex max-sm:justify-center justify-between items-center max-container">
        <Link href="#home" className="flex items-center">
          <Image
            src="./images/logo-dark.svg"
            alt="Trend Matter logo"
            width="30"
            height="30"
            className="mr-2 rounded-sm"
          />
          <h2 className="font-inter font-semibold text-primary text-h2">
            trendmatter
          </h2>
        </Link>

        {/* <ul className="flex flex-1 justify-evenly items-center max-lg:hidden max-w-2xl">
          {NAV_LINKS.map((item) => (
            <li key={item.name}>
              <Link
                href={item.slug}
                className="text-style-body2 text-dark_grey font-light"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul> */}
        <div className="sm:flex hidden">
          <Link
            href={`${appUrl}/login`}
            className="rounded-md border border-primary bg-primary p-1.5 px-4 text-style-body2 text-white transition-all hover:bg-white hover:text-black"
          >
            Sign In
          </Link>
          {/* {user ? (
            <form action={signOut}>
              <button className="rounded-md border border-primary bg-primary p-1.5 px-4 text-style-body2 text-white transition-all hover:bg-white hover:text-black">
                Sign Out
              </button>
            </form>
          ) : (
            <Link
              href="https://tally.so/r/wL0xO2"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-primary bg-primary p-1.5 px-4 text-style-body2 text-white transition-all hover:bg-white hover:text-black"
            >
              Join Waitlist
            </Link>
          )} */}
        </div>
      </nav>
    </header>
  );
}
