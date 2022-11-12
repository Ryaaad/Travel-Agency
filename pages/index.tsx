import Head from 'next/head'
import Navbar from './Navbar'

import Landing from './CMP/Landing'
export default function Home() {
  return (
    <div style={{
      backgroundImage: `url(https://media.istockphoto.com/id/526151656/photo/sand-dune-45-in-sossusvlei-namibia.jpg?s=170667a&w=0&k=20&c=TXOInnvZjP-d8_wNjhw-lc2Sp7JqBHO2gt3hM7FKlrs=)`,
 
    }}
    className='h-[100vh] w-[100vw] bg-cover bg-center ' >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <Landing></Landing>
    </div>
  )
}