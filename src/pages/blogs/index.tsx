import Card from '@/components/card';
import Blog from '@/types/blog';
import { loadBlogsFromDirectory } from '@/utils/content';
import generateRSS from '@/utils/rss';
import Head from 'next/head';
import Link from 'next/link';
import { Rss } from "react-feather"

export interface BlogsProps {
    blogs: Blog[]
}

export async function getStaticProps() {

    await generateRSS()

    return {
      props: {
            blogs: loadBlogsFromDirectory()
        }
    };
}

export default function Blogs(props: BlogsProps) {

    return (
        <>
            <Head>
                <title>Blogs</title>
                <link rel="icon" href="/avatar.jpg" />
            </Head>
            <div className="flex flex-col gap-4 mx-6">
                <div>
                    <nav className="inline-flex">
                        <Link className="text-xl text-white" href="/">Home</Link>
                    </nav>
                    <div className="flex items-center gap-2">
                        <h1 className="font-bold text-4xl">Blogs</h1>
                        <Link href="/rss/feed.xml">
                            <Rss />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-4 py-3">
                    {props.blogs.map((blog) => (
                        <Link key={blog.slug} href={`blogs/${blog.slug}`}>
                            <Card
                                header={blog.title}
                                description={blog.description}
                                footer={`${blog.date} · ${blog.readingTime} min`}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </>
        
    )
}