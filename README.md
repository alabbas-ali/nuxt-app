# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment) for more information.

Multible futures like :
- No Imports needed (Life time saver) Auto Imports 
- Top level Await
- Typed API Routers
- Nested Routings
- Data Fetching 
.. etc

This is only 3 files and you keep wondering what i will do nuxt ?? this is a progressive framework that can do many different things like:
- SPA
- static
- SSR
- API
- All togather

- Documentation handles all the folder structure and what is really possible to do. like pages (handle all the routing as next do) also the documentation explains what every file on the project will do.

- The server engine that builds from scratch with the name "NITRO" supports SSR and static side generation. Most importantly it will allow you to deploy on the edge (Like Cloudflare workers for example). which means we are not limited to NodeJs which will allow us to run server-side code in multiple locations over the world as close as possible to the end-user making the app extremely fast.

- Hibered Rundering (where some routes are static and some others are SSR) like Next-JS.

- Auto import is capable of recognizing every component you use and automatically importing it. every component you define in components and compostables folders is automatically available to use. a potential issue that could happen is the name collagen but it will provide a warning when that happens.
Does that produce a massive bundle size but the answer is no,  it automatically performs code splitting based on the components that you used on each individual page.
