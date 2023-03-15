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
      <div className="flex flex-col flex-grow justify-center items-center gap-6">
        <Image className="rounded-full" src="/avatar.jpg" alt="Avatar" width={102} height={102} />
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl font-bold" >jesse</h1>
          <p className="text-base">Keep it simple :)</p>
        </div>
        <Button text="more about me" href="/about" />
      </div>
    </>
  )
}
