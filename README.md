# Next.js Starter Template

Welcome to the **Next.js Starter Template**! This is a highly scalable, production-ready template designed to kickstart your Next.js projects with best practices, modern tools, and a well-organized architecture. Whether you're building a small app or a large-scale project, this template has you covered.

---

## Features

### Core Architecture

- **Feature-Folder Structure**: Modular and maintainable code organization. Each feature (e.g., authentication, dashboard) encapsulates its own components, services, hooks, and state management.
- **Lightning Fast Performance**: Optimized with Next.js 15 and React 19 for server-side rendering (SSR) and static site generation (SSG).
- **Enterprise-Grade Security**: Built-in authentication, authorization, and middleware for secure routing.

### Libraries & Tools

- **Zod**: Data validation for robust and type-safe forms.
- **React Hook Form**: Efficient form management with seamless Zod integration.
- **Zustand**: Lightweight and scalable state management.
- **React Query**: Asynchronous state management for API calls and data fetching.
- **Shadcn/ui**: Beautiful, customizable, and accessible UI components.
- **Framer Motion**: Smooth and interactive animations for enhanced user experience.
- **Cypress**: End-to-end (E2E) testing for reliable and bug-free deployments.
- **Docker**: Containerization for easy deployment across environments.

---

## Architecture

The template follows a **feature-folder architecture** to keep your codebase organized and scalable. Here's an overview of the folder structure:

```text
my-nextjs-starter/
├── public/ # Static assets (logos, icons, images)
├── src/
│ ├── app/ # Next.js App Router (Next.js 13+)
│ │ ├── (auth)/ # Authentication-related routes
│ │ │ ├── login/ # Login page
│ │ │ ├── register/ # Registration page
│ │ │ ├── forgot-password/ # Forgot password page
│ │ │ ├── reset-password/ # Reset password page
│ │ │ └── verify-email/ # Email verification page
│ │ ├── protected/ # Example protected route
│ │ ├── layout.tsx # Root layout
│ │ ├── page.tsx # Home page
│ │ ├── not-found.tsx # 404 page
│ ├── components/ # Reusable UI components
│ │ ├── ThemeToggle.tsx # Theme switcher
│ │ ├── FeatureCard.tsx # Card for feature highlights
│ │ └── ui/ # Common UI components (buttons, inputs, etc.)
│ ├── features/ # Feature-based modules
│ │ ├── auth/ # Authentication logic
│ │ │ ├── components/ # Auth-related UI components (forms, buttons)
│ │ │ ├── api/ # API functions for authentication
│ │ │ ├── schema/ # Validation schemas (e.g., Zod)
│ │ │ └── types/ # TypeScript types for auth
│ │ ├── home/ # Home page-specific components
│ │ └── protected/ # Protected page-specific components
│ ├── hooks/ # Custom React hooks
│ ├── lib/ # Utilities (API calls, error handling, helpers)
│ ├── providers/ # Context providers (e.g., React Query, Theme)
│ ├── stores/ # Zustand store for state management
│ ├── types/ # Global TypeScript types
│ ├── middleware.ts # Next.js middleware (for auth, redirects)
├── cypress/ # Cypress end-to-end testing setup
├── Dockerfile # Docker configuration
├── docker-compose.yml # Docker Compose setup
├── next.config.ts # Next.js configuration
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json # TypeScript configuration
├── .env.local # Environment variables (not included in repo)
└── package.json # Dependencies and scripts
```

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18.x or higher.
- **npm**: npm is installed with Node.js by default.

### Installation

You can create a new project using this template in three ways:

1. **Using `npm` globally**:

   - Install the package globally:
     ```bash
     npm install -g next-platter
     ```
   - Run the command to create a new project:
     ```bash
     next-platter my-app
     ```

2. **Using `npx`**:

   - Run the following command to create a new project using this template:
     ```bash
     npx next-platter my-app
     ```

3. **Using `create-next-app` with a template**:
   - Alternatively, you can use the `create-next-app` command with your template:
     ```bash
     npx create-next-app@latest --example https://github.com/Adel2411/next-starter-template/tree/main/template my-app
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

## Configuration

### Environment Variables

1. Copy the `.env.example` file to `.env.local` in the root of your project:

   ```bash
   cp .env.example .env.local
   ```

2. Update the content of `.env.local` with your related environment variables:

   ```plaintext
   # URL for the public API
   NEXT_PUBLIC_API_URL=http://localhost:8080

   # Local development URL
   LOCAL_URL=http://localhost:8080

   # Host URL for the application
   HOST_URL=http://localhost:8080
   ```

### Tailwind CSS

Tailwind CSS is pre-configured in this template. You can customize it by editing the `tailwind.config.js` file.

---

## Testing

This template comes with **Cypress** for end-to-end.

### Running Tests

1. Run the server:

   ```bash
   npm run dev
   ```

2. End-to-End Tests:
   ```bash
   npm run cypress:open
   ```

---

## Docker 🐳

This template includes a `Dockerfile` and `docker-compose.yml` for containerization. You can build and run the Docker image using the following commands:

### Using Docker

#### Building the Docker Image

```bash
docker build -t my-app .
```

#### Running the Docker Container

```bash
docker run -p 3000:3000 my-app
```

### Using Docker Compose

```bash
docker-compose up
```

---

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.
