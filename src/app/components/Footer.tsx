import React from 'react'
import Image from 'next/image'

export const Footer = () => {
  return (
    <div className='w-full h-auto bg-[#2B7247]'>
      <div className='flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8 md:gap-4 px-6 md:px-10 py-10 text-white'>

        {/* Bagian Alamat dan Kontak */}
        <div className='flex flex-col items-center md:items-start gap-3'>
          <div className='flex justify-start items-center gap-3'>
            <Image src='/location-outline-1.svg' alt='location' width={24} height={24}></Image>
            <p>Jl. Ir Juanda No 3 Ciputat Timur, <span><br /></span> Tangerang Selatan, Indonesia</p>
          </div>
          <div className='flex justify-start items-center gap-3'>
            <Image src='/call-outline-1.svg' alt='phone' width={24} height={24}></Image>
            <p>0821XXXXXXXX</p>
          </div>
        </div>

        <div className='order-first md:order-none'>
          <Image src='/Pesona.svg' alt='logo' width={140} height={85}></Image>
        </div>

        {/* Bagian Jam Operasional */}
        <div className='flex justify-start items-center gap-3'>
          <Image src='/time-outline-1.svg' alt='time' width={24} height={24}></Image>
          <p>Senin - Sabtu, 10.00 - 16.00 WIB</p>
        </div>

      </div>
    </div>
  )
}