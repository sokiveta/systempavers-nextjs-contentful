import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Layout = ({ children }) => {
  const imageLoader = ({ src, width, quality }) => {
    return './sp-logo.svg?w=300&q=75';
  };
  return (
    <>
      <header>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link
                href="/"
                className="text-sm font-medium uppercase text-stone-400"
              >
                <Image
                  loader={imageLoader}
                  alt={'System Pavers Outdoor Living Blog'}
                  src={'./sp-logo.svg'}
                  width={300}
                  height={100}
                />
              </Link>
            </li>
          </ul>
          <div>
            <span className="phone">877-728-3778</span>
            <Link href="https://systempavers.com/schedule-appointment">
              <button>GET STARTED</button>
            </Link>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="mt-14 text-sm font-medium uppercase text-stone-400 py-6">
        <div className="container">
          <p className="text-slate-800 text-center text-sm">
            System Pavers is a trademark of the SP Marketing, LLC. Copyright©
            2024, SP Marketing, LLC. All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
