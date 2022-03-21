// Next.js API route handler for editing a page. For POST requests, take the data and set it in the redis hashmap for the requested path.

const redis = require("ioredis");
const client = new redis(process.env.REDIS_URL);

export default async function edit(req, res) {
  const slug = req.query.slug;
  if (req.method === "POST" && req.body.data != null) {
    const { data } = req.body;
    console.log(req.body.password);
    if (
      req.body.password &&
      req.body.password === process.env.EDITOR_PASSWORD
    ) {
      await client.hset("posts", slug, data);
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false });
    }
  } else {
    const source = await client.hget("posts", slug);
    if (typeof source != "string") {
      res.status(404).send("stop playing these games!");
    }
    res.status(200).send(source);
  }
}
