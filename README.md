This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Next.js

A React framework for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.

- Framework for creating pre-rendered websites
- Offers us both server side rendering(SSR) and static site generation(SSG)
- SSR: When React components are rendered into HTML pages on the server, when a page request comes from the browser
- SSG: When React components are rendered into HTML pages at the built time, so that we can deploy the webpages and JS bundles them
- SO Next.js creates pre-rendered React components before sending them to the browser. The benefits:

1. Pre-rendering improves performance
1. Better SEO(search engine optimization)

- Without Next, React renders components in the browser, called Client side rendering.

### Installation

`npx create-next-app next-list`

### Folders inside Next App

1. pages: Here all different pages components will be created. Every page in Next has its own React component.So, for about page we will have an about component,for contact page we ll have a contact component, etc.
1. api: for all api end points
1. public: for images,etc
1. styles: for CSS files

### run it locally

`npm run dev`

- And you will be shown `url : http://localhost:3000`
- Copt this url and paste it in browser and you will see your Next App running.

### pages folder

- So, if I create a file say, contact.js inside `pages` folder, Next will automatically create a route `/about` and link that route with this file. The file name and location of each page component is tied to the route of that particular page. The only exception to this is `index.js` file inside `pages` folder, as Next create a special route `/` (and not `/index`) for `index.js` file.
- Let's create a file `about.js` inside `pages` folder

```js
const About = () => {
  return (
    <div>
      <h1> About</h1>
      <p>Hello, I am Sid</p>
    </div>
  );
};

export default About;
```

- Now, if we go to our running app and add `/about` after `localhost:3000`, we see a new page which shows the content of out `about.js` file.
- We can also create sub folders, say `yahoo` inside `pages` folder and create page components inside that sub folder say `test123.js`. So, now Next will create a route for this page as `/yahoo/test123`. So, thw route depends on the sub folder name and also the file name inside that sub folder.
- Say, we create another page inside the `yahoo` subfolder, say `index.js`, so now Next will create a route for this as `/yahoo`. Always remember for a file name `index.js`, Next will always create a root route ONLY
- So, we can create a multi page website with Next very easily

### Dropping components

- These are not page components, which we can reuse in different page components. Examples are Navbar comp, contact form comp. We DO NOT store these dropping components inside `pages` folder. We store them in a different folder, created in root, say `comps` or `components`. Let's create a folder `components` and inside it create a file called `Navbar.js`. Then we go to `index.js` and import it there.
