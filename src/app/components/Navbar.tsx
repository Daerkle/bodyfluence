'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="z-10">
            <Image
              src="/img/Logo_weiß_weiß.png"
              alt="HCOR Logo"
              width={150}
              height={59}
              className="w-auto h-auto"
            />
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-hcor-red">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-hcor-red">
              Über mich
            </Link>
            <Link href="mailto:info@healthconsultingrieger.de" className="text-white hover:text-hcor-red">
              Kontakt
            </Link>
            <Link href="/anamnesebogen" className="text-white hover:text-hcor-red">
              Anamnesebogen
            </Link>
            <Link
              href="https://blog.healthconsultingrieger.de"
              className="bg-white text-hcor-black px-4 py-2 rounded-lg hover:bg-hcor-red hover:text-white transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
