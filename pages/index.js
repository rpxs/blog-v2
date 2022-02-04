import posts from "../lib/posts";
export const config = {
  unstable_runtimeJS: false,
};

export default function Home() {
  return (
    <div className="flex flex-col bg-slate-900 min-h-screen items-center">
      <h1 className="mt-20 mb-10 sm:text-4xl text-3xl text-white font-bold">
        fish&apos;s blog
      </h1>
      <h3 className="mb-10 text-2xl text-white font-bold">all posts: </h3>
      {posts.map((post) => (
        <div key={post.key}>
          <a
            href={"/p/" + post.slug}
            rel="preload"
            className="p-5 bg-slate-800 text-gray-200 font-semibold rounded-sm hover:bg-blue-600"
          >
            {post.title}
          </a>
        </div>
      ))}
    </div>
  );
}

// export async function getServerSideProps() {
//   const posts = require("../lib/posts");
//   return { props: { posts } };
// }
