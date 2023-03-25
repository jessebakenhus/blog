import Post from "@/types/post";
import { loadPostsFromDirectory, loadSpecificPost } from "@/utils/content";
import { convertMarkdownToHTML } from "@/utils/markdown";
import Head from "next/head";


interface PostPageProps {
    post: Post;
}

export async function getStaticPaths() {

    return {
        paths: loadPostsFromDirectory().map(post => "/posts/" + post.slug.replace(".md", "")),
        fallback: false
    }
}

export async function getStaticProps({ params: { slug }}) {
    return {
        props: {
            post: loadSpecificPost(slug)
        }
    }
}

export default function PostPage(props: PostPageProps) {

    return (
        <>
            <Head>
                <title>{props.post.title}</title>
                <link rel="icon" href="/avatar.jpg" />
            </Head>
            <div className="flex flex-col flex-grow justify-start items-start px-6 gap-1">
                <div className="flex flex-col">
                    <h1 className="font-bold text-3xl pb-4">{props.post.title}</h1>
                    <div className="flex">
                        {convertMarkdownToHTML(props.post.content)}
                    </div>
                </div>
            </div>
        </>
    )
}