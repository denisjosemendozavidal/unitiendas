/*

Example Structure:


src/
└── app/
    ├── about/
    │   └── page.js       // Accessible at /about
    ├── blog/
    │   ├── page.js       // Accessible at /blog
    │   └── [slug]/
    │       └── page.js   // Dynamic route at /blog/:slug
    ├── contact/
    │   └── page.js       // Accessible at /contact
    └── page.js           // Accessible at /

Creating New Pages
    Static Routes: For a static route like /services, create a folder services with a page.js inside:

        app/
        └── services/
        └── page.js

Dynamic Routes: For dynamic segments like /product/[id], use brackets:

    app/
    └── product/
        └── [id]/
            └── page.js


Example of a Page Component

    // src/app/about/page.js
        export default function About() {
            return <h1>About Us</h1>;
        }




*/
