import fs, { read } from 'fs';
import matter from 'gray-matter';
import Blog from "@/types/blog";
import MarkdownContent from '@/types/markdown-content';

const contentPath = "content/posts"

function loadBlogsFromDirectory(): Blog[] {

    const files = fs.readdirSync(contentPath);

    return files.map((fileName) => {

        const slug = fileName.replace(".md", "")
        const file = fs.readFileSync(`${contentPath}/${fileName}`, 'utf-8');
        const readMatter = matter(file);

        return { 
            slug: slug, 
            title: readMatter.data["title"], 
            description: readMatter.data["description"], 
            readingTime: readMatter.data["reading_time"],
            date: readMatter.data["date"],
            content: readMatter.content
        };
    })
}

function loadSpecificBlog(slug: string) {

    console.log(`${contentPath}/${slug}.md`)

    const file = fs.readFileSync(`${contentPath}/${slug}.md`, 'utf-8');
    const readMatter = matter(file);

    return { slug: slug, title: readMatter.data["title"], content: readMatter.content };
}

function loadContentFromMarkdown(path: string, slug: string): MarkdownContent {

    const file = fs.readFileSync(path, 'utf-8')
    const readMatter = matter(file);

    return { slug: slug, title: readMatter.data["title"], content: readMatter.content  }
}

export { loadSpecificBlog, loadBlogsFromDirectory, loadContentFromMarkdown }