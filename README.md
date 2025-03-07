# Cookie-Web Project

This project demonstrates how to share cookies between a Next.js server, client, and an external server, with a focus on cookie domain and `SameSite` attributes.

The app runs on two different ports:
- **Server**: Port `10000`
- **App**: Port `3000`

## Prerequisites

Before running the project, ensure you have the following set up:

1. **Node.js**: The project requires Node.js, version `18.x` or higher.
2. **Set up `/etc/hosts`**: You need to configure your `hosts` file to map the following domains to your local machine:
    - `app.demo.local` -> `127.0.0.1`
    - `api.demo.local` -> `127.0.0.1`

You can modify `/etc/hosts` as follows:

```
127.0.0.1 app.demo.local
127.0.0.1 api.demo.local
```

This ensures the app will communicate with both the frontend and the backend correctly.

## Installation

To install the project dependencies, run the following command in your terminal:

```bash
npm install
```

This will install both runtime and development dependencies.

## Running the Project

### Start the Server
To start the server, which runs on port `10000`:

1. Run the following command to start the external API server:

```bash
npm run server
```

This will start the server and it will listen on `http://api.demo.local:10000`.

### Start the App
To start the Next.js app, which runs on port `3000`:

1. Run the following command to start the app:

```bash
npm run dev
```

This will start the Next.js development server and it will be accessible at `http://app.demo.local:3000`.

### Accessing the App
Once both servers are running:

- You can access the **frontend** (Next.js app) by navigating to `http://app.demo.local:3000`.
- You can access the **API server** by navigating to `http://api.demo.local:10000`.

## How It Works

This project is designed to test how cookies are shared between the frontend (Next.js app), the backend (Express server), and external servers. Specifically, it demonstrates the impact of the `SameSite` and `Domain` attributes on cookie sharing.

- **SameSite**: This attribute is used to control whether a cookie is sent with cross-origin requests. The app tests different `SameSite` settings to demonstrate how cookies are shared across different origins.
- **Domain**: The `Domain` attribute allows the cookie to be shared across subdomains. This project demonstrates how the domain configuration can impact cookie sharing between the server, client, and external server.

### Key Areas Tested:

- **Cross-origin cookies**: How cookies behave when accessed across different subdomains (e.g., `app.demo.local` and `api.demo.local`).
- **Secure cookies**: How secure cookies are handled based on the `SameSite` and `Domain` settings.
- **Cookie sharing between client and server**: Whether cookies are shared correctly between the server and client, as well as how external servers can interact with the cookies.

## Scripts

The following scripts are available for running the project:

- **dev**: Start the Next.js development server with turbopack.

```bash
npm run dev
```

- **server**: Start the external server (cookie API server).

```bash
npm run server
```

- **build**: Build the Next.js app for production.

```bash
npm run build
```

- **start**: Start the Next.js app in production mode.

```bash
npm run start
```

- **lint**: Run the linter to check for issues in your code.

```bash
npm run lint
```

## Dependencies

### Runtime Dependencies

- `axios`: For making HTTP requests.
- `cookie-parser`: To parse cookies in the API server.
- `cors`: For handling cross-origin requests.
- `express`: The server framework used for the API server.
- `next`: The Next.js framework for building the frontend.
- `react` and `react-dom`: React libraries for building UI components.

### Development Dependencies

- `eslint`: Linter to maintain code quality.
- `eslint-config-next`: ESLint configuration for Next.js projects.
- `tailwindcss`: Utility-first CSS framework.
- `typescript`: Adds TypeScript support to the project.
- `@eslint/eslintrc`: ESLint configuration package.
- `@types/*`: TypeScript type definitions for Node, React, and React-DOM.