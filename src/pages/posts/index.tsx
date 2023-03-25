import Card from '@/components/card';
import Post from '@/types/post';
import { loadPostsFromDirectory } from '@/utils/content';
import generateRSS from '@/utils/rss';
import Head from 'next/head';
import Link from 'next/link';
import { Rss } from "react-feather"

export interface PostsProps {
    posts: Post[]
}

export async function getStaticProps() {

    await generateRSS()

    return {
      props: {
            posts: loadPostsFromDirectory()
        }
    };
}

export default function Posts(props: PostsProps) {

    return (
        <>
            <Head>
                <title>Blog</title>
                <link rel="icon" href="/avatar.jpg" />
            </Head>
            <div className="flex flex-col gap-4 mx-6">
                <div>
                    <nav className="inline-flex">
                        <Link className="text-xl text-white" href="/">Home</Link>
                    </nav>
                    <div className="flex items-center gap-2">
                        <h1 className="font-bold text-4xl">Blog</h1>
                        <Link href="/rss/feed.xml">
                            <Rss />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-4 py-3">
                    {props.posts.map((post) => (
                        <Link key={post.slug} href={`posts/${post.slug}`}>
                            <Card
                                header={post.title}
                                description={post.description}
                                footer={`${post.date} · ${post.readingTime} min`}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </>
        
    )
}