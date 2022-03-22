# fish blog

I made this after getting tired of Sanity, feel free to fork and PR in stuff you'd like to see.

Why did I move away from Sanity? Well, I didn't like that I had to have the editor separately, and I had no control if I wanted to add custom components. The current solution (in this blog) works pretty well! 

## Redis as a CMS??? Are you crazy?

This isn't exactly a full-fledged CMS. Obviously I don't store any images in Redis. So I feel like we could add a dropzone sort of functionality to the current editor sometime in the future, in the meantime, stay put!

## I want my own Redis blog!!! 

You can fork the repository, feel free to star it too haha. If you think something can be improved in the UI, make a PR, I won't mind! 

## Wait so actually, how does this work?

I store posts in a redis hashmap. The post content has frontmatter, which is used for SEO on the page, and it also has MDX. You can add custom components into this, as long as you load those components in your /pages/p/[slug].js file. The main issue people have with Redis is memory. Storing in memory is costly, but we're not storing any images directly in Redis, so we'll be fine on the cost side of things.

## Example Post???

Here's an example post, remember, you can add custom components :)
```md
---
title: Markdown Is So Cool
slug: markdown-love
publishedAt: 03/16/22
--- 

I **love** markdown, I think it's *super cool* and will use it in my future projects hehe
```

## Why do I need a GitHub ID and Client Secret?

I was trying to implement next-auth but didn't finish. Here's a roadmap of stuff I plan to add in the future :O

- [] Use Next-Auth.js for editor
- [] Implement a comments system
- [] Fix the bad editor UI
- [] Compartmentalize some code
- [] Stop lib/posts.js and use the hashmap to get posts on frontpage

