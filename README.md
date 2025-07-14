# Meet Connect

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

Meet Connect offers a robust video conferencing experience with the following key features:

-   **Instant Meetings**: Quickly start or join video calls.
-   **Scheduled Meetings**: Plan and schedule meetings for a later time.
-   **Personal Room**: A dedicated, persistent meeting room for personal use.
-   **Meeting Recordings**: Record your meetings and access them later.
-   **Practice Section**: A dedicated area for practicing and testing video/audio setup.

## Routes

The application utilizes the following main routes:

-   `/`: Homepage, displaying upcoming meetings and meeting creation options.
-   `/upcoming`: View a list of all scheduled upcoming meetings.
-   `/previous`: Access a history of past meetings.
-   `/recordings`: Browse and manage recorded meetings.
-   `/personal-room`: Your dedicated personal meeting room.
-   `/meeting/[id]`: Dynamic route for individual meeting rooms.
-   `/practice`: A dedicated page for practicing video and audio settings.
-   `/sign-in` & `/sign-up`: Authentication routes powered by Clerk.

## Technologies Used

This project utilizes the following key technologies:

-   **[Next.js](https://nextjs.org/)**: A React framework for building full-stack web applications.
-   **[React](https://react.dev/)**: A JavaScript library for building user interfaces.
-   **[TypeScript](https://www.typescriptlang.org/)**: A strongly typed superset of JavaScript that compiles to plain JavaScript.
-   **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapidly building custom designs.
-   **[Shadcn UI](https://ui.shadcn.com/)**: A collection of reusable components built using Radix UI and Tailwind CSS.
-   **[Clerk](https://clerk.com/)**: A complete user management platform for React, Next.js, and the web, providing authentication and user management.
-   **[Stream](https://getstream.io/)**: For building powerful in-app chat, messaging, and video experiences, specifically for real-time video functionalities.

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

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
