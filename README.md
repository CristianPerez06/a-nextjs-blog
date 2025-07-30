# a-nextjs-blog

A modern blog application built with Next.js featuring a responsive design, pagination, and dynamic post details. The app displays a paginated list of blog posts with preview cards, allows users to view detailed post information, and includes loading states and error handling.

## Tech stack

- Typescript
- NextJS
- ReactJS
- SASS
- @heroicons/react
- @react-hook/media-query
- react-spinners
- Prettier, ESlint and Husky

## Getting Started

### Prerequisites

Before running the development server, you need to set up your Dummy API credentials.

**Set Environment Variables**

Create a `.env` file in the root directory and add:

```
REACT_APP_APP_ID=your_app_id_here
REACT_APP_BASE_URL=https://dummyapi.io/data/v1
```

### Development Server

Next step is to install dependencies and run the development server:

```bash
To run the application locally:

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
```

## Live Demo

A live version of this app is hosted on [Vercel](https://vercel.com/) (free tier). Please note:

- The app may take several seconds to start on first use, as the server may be sleeping.
- Performance may be limited during periods of high usage.

[View the live demo here](https://a-nextjs-blog.vercel.app/)
