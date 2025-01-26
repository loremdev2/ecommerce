# E-commerce Project

This project is built using Next.js and Prisma. Below are the steps to connect, start with Prisma, and the necessary environment variables and commands.

## Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js
- npm or yarn
- PostgreSQL (or any other supported database)

### Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:

```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

Replace `USER`, `PASSWORD`, `HOST`, `PORT`, and `DATABASE` with your actual database credentials.

### Prisma Setup

1. Initialize Prisma:
    ```sh
    npx prisma init
    ```

2. Generate Prisma Client:
    ```sh
    npx prisma generate
    ```

3. Push the Prisma schema to the database:
    ```sh
    npx prisma db push
    ```

### Running the Project

Start the development server:
```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Commands

- `npx prisma generate`: Generate Prisma Client
- `npx prisma db push`: Push the Prisma schema to the database

## Learn More

To learn more about Next.js and Prisma, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
