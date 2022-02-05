/* eslint-disable @next/next/no-head-element */
import posts from "../lib/posts";
export const config = {
  unstable_runtimeJS: false,
};

export default function Home() {
  return (
    <>
      <head>
        <title>fish&apos;s blog</title>
        <meta
          name="description"
          content="a blog containing the thoughts of fish. read for opinions and interviews on web dev."
        ></meta>
      </head>
      <div className="flex flex-col bg-slate-900 font-mono text-white min-h-screen items-center">
        <p className="my-10 text-lg">fish&apos;s blog</p>
        <ul className="list-disc">
          {" "}
          all posts:
          {posts.map((post, index) => (
            <li key={index}>
              <a
                href={"/p/" + post.slug}
                rel="preload"
                className="underline sm:text-base text-sm decoration-2 text-blue-500 hover:text-blue-600"
              >
                {post.title} • {post.publishedAt}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

// export async function getServerSideProps() {
//   const posts = require("../lib/posts");
//   return { props: { posts } };
// }
