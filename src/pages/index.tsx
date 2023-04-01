import Head from 'next/head'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Button from '@/components/button'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/avatar.jpg" />
      </Head>
      <div className="flex flex-col flex-grow justify-center items-center gap-6 max-w-xs">
        <div className="flex flex-col">
          <p className="text-base">jesse</p>
          <h1 className="text-4xl font-medium">turn your dream into a reality</h1>
        </div>
      </div>
    </>
  )
}
