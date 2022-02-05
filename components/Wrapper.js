import Head from "next/head";
export default function Wrapper(props) {
  return (
    <div className="bg-slate-900 text-gray-300 flex flex-col min-h-screen items-center">
      <Head>
        <title>{props.meta.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="my-20 sm:text-4xl text-3xl font-bold">
        <h1>{props.meta.title}</h1>
      </div>
      <div className="prose prose-invert mb-5 w-5/6 text-lg">
        {props.children}
      </div>
      <a
        className="px-5 py-2 font-semibold mb-5 bg-teal-600 hover:bg-teal-700 rounded-full"
        href="../"
        rel="preload"
      >
        go back
      </a>
    </div>
  );
}
