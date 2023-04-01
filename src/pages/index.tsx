import Head from 'next/head'

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
          <h1 className="text-4xl font-medium">turn your dreams into a reality</h1>
        </div>
      </div>
    </>
  )
}
