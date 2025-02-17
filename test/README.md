# Next.js Template

Welcome to the **Next.js Template**, generated using **Next-Platter** – a CLI tool designed to quickly create and scaffold Next.js project templates with best practices and essential tools.

---

## **Template Features**

- **Modular Architecture:** Feature-folder structure for better modularity, maintainability, and scalability.
- **Lightning Fast Performance:** Optimized with Next.js 15 and React 19.
- **Enterprise-Grade Security:** Built-in authentication, authorization, and protected routes.
- **Rich Ecosystem Integration:** Zod, React Hook Form, Zustand, React Query.
- **Beautiful UI Components:** Shadcn/ui for modern, accessible design.
- **Seamless Animations:** Framer Motion for smooth animations.
- **End-to-End Testing:** Cypress integration for E2E testing.
- **Containerization Ready:** Docker support for deployment.
- **Theme Customization:** Next Themes for light/dark mode.
- **Global Error & Success Handling:** Centralized user feedback.
- **Global Loading State:** Managed with Zustand.
- **API Handling Made Easy:** Pre-configured fetch instance.
- **Authentication Flows:** Complete auth features.
- **Cypress Test Coverage:** Extensive E2E tests.
- **Template Presentation Pages:** Pre-built home and protected routes.
- **Cookie Management:** Token-based auth.
- **Server-Side Validation:** Zod with Next.js server actions.
- **Client-Side Validation:** React Hook Form + Zod.

---

## **Installed Libraries**

This template comes with the following libraries pre-installed:

- **Zod** (validation)
- **React Hook Form** (form management)
- **Zustand** (state management)
- **React Query** (async state management)
- **Shadcn/ui** (UI components)
- **Framer Motion** (animations)
- **Cypress** (E2E testing)
- **Docker** (containerization)
- **Next Themes** (theme management)

---

## 📁 **Folder Structure Overview**

```
.
├── cypress/          # End-to-end tests
├── docker-compose.yml
├── Dockerfile
├── public/           # Static assets
├── src/              # Main source code
│   ├── app/          # Pages, routes, layouts
│   ├── components/   # UI components
│   ├── features/     # Feature-specific logic
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utilities and helpers
│   ├── providers/    # Context and providers
│   ├── stores/       # State management
│   └── types/        # TypeScript types
└── tailwind.config.ts
```

This structure is designed for flexibility and clarity. Add pages under `app/`, place reusable components in `components/`, implement business logic in `features/`, and manage state in `stores/`.

---

## 🛠️ Configuration

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

## Running the Project Locally

### Run the development server:

```bash
yarn dev
# or
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## 🐳 **Docker Usage**

### Build and Start:

```bash
docker-compose up --build
```

### Stop:

```bash
docker-compose down
```

---

## 🧪 **Testing with Cypress**

### Run Tests :

```bash
npm run cypress:open
```

---

## **Contact**

- **GitHub**: [Adel2411](https://github.com/Adel2411)
- **Email**: [hadjarabadel.2411@gmail.com](mailto:hadjarabadel.2411@gmail.com)
