import posts from "../lib/posts";
export const config = {
  unstable_runtimeJS: false,
};

export default function Home() {
  return (
    <div className="flex flex-col bg-slate-900 font-mono text-white min-h-screen items-center">
      <p className="my-10 text-lg">fish&apos;s blog</p>
      <p className="mb-10 text-white">all posts: </p>
      <ul className="list-disc">
        {posts.map((post) => (
          <li key={post.key}>
            <a
              href={"/p/" + post.slug}
              rel="preload"
              className="underline decoration-2 text-blue-500 hover:text-blue-600"
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// export async function getServerSideProps() {
//   const posts = require("../lib/posts");
//   return { props: { posts } };
// }
