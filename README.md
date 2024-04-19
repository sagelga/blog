# Blog.sagelga.com website

This blog website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator from Meta.

> This repository is upgraded to Docusaurus version 3.2 since 18 April 2024

### Installation

```bash
yarn
```

### Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

Automatically opens local port 3000

### Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
USE_SSH=true yarn deploy
```

Not using SSH:

```
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Automatically deploys website with Cloudflare Pages

With change made in the repository, Cloudflare Pages will trigger a build with `yarn build`.

### Reference

- https://medium.com/@rupertcarr/creating-and-deploying-a-personal-blog-portfolio-using-docusaurus-4a33f1f4e476
- https://docusaurus.io/docs/blog
