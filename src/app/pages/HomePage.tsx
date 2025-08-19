import React from 'react'
import { Header } from '../components/Header'
import Image from 'next/image'
import { Footer } from '../components/Footer'

export const HomePage = () => {
  return (
    <div>
        <Header />
        {/* Hero Section */}
        <section className='h-screen bg-cover bg-center' style={{ backgroundImage: "url('/hero-1.png')" }}>
          <div className='h-full w-full px-6 md:pr-10 bg-black/50 flex flex-col justify-center items-center md:items-end text-center md:text-right'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-medium text-white font-[Lily_Script_One]'>
              Motif tanpa batas dengan <span> <br /> </span> sentuhan budaya Indonesia
            </h2>
            <h3 className='text-lg md:text-2xl mt-4 max-w-2xl text-gray-300 font-[Noto_Serif_HK]'>
              Batik yang dapat dipakai <span> <br /> </span> dimana saja dan kapan saja
            </h3>
          </div>
        </section>

        {/* About Section */}
        <section id='Tentang' className='h-screen bg-cover bg-center' style={{ backgroundImage: "url('./About.png')" }}>
          <div className='h-full w-full px-6 md:px-16 bg-black/50 flex flex-col justify-center items-center text-center text-white'>
              <h2 className='text-3xl md:text-5xl mb-4 font-bold font-[Noto_Serif_HK]'>Hai, Kami Pesonabatiku</h2>
              <p className='text-xl md:text-4xl max-w-4xl font-[Noto_Serif_HK]'>Pesonabatiku adalah nama toko yang menyediakan beragam pakaian dan celana dengan motif batik. 
                Produsen kami adalah perusahaan kencana ungu yang telah lama memproduksi dan menjual berbagai fashion batik
              </p>
          </div>
        </section>

        {/* Image Grid Section */}
        <section id='Galeri' className='h-full w-full px-6 md:px-16 my-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[800px]'>
            {/* Mengatur aspect ratio untuk mobile */}
            <div className="rounded-xl overflow-hidden relative h-64 md:h-auto">
              <Image src='/image-section1.png' alt='image1' className="object-cover object-center w-full h-full transition-transform duration-300 hover:scale-105"  layout='fill'></Image>
            </div>
            <div className="rounded-xl overflow-hidden relative h-64 md:h-auto">
              <Image src='/image-section2.png' alt='image2'  className="object-cover object-center w-full h-full transition-transform duration-300 hover:scale-105" layout='fill'></Image>
            </div>
            <div className="rounded-xl overflow-hidden relative h-64 md:h-auto">
              <Image src='/image-section3.png' alt='image3'  className="object-cover object-top w-full h-full transition-transform duration-300 hover:scale-105" layout='fill'></Image>
            </div>
            <div className="rounded-xl overflow-hidden relative h-64 md:h-auto">
              <Image src='/image-section4.png' alt='image4'  className="object-cover object-top w-full h-full transition-transform duration-300 hover:scale-105" layout='fill'></Image>
            </div>
          </div>
        </section>

        {/* Product Banner Section */}
        <section className='h-60 md:h-80 w-full bg-cover bg-center' style={{ backgroundImage: "url('./product-section.png')" }}>
          <div className='h-full w-full bg-black/50 flex justify-center items-center text-white'>
              <h3 className='text-3xl md:text-5xl font-bold'>Produk Kami</h3>
          </div>
        </section>

        {/* Product List Section */}
        <section id='Produk' className='h-full w-full my-16 px-6 md:px-16'>
          {/* Grid layout untuk produk */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center'>  
      
              <div className='bg-white h-[400px] w-full max-w-xs shadow-lg overflow-hidden rounded-2xl'>
                  <Image src='/product-1.png' alt='product1' width={250}  height={250} className='w-full h-[250px] object-cover object-top transition-transform duration-300 hover:scale-105'></Image>
                  <div className='flex flex-col gap-3 p-4'>
                    <h3 className='text-2xl font-semibold'>Batik Dress</h3>
                    <p className='text-base text-gray-600'>Dress untuk wanita</p>
                    <h3 className='text-lg font-bold text-[#DF7134]'>Rp. 100.000</h3>
                  </div>
              </div>

              <div className='bg-white h-[400px] w-full max-w-xs shadow-lg overflow-hidden rounded-2xl'>
                  <Image src='/product-1.png' alt='product1' width={250}  height={250} className='w-full h-[250px] object-cover object-top transition-transform duration-300 hover:scale-105'></Image>
                  <div className='flex flex-col gap-3 p-4'>
                    <h3 className='text-2xl font-semibold'>Batik Dress</h3>
                    <p className='text-base text-gray-600'>Dress untuk wanita</p>
                    <h3 className='text-lg font-bold text-[#DF7134]'>Rp. 100.000</h3>
                  </div>
              </div>

              <div className='bg-white h-[400px] w-full max-w-xs shadow-lg overflow-hidden rounded-2xl'>
                  <Image src='/product-1.png' alt='product1' width={250}  height={250} className='w-full h-[250px] object-cover object-top transition-transform duration-300 hover:scale-105'></Image>
                  <div className='flex flex-col gap-3 p-4'>
                    <h3 className='text-2xl font-semibold'>Batik Dress</h3>
                    <p className='text-base text-gray-600'>Dress untuk wanita</p>
                    <h3 className='text-lg font-bold text-[#DF7134]'>Rp. 100.000</h3>
                  </div>
              </div>

              <div className='bg-white h-[400px] w-full max-w-xs shadow-lg overflow-hidden rounded-2xl'>
                  <Image src='/product-1.png' alt='product1' width={250}  height={250} className='w-full h-[250px] object-cover object-top transition-transform duration-300 hover:scale-105'></Image>
                  <div className='flex flex-col gap-3 p-4'>
                    <h3 className='text-2xl font-semibold'>Batik Dress</h3>
                    <p className='text-base text-gray-600'>Dress untuk wanita</p>
                    <h3 className='text-lg font-bold text-[#DF7134]'>Rp. 100.000</h3>
                  </div>
              </div>                                     

          </div>

          <div className='flex justify-center mt-12 mb-6'>
             <button className='w-[200px] h-[70px] bg-[#2B7247] text-white text-xl rounded-2xl hover:bg-green-800 transition-colors'>Lihat Lainnya</button>
          </div>

        </section>

        {/* E-commerce Banner Section */}
        <section className='h-60 md:h-80 w-full bg-cover bg-center' style={{ backgroundImage: "url('./product-section.png')" }}>
          <div className='h-full w-full bg-black/50 flex justify-center items-center text-white'>
              <h3 className='text-3xl md:text-5xl font-bold'>E-commerce</h3>
          </div>
        </section>
        
        {/* E-commerce Logo Section */}
        <section className='h-auto py-16 px-8'>
          <div className='flex flex-col md:flex-row justify-around items-center gap-12'>
            <Image src='/Tokopedia.svg' alt='logo-tokopedia' className='w-[250px] md:w-[400px]'></Image>
            <Image src='/Shopee_logo.svg' alt='logo-shopee' className='w-[150px] md:w-[200px]'></Image>
          </div>
        </section>

        <Footer/>

    </div>
  )
}