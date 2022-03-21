/* eslint-disable @next/next/no-head-element */
import redis from "ioredis";
const client = new redis(process.env.REDIS_URL);
import { useRef } from "react";
export default function Editor({ source, slug }) {
  const textRef = useRef(null);
  const passwordRef = useRef(null);
  const handleForm = async () => {
    if (textRef.current.value == "") return;
    if (passwordRef.current.value == "") return;
    const res = await fetch(`/api/edit/${slug}`, {
      body: JSON.stringify({
        data: textRef.current.value,
        password: passwordRef.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { success } = await res.json();
    if (!success) {
      console.log("owo sad");
      return;
    } else console.log("owo noice");
  };

  return (
    <>
      <head>
        <title>fish&apos;s blog</title>
      </head>
      <div className="flex flex-col bg-slate-900 font-sans text-slate-200 min-h-screen items-center">
        <p className="my-10 text-2xl font-semibold">fish blog editor</p>

        <textarea
          ref={textRef}
          className="prose prose-invert w-5/6 bg-transparent p-3 border-purple-400 border-2"
          defaultValue={source}
        ></textarea>

        <input
          type="password"
          ref={passwordRef}
          placeholder="password"
          className="my-10 border-purple-400 bg-transparent text-center border-2 prose prose-invert"
        />
        <button
          className="bg-teal-500 hover:bg-teal-600 px-5 py-3 rounded-full"
          onClick={handleForm}
        >
          publish!
        </button>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const slug = ctx.query.slug;
  const source = await client.hget("posts", slug);
  return { props: { source: source, slug: slug } };
}
