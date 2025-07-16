# Next.js Starter Template

Welcome to your **Next.js Starter Template**, generated using **Next-Platter** 🍽️ – the ultimate CLI tool for scaffolding production-ready Next.js applications with enterprise-grade features and modern development practices.

---

## 🚀 **Template Overview**

This template provides a **complete foundation** for building modern Next.js applications with authentication, state management, beautiful UI components, and comprehensive testing. Everything is pre-configured and ready for production deployment.

### 🎯 **Key Features**

✅ **Complete Authentication System** - Login, register, email verification, password reset  
✅ **Modern Tech Stack** - Next.js 15, React 19, TypeScript, Tailwind CSS v4  
✅ **Beautiful UI Components** - Shadcn/ui for accessible and customizable design  
✅ **State Management** - Zustand for global state, React Query for server state  
✅ **Form Handling** - React Hook Form + Zod validation  
✅ **Testing Suite** - Cypress E2E testing with authentication flows  
✅ **Development Tools** - ESLint, Prettier, Husky git hooks  
✅ **Animations** - Framer Motion for smooth user interactions  
✅ **Theme Support** - Light/dark mode with Next Themes  
✅ **Docker Ready** - Complete containerization setup  
✅ **Global Error Handling** - Centralized error and success feedback  
✅ **Protected Routes** - Middleware-based authentication  
✅ **Cookie Management** - Secure token-based authentication

---

## 📦 **Tech Stack & Libraries**

This template comes pre-configured with the following modern tools:

### 🎨 **Frontend & UI**
- **Next.js 15** - Latest React framework with App Router
- **React 19** - Latest React with new features
- **TypeScript** - Type safety and better DX
- **Tailwind CSS v4** - Utility-first CSS framework
- **Shadcn/ui** - Beautiful, accessible component library
- **Framer Motion** - Smooth animations and transitions
- **Next Themes** - Light/dark mode support

### 🔧 **State & Data Management**
- **Zustand** - Lightweight global state management
- **React Query** - Server state synchronization
- **React Hook Form** - Powerful form management
- **Zod** - Runtime type validation and schema definition

### 🧪 **Testing & Quality**
- **Cypress** - End-to-end testing framework
- **ESLint** - Code linting and quality enforcement
- **Prettier** - Code formatting
- **Husky** - Git hooks for pre-commit checks

### 🚀 **DevOps & Deployment**
- **Docker** - Containerization with Docker Compose
- **TypeScript** - Full type safety across the stack

---

## 📁 **Project Structure**

This template follows a **feature-driven architecture** for maximum scalability:

```
.
├── 🧪 cypress/           # End-to-end testing
│   ├── e2e/             # Test specifications
│   ├── fixtures/        # Test data
│   └── support/         # Test utilities
├── 🌍 public/            # Static assets (images, icons, etc.)
├── 📱 src/               # Main source code
│   ├── 🏠 app/           # Next.js App Router
│   │   ├── (auth)/      # Authentication routes group
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   ├── forgot-password/
│   │   │   ├── reset-password/
│   │   │   └── verify-email/
│   │   ├── protected/   # Protected routes
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   ├── 🧩 components/    # Reusable UI components
│   │   ├── ui/          # Shadcn/ui base components
│   │   ├── BlurIn.tsx   # Custom animation components
│   │   ├── FeatureCard.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeToggle.tsx
│   ├── ⚡ features/      # Feature-based modules
│   │   └── auth/        # Authentication feature
│   │       ├── api/     # API calls and server actions
│   │       ├── components/ # Auth-specific components
│   │       ├── schema/  # Zod validation schemas
│   │       └── types/   # TypeScript definitions
│   ├── 🛠️ lib/           # Utilities and helpers
│   │   ├── api.ts       # Fetch instance configuration
│   │   ├── utils.ts     # General utilities
│   │   └── errorHandler.ts # Error handling
│   ├── 🔧 providers/     # React context providers
│   │   ├── QueryProvider.tsx # React Query setup
│   │   └── ThemeProvider.tsx # Theme provider
│   ├── 📊 stores/        # Zustand state stores
│   │   └── loading.ts   # Global loading state
│   ├── 🏷️ types/         # Global TypeScript types
│   └── 📦 constants/     # App constants and configs
├── 🐳 docker-compose.yml # Docker development setup
├── 🐳 Dockerfile         # Production Docker image
├── 🎨 tailwind.config.ts # Tailwind configuration
├── 📝 tsconfig.json      # TypeScript configuration
└── 🧪 cypress.config.ts  # Cypress testing config
```

### 🎯 **Key Architecture Principles:**

- **Feature-Driven**: Each feature (like `auth`) contains all its related files
- **Co-location**: Components, hooks, types, and tests live near their usage
- **Separation of Concerns**: Clear boundaries between UI, business logic, and data
- **Scalability**: Easy to add new features without affecting existing code

---

## ⚡ **Quick Start Guide**

### 1. **Environment Setup**

First, copy the environment template and configure your variables:

```bash
cp .env.example .env.local
```

Update `.env.local` with your specific configuration:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8080
LOCAL_URL=http://localhost:8080
HOST_URL=http://localhost:8080

# Add your specific environment variables here
```

### 2. **Install Dependencies** (if not done by CLI)

```bash
npm install
# or
yarn install
```

### 3. **Start Development Server**

```bash
npm run dev
# or
yarn dev
```

Your app will be available at `http://localhost:3000` 🚀

### 4. **Explore the Features**

- **Home Page** (`/`) - Landing page with feature overview
- **Authentication** (`/login`, `/register`) - Complete auth flows
- **Protected Route** (`/protected`) - Authenticated user content
- **Theme Toggle** - Switch between light/dark modes

---

## 🧪 **Testing**

### Run Cypress E2E Tests

```bash
npm run cypress:open
```

The template includes comprehensive tests for:
- Authentication flows (login, register, forgot password)
- Form validation and error handling
- Navigation and protected routes
- Theme switching functionality

---

## 🐳 **Docker Development**

### Start with Docker Compose

```bash
docker-compose up --build
```

### Stop the containers

```bash
docker-compose down
```

The Docker setup includes:
- **Development environment** with hot reload
- **Production-ready build** configuration
- **Environment variable** support

---

## 🎨 **Customization Guide**

### **Adding New Features**

1. **Create feature directory**: `src/features/your-feature/`
2. **Add components**: `src/features/your-feature/components/`
3. **Define types**: `src/features/your-feature/types/`
4. **Add schemas**: `src/features/your-feature/schema/`
5. **Create API calls**: `src/features/your-feature/api/`

### **Adding New Pages**

1. Create new page in `src/app/your-page/page.tsx`
2. Add navigation links in components
3. Update middleware if protection is needed

### **Customizing UI Components**

- **Shadcn/ui components**: Located in `src/components/ui/`
- **Custom components**: Add to `src/components/`
- **Styling**: Use Tailwind classes or update `globals.css`

### **State Management**

- **Global state**: Add new stores in `src/stores/`
- **Server state**: Use React Query in your components
- **Form state**: Use React Hook Form with Zod validation

---

## 🔗 **Useful Resources**

### **Documentation**
- [Next.js Documentation](https://nextjs.org/docs)
- [Shadcn/ui Components](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

### **State Management**
- [Zustand Guide](https://github.com/pmndrs/zustand)
- [React Query](https://tanstack.com/query/latest)
- [React Hook Form](https://react-hook-form.com/)

### **Testing**
- [Cypress Documentation](https://docs.cypress.io/)

---

## 🤝 **Need Help?**

- **Issues**: [Report bugs](https://github.com/Adel2411/next-platter/issues)
- **Discussions**: [Community support](https://github.com/Adel2411/next-platter/discussions)
- **Email**: [hadjarabadel.2411@gmail.com](mailto:hadjarabadel.2411@gmail.com)

---

## 📄 **Next Steps**

1. **Customize the theme** in `tailwind.config.ts`
2. **Replace mock API calls** with your real backend
3. **Add your business logic** in the features directory
4. **Deploy to your favorite platform** (Vercel, Netlify, etc.)

**Happy coding! 🚀**

---

*Generated with ❤️ by [Next-Platter](https://github.com/Adel2411/next-platter)*
