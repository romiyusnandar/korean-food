import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="p-4 bg-[#e0e0e0] sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="text-lg font-bold">Seujenhi</p>
        </Link>

        <div className="space-x-4 flex flex-row">
          <Link href="/">
            <p className="">Beranda</p>
          </Link>
          <Link href="/toko">
            <p className="">Toko</p>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar