import Wrapper from "../../components/Wrapper";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import redis from "ioredis";
const client = new redis(process.env.REDIS_URL);
export const config = {
  unstable_runtimeJS: false,
};
export default function Post({ source }) {
  return (
    <Wrapper meta={source.frontmatter}>
      <MDXRemote {...source} />
    </Wrapper>
  );
}
export async function getServerSideProps(ctx) {
  const slug = ctx.query.slug;
  const source = await client.hget("posts", slug);
  if (typeof source != "string") {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
      props: {},
    };
  }
  const mdxSource = await serialize(source, { parseFrontmatter: true });
  return { props: { source: mdxSource } };
}
