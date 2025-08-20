## 🧠 Project Thought Process – PrepSagr

When starting PrepSagr, the main goal was to build a smart learning platform that helps users prepare for technical interviews and skill development.

“I chose Monolithic Architecture because it keeps everything simple at the beginning."

This means both the frontend (UI) and the backend (server + database) live inside one single codebase.

Why? 👉 Because it keeps everything simple, easy to manage, and faster to develop at the early stage.

The thought process was:

Start small, grow later → At First, focus on getting the basics (auth system, routes, UI) working.

Single codebase → Easier to maintain and deploy without worrying about multiple services.

My-first approach → Build features step by step, always keeping in mind what the user needs most (signup, signin, secure routes, learning resources).

Scalability later → Right now, simplicity is more important. Later, if the platform grows, I can break it into microservices.

📈 Current Project Progress (55%)

✅ Basic setup is complete.

✅ User Signup, Signin, and Signout are working.

✅ Protected routes are added so only logged-in users can access certain pages. without login user can access reading only.

Next steps → user post, view, and content management features.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
