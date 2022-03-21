/* eslint-disable @next/next/no-head-element */
export const config = {
  unstable_runtimeJS: false,
};

export default function NotFound() {
  return (
    <>
      <head>
        <title>fish&apos;s blog</title>
      </head>
      <div className="flex flex-col bg-slate-900 font-sans text-slate-200 min-h-screen items-center">
        <p className="my-10 text-3xl font-semibold">
          404 - This Page Doesn&apos;t Exist!
        </p>
        <p className="prose prose-invert text-lg w-5/6 mb-5">
          Alright, alright. Maybe you were trying to find something that&apos;s
          been removed, or maybe you&apos;ve stumbled upon something else
          entirely? Whatever the case, this page (or post) that you&apos;ve been
          trying to find does not exist.
        </p>
        <a
          className="px-5 py-2 font-semibold mb-5 bg-teal-600 hover:bg-teal-700 rounded-full"
          href="../"
          rel="preload"
        >
          go home
        </a>
      </div>
    </>
  );
}
