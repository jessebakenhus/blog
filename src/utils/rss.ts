import { Feed } from "feed";
import fs from "fs";
import md from 'markdown-it';
import { loadPostsFromDirectory } from "./content";

export default async function generateRSS() {

    const posts = loadPostsFromDirectory();
    const siteURL = process.env.VERCEL_URL;
    const date = new Date();
    const author = {
      name: "jessejes",
      email: "blog@jessejes.com",
      link: siteURL
    };

    const feed = new Feed({
      title: "jessejes",
      description: "jessejes's blog",
      id: siteURL,
      link: siteURL,
      image: `${siteURL}/avatar.jpg`,
      favicon: `${siteURL}/avatar.jpg`,
      copyright: `All rights reserved ${date.getFullYear()}, jessejes`,
      updated: date,
      feedLinks: {
        rss2: `${siteURL}/rss/feed.xml`,
      },
      author,
    });

    posts.forEach((post) => {
      const url = `${siteURL}/posts/${post.slug}`;
      feed.addItem({
        title: post.title,
        id: url,
        link: url,
        description: post.description,
        content: md().render(post.content),
        author: [author],
        contributor: [author],
        date: new Date(post.date),
      });
    });
  
    fs.mkdirSync("./public/rss", { recursive: true });
    fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
      
}