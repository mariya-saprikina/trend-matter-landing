'use client';

import {useEffect, useState} from 'react';
import {Menu, X} from 'lucide-react';
import Link from 'next/link';
import {cn} from '@/utils/utils';
import {useRouter} from 'next/navigation';
import {NAV_LINKS} from '@/constants';
// import React from 'react';

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // const handleSignOut = async () => {
  //   const {error} = await supabase.auth.signOut();
  //   if (error) {
  //     console.error('Failed to sign out', error);
  //   }
  //   router.push('/');
  //   router.refresh();
  // };

  // prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          'fixed right-3 top-3 z-40 rounded-full p-2 transition-colors duration-200 hover:bg-gray-200 focus:outline-none active:bg-gray-300 sm:hidden',
          open && 'hover:bg-gray-100 active:bg-gray-200'
        )}
      >
        {open ? (
          <X className="h-6 w-6 text-primary" />
        ) : (
          <Menu className="h-6 w-6 text-primary" />
        )}
      </button>
      <nav
        className={cn(
          'fixed inset-0 z-20 hidden w-full bg-white px-5 py-16 lg:hidden',
          open && 'block'
        )}
      >
        <ul className="grid divide-y divide-gray-200">
          {NAV_LINKS.map(({name, slug}) => (
            <li key={slug} className="py-3">
              <Link
                href={slug}
                onClick={() => setOpen(false)}
                className="flex w-full font-semibold capitalize"
              >
                {name}
              </Link>
            </li>
          ))}
          <li className="py-3">
            {/* {user ? (
              <form action={handleSignOut}>
                <button className="flex w-full font-semibold capitalize">
                  Sign Out
                </button>
              </form>
            ) : ( */}
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="flex w-full font-semibold capitalize"
            >
              Sign In
            </Link>
            {/* )} */}
          </li>
        </ul>
      </nav>
    </div>
  );
}
