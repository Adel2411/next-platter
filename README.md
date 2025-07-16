<div align="center">
  <img src="template/public/Logo-Dark-removebg.png" alt="Next-Platter Logo" width="120" height="120" />
  
  # 🍽️ Next-Platter
  
  ### *The Ultimate Next.js Project Scaffolding CLI*
  
  [![npm version](https://img.shields.io/npm/v/next-platter?color=success&style=flat-square)](https://www.npmjs.com/package/next-platter)
  [![Downloads](https://img.shields.io/npm/dm/next-platter?color=blue&style=flat-square)](https://www.npmjs.com/package/next-platter)
  [![License](https://img.shields.io/npm/l/next-platter?color=green&style=flat-square)](LICENSE)
  [![GitHub Stars](https://img.shields.io/github/stars/Adel2411/next-platter?style=flat-square)](https://github.com/Adel2411/next-platter)
  
  **Transform your development workflow with production-ready Next.js templates**
  
  *Skip the setup, start building amazing applications today!*
  
</div>

---

## 🚀 **Why Next-Platter?**

**Next-Platter** is the fastest way to bootstrap production-ready Next.js applications. Think of it as your personal **plate** of premium templates 🍽️ — carefully crafted, battle-tested, and ready to serve!

Starting with **one comprehensive template**, Next-Platter focuses on quality over quantity, delivering a complete foundation that covers all modern web development needs. More specialized templates are coming soon!

### ⚡ **Lightning Fast Setup**
Go from idea to running application in under 60 seconds. No more hours spent on boilerplate configuration.

### 🏗️ **Enterprise-Grade Architecture**
Built with scalability in mind, featuring modular folder structures and industry best practices.

### 🔒 **Security First**
Pre-configured authentication, authorization, and security middleware out of the box.

### 🎨 **Beautiful by Default**
Stunning UI components, smooth animations, and responsive design that works everywhere.

---

## ✨ **What's Included**

### 🛠️ **Core Technologies**
- **Next.js 15** + **React 19** - Latest and greatest
- **TypeScript** - Type safety for robust development
- **Tailwind CSS v4** - Modern styling with utility-first approach
- **Shadcn/ui** - Beautiful, accessible component library

### 🔧 **Developer Experience**
- **Zod** - Runtime type validation
- **React Hook Form** - Powerful form management
- **Zustand** - Lightweight state management
- **React Query** - Server state synchronization
- **Framer Motion** - Smooth animations

### 🧪 **Quality Assurance**
- **Cypress** - End-to-end testing suite

### 🚀 **Production Ready**
- **Docker** - Containerization support
- **Performance Optimized** - Built-in optimizations
- **SEO Ready** - Meta tags and sitemap generation

### 🔐 **Authentication & Security**
- **Complete Auth Flow** - Login, register, forgot password
- **Protected Routes** - Middleware-based route protection
- **Token Management** - Secure cookie-based authentication
- **Form Validation** - Client & server-side validation

### 🎯 **Smart Features**
- **Interactive CLI** - Guided project setup
- **Git Integration** - Automatic repository initialization
- **Dependency Management** - Optional automatic installation
- **Theme System** - Light/dark mode toggle
- **Error Handling** - Global error boundaries
- **Loading States** - Centralized loading management

---

## 📦 **Quick Start**

### Option 1: Using npx (Recommended)
```bash
npx next-platter my-awesome-app
```

### Option 2: Global Installation
```bash
# Install globally
npm install -g next-platter

# Create new project
next-platter my-awesome-app
```

### Option 3: Using create-next-app
```bash
npx create-next-app@latest --example https://github.com/Adel2411/next-platter/tree/main/template my-awesome-app
```

### 🏃‍♂️ **Get Running**
```bash
cd my-awesome-app
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start building! 🎉

---

## 🎮 **Interactive CLI Experience**

Next-Platter provides a delightful CLI experience with:

- 🤔 **Smart Prompts** - Interactive questions to customize your setup
- 📁 **Project Name Validation** - Prevents naming conflicts and ensures clean project names
- 🔄 **Git Integration** - Optional repository initialization with `.gitignore` and initial commit
- 📦 **Dependency Management** - Choose to install dependencies automatically or skip for later
- 🎨 **Beautiful Output** - Colorful spinners, progress indicators, and success messages
- ⚡ **Graceful Interruption** - Clean process handling with Ctrl+C (SIGINT)
- 🚫 **Intelligent Exclusions** - Automatically excludes `node_modules`, `.next`, and other build artifacts
- 🔧 **Cross-Platform Support** - Works seamlessly on Windows, macOS, and Linux

### **What Happens During Setup:**

1. **Project Creation** - Copies template files with intelligent exclusions (skips `node_modules`, `.next`, etc.)
2. **Git Repository** - Optionally initializes git with `.gitignore` and creates initial commit
3. **Dependencies** - Optionally installs npm packages with real-time progress display
4. **Ready to Go** - Provides clear next steps with beautifully formatted output

---

## 🏗️ **Template Philosophy**

All Next-Platter templates follow proven architectural principles:

### 🎯 **Feature-Driven Development**
Each template is organized with self-contained features that include:
- **Components** - UI elements specific to the feature
- **API Logic** - Data fetching and business logic
- **Types** - TypeScript definitions
- **Schemas** - Data validation rules
- **Tests** - Feature-specific test suites

### � **Scalable Structure**
Templates are designed with growth in mind:
- **Modular Organization** - Clear separation of concerns
- **Industry Best Practices** - Battle-tested patterns
- **Type Safety** - Full TypeScript support
- **Developer Experience** - Optimized tooling and workflows

---

## **Available Templates** 📦

Currently, **Next-Platter** ships with **one carefully crafted template**:

### 🎯 **Next.js Starter Template**
A production-ready foundation featuring:
- **Complete Authentication System** - Login, register, password reset, email verification
- **Modern Tech Stack** - Next.js 15, React 19, TypeScript, Tailwind CSS
- **UI Components** - Shadcn/ui for beautiful, accessible design
- **State Management** - Zustand for global state, React Query for server state
- **Form Handling** - React Hook Form + Zod validation
- **Testing Suite** - Cypress E2E testing pre-configured
- **Development Tools** - Docker, ESLint, Prettier, Husky
- **Animations** - Framer Motion for smooth interactions
- **Theme Support** - Light/dark mode with Next Themes

### 🚀 **More Templates Coming Soon!**

We're actively working on expanding our template collection. Planned templates include:
- **Database-Powered Apps** - With Prisma, Drizzle, or MongoDB
- **E-commerce Stores** - Complete shopping cart and payment integration
- **Admin Dashboards** - Analytics, charts, and management interfaces
- **Blog Platforms** - MDX-powered content management
- **API Services** - REST and GraphQL API templates

**Want to suggest a template?** [Open an issue](https://github.com/Adel2411/next-platter/issues) and let us know what you'd like to see!

---

## **Folder Structure Overview** _(for templates)_

Each template provides a well-organized folder structure to guide you on where to place pages, components, features, hooks, and more.

_(Refer to each template’s README for specific details.)_



---

## **Future Plans & Roadmap** 🗺️

### **Coming Soon**
- 🗄️ **Database Templates** - Prisma, Drizzle, MongoDB integrations
- 📝 **CMS Templates** - Strapi, Sanity, Contentful setups
- 🛒 **E-commerce Template** - Shopping cart, payments, inventory
- 📊 **Dashboard Template** - Admin panels, analytics, charts
- ✍️ **Blog Template** - MDX, SEO optimized, comment system
- 🌐 **API Template** - REST/GraphQL APIs with documentation

### **Enhanced CLI Features**
- Template selection wizard
- Custom configuration options
- Plugin system for extensibility
- Auto-update mechanism

---

## 🤝 **Contributing**

We love contributions! Here's how you can help:

- 🐛 **Report Bugs** - Found an issue? Let us know!
- 💡 **Suggest Features** - Have ideas for new templates or features?
- 🔧 **Submit PRs** - Code contributions are always welcome
- 📚 **Improve Docs** - Help make our documentation better
- ⭐ **Star the Repo** - Show your support!

### **Development Setup**
```bash
git clone https://github.com/Adel2411/next-platter.git
cd next-platter
npm install
npm link
```

---

## 📄 **License**

MIT © [Adel HB](https://github.com/Adel2411)

---

<div align="center">

## 💬 **Get Support & Connect**

[![GitHub Issues](https://img.shields.io/github/issues/Adel2411/next-platter?style=for-the-badge)](https://github.com/Adel2411/next-platter/issues)
[![Discord](https://img.shields.io/badge/Discord-Join%20Us-5865F2?style=for-the-badge&logo=discord&logoColor=white)](#)
[![Twitter](https://img.shields.io/badge/Twitter-Follow-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](#)

**📧 Email:** [hadjarabadel.2411@gmail.com](mailto:hadjarabadel.2411@gmail.com)
**🐙 GitHub:** [@Adel2411](https://github.com/Adel2411)

---

### 🚀 **Ready to build something amazing?**

```bash
npx next-platter my-next-big-thing
```

**Start your Next.js project faster and smarter with Next-Platter!** ⚡

*Made with ❤️ by developers, for developers*

</div>
