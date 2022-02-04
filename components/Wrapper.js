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
      <div className="w-5/6 flex flex-col gap-5 mb-10 text-lg">
        {props.children}
      </div>
    </div>
  );
}
