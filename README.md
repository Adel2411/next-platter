# Next.js Starter Template 🚀

Welcome to the **Next.js Starter Template**! This is a highly scalable, production-ready template designed to kickstart your Next.js projects with best practices, modern tools, and a well-organized architecture. Whether you're building a small app or a large-scale project, this template has you covered.

---

## Features ✨

This template comes packed with the following features:

- **Next.js 15**: Built with the latest Next.js features, including the App Router.
- **Feature-Folder Architecture**: Organized by feature for better scalability and maintainability.
- **Tailwind CSS**: Utility-first CSS framework for rapid styling.
- **Zustand**: Lightweight state management for global state.
- **React Query**: Advanced client-side data fetching with caching and retries.
- **shadcn/ui**: Pre-built, accessible, and customizable UI components.
- **Zod**: Schema validation for forms and API responses.
- **Cypress & Jest**: End-to-end and unit testing for robust applications.
- **ESLint & Prettier**: Code linting and formatting for consistent code quality.
- **Framer Motion**: Smooth animations for UI elements.
- **Docker**: Containerization for consistent development and deployment.
- **Senior-Level Error Handling**: Global error boundary and centralized error handling.
- **Next.js Caching**: Built-in caching for server-side data fetching.

---

## Architecture 🏗️

The template follows a **feature-folder architecture** to keep your codebase organized and scalable. Here's an overview of the folder structure:

```text
my-nextjs-starter/
├── public/ # Static assets (images, fonts, etc.)
├── src/
│ ├── app/ # App Router (Next.js 13+)
│ │ ├── (auth)/ # Auth-related routes
│ │ ├── (main)/ # Main app routes
│ │ ├── layout.tsx # Root layout
│ │ └── page.tsx # Home page
│ ├── features/ # Feature-based modules
│ │ ├── auth/ # Authentication feature
│ │ ├── dashboard/ # Dashboard feature
│ │ └── ... # Other features
│ ├── lib/ # Shared utilities and helpers
│ ├── hooks/ # Shared custom React hooks
│ ├── components/ # Shared UI components
│ ├── styles/ # Global styles or CSS modules
│ ├── types/ # TypeScript types/interfaces
│ ├── constants/ # App-wide constants
│ ├── config/ # Configuration files (e.g., API config)
│ └── providers/ # Provider wrappers (e.g., React Query, Zustand)
├── cypress/ # Cypress end-to-end tests
├── tests/ # Jest unit tests
├── .env.local # Environment variables
├── .eslintrc.js # ESLint configuration
├── .prettierrc.js # Prettier configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json # TypeScript configuration
├── next.config.js # Next.js configuration
├── Dockerfile # Docker configuration
├── docker-compose.yml # Docker Compose configuration
├── .dockerignore # Files to ignore in Docker build
└── package.json # Dependencies and scripts
```

---

## Getting Started 🛠️

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18.x or higher.
- **npm**: npm is installed with Node.js by default.

### Installation

You can create a new project using this template in two ways:

1. **Using `npx`**:
   - Run the following command to create a new project using this template:
   ```bash
   npx create-next-template my-app
   ```
2. **Using `create-next-app`**:
   - Alternatively, you can use the `create-next-app` command:
   ```bash
   npx create-next-template my-app
   ```

### Running the Project

1. Navigate to your project directory:
   ```bash
   cd my-app
   ```
2. Start the development server:
   ```bash
   cd my-app
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## Configuration ⚙️

### Environment Variables

Create a `.env.local` file in the root of your project and add the following variables:

```plaintext
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Tailwind CSS

Tailwind CSS is pre-configured in this template. You can customize it by editing the `tailwind.config.js` file.

### ESLint & Prettier

ESLint and Prettier are configured for consistent code quality. You can modify the rules in `.eslintrc.js` and `.prettierrc.js`.

---

## Testing 🧪

This template comes with **Cypress** for end-to-end testing and **Jest** for unit testing.

### Running Tests

- Unit Tests:

```bash
npm test
```

- End-to-End Tests:

```bash
npm run cypress
```

---

## Docker 🐳

This template includes a `Dockerfile` and `docker-compose.yml` for containerization. You can build and run the Docker image using the following commands:

### Building the Docker Image

```bash
docker build -t my-app .
```

### Running the Docker Container

```bash
docker run -p 3000:3000 my-app
```

### Using Docker Compose

```bash
docker-compose up
```

---

## Contributing 🤝

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.
