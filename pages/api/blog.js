// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    posts: [
      {
        title: "Dorfnox's Developer Journey",
        slug: "dorfnox-developer-journey",
        key: 1,
      },
    ],
  });
}
