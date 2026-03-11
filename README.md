# 🎨 UI Systems Lab

![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-purple)
![Radix](https://img.shields.io/badge/Radix-Primitives-black)
![shadcn](https://img.shields.io/badge/shadcn-ui-gray)
![MUI](https://img.shields.io/badge/MUI-Material%20UI-blue)

A hands-on **React + TypeScript** playground for learning and comparing modern UI/design system approaches with:

- **Radix Primitives**
- **shadcn/ui**
- **MUI**

Instead of using only one library, this project **rebuilds the same UI patterns across all three systems** so their tradeoffs become clear in a real application.

The project explores:

- component APIs
- styling workflows
- accessibility patterns
- theming systems
- developer experience
- real-world UI architecture tradeoffs

---

## 🚀 Project Goal

The purpose of **UI Systems Lab** is to move beyond simply “using a component library” and instead understand:

- how different systems approach **UI architecture**
- when **unstyled primitives** are the best foundation
- when **editable component code** is the best long-term strategy
- when a **full component library** delivers the fastest results

Rather than building isolated demos, the project uses **consistent side-by-side implementations of real UI patterns**.

---

## 🧰 Tech Stack

Core technologies used in the project:

- **React**
- **TypeScript**
- **Vite**
- **React Router**
- **Tailwind CSS**

UI systems explored:

- **Radix UI**
- **shadcn/ui**
- **MUI**

Additional libraries:

- **Lucide React**
- **Sonner**
- **Framer Motion**

---

## 📚 What This Project Covers

The application is organized into pages that compare the same UI pattern across all three systems.

### Included sections

### Comparison Pages

- **Buttons**
- **Forms**
- **Overlays**
- **Data Display**
- **Navigation & Feedback**
- **Theming**
- **Final Comparison**

Each page implements the same pattern with:

- Radix primitives
- shadcn/ui components
- MUI components

This makes differences in API design and developer workflow easier to see.

---

## 🧪 Interactive Labs

Beyond simple comparisons, the project includes interactive exploration areas.

### Button Playground

A control panel allows you to adjust:

- variants
- sizes
- icons
- disabled state

The same configuration is rendered simultaneously with:

- shadcn/ui
- MUI
- custom component implementation

---

### Form Playground

Compare form inputs across systems while interacting with:

- text inputs
- selects
- switches
- checkboxes

---

### Accessibility Lab

Tests accessibility patterns including:

- keyboard navigation
- focus states
- dialogs
- menus

This highlights how Radix, shadcn, and MUI handle accessibility concerns.

---

### States Lab

Demonstrates common product UI states:

- loading
- skeleton placeholders
- empty states
- error states

These patterns are essential in real applications but often overlooked in component demos.

---

## 🧪 What I Compared

### 1. Buttons

Compared how each system handles:

- primary buttons
- secondary buttons
- destructive buttons
- outline/ghost styles
- icon buttons

### 2. Forms

Compared:

- text inputs
- selects
- checkboxes
- switches
- labels
- control composition

### 3. Overlays

Compared:

- dialogs
- dropdown menus
- tabs

### 4. Data Display

Compared:

- cards
- badges/chips
- alerts
- accordions
- tables

### 5. Navigation & Feedback

Compared:

- breadcrumbs
- toasts/snackbars
- progress indicators
- lightweight navigation patterns

### 6. Theming

Compared:

- token systems
- color workflows
- border radius strategy
- dark mode approach
- customization models

---

## 🧠 Key Takeaways

### Radix Primitives

**Best for:** custom design systems, accessibility-first architecture, and maximum control

**What stood out:**

- Excellent primitive building blocks
- Strong accessibility and behavior patterns
- Clear separation of behavior and presentation

**Tradeoff:**

- Requires the most manual UI assembly and styling

### shadcn/ui

**Best for:** modern product UIs where you want editable, app-owned components

**What stood out:**

- Components live directly in the codebase
- Easy to customize and extend
- Great balance between speed and flexibility
- Feels very natural in modern React app development

**Tradeoff:**

- Still requires design decisions and comfort with utility-first styling

### MUI

**Best for:** fast delivery, internal tools, enterprise apps, and broad component coverage

**What stood out:**

- Fastest path to polished UI
- Strong defaults
- Large component ecosystem
- Consistent prop-driven APIs

**Tradeoff:**

- Can feel more framework-shaped and less bespoke than a custom design system approach

---

## 🏗 Project Structure

```bash
src/
  app/
    App.tsx
    router.tsx

  components/
    layout/
      AppShell.tsx
      Sidebar.tsx
      Topbar.tsx
      MobileNav.tsx

    home/
      FeatureHighlightCard.tsx
      ExploreSection.tsx

    playground/
      PlaygroundControls.tsx
      PlaygroundPreview.tsx

    states/
      StateBlock.tsx

    shared/
      DemoCard.tsx
      PageHeader.tsx
      ComparisonMatrix.tsx
      ComparisonNotes.tsx
      TokenSwatch.tsx

    ui/
      ...shadcn components

  pages/
    HomePage.tsx
    ButtonsPage.tsx
    FormsPage.tsx
    OverlaysPage.tsx
    DataDisplayPage.tsx
    NavigationFeedbackPage.tsx
    ThemingPage.tsx
    AccessibilityLabPage.tsx
    MiniDashboardPage.tsx
    StatesLabPage.tsx
    ComparisonPage.tsx

  data/
    dashboardData.ts

  lib/
    utils.ts
    statusStyles.ts

  main.tsx
  index.css
```

## 📦 Main Dependencies

```bash
npm install react-router-dom
npm install framer-motion
npm install lucide-react
npm install @mui/material @emotion/react @emotion/styled
npm install sonner
```

### Radix primitives

```bash
npm install @radix-ui/react-dialog
npm install @radix-ui/react-dropdown-menu
npm install @radix-ui/react-tabs
npm install @radix-ui/react-checkbox
npm install @radix-ui/react-switch
npm install @radix-ui/react-select
npm install @radix-ui/react-accordion
npm install @radix-ui/react-progress
npm install @radix-ui/react-toast

```

### shadcn/ui components

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add dialog
npx shadcn@latest add tabs
npx shadcn@latest add dropdown-menu
npx shadcn@latest add checkbox
npx shadcn@latest add select
npx shadcn@latest add switch
npx shadcn@latest add label
npx shadcn@latest add accordion
npx shadcn@latest add badge
npx shadcn@latest add table
npx shadcn@latest add alert
npx shadcn@latest add breadcrumb
npx shadcn@latest add progress
npx shadcn@latest add sheet
npx shadcn@latest add skeleton
npx shadcn@latest add sonner
```

---

## 🎯 Why I Built This

As a front-end developer, I wanted a project that helped me understand not just how to use UI libraries, but how to evaluate them professionally.

This project helped answer questions like:

- When should I use a primitive-based system?
- When is editable local component code a better long-term choice?
- When is a full component library the most efficient option?
- How do these systems differ in accessibility, theming, and developer experience?

--

## 💼 Portfolio Value

This project is useful as a portfolio piece because it demonstrates:

- React + TypeScript architecture
- component-driven development
- design system thinking
- accessibility awareness
- UI comparison and tradeoff analysis
- practical knowledge of Radix, shadcn/ui, and MUI

Instead of showing only that I can use a library, it shows that I can evaluate and implement UI systems thoughtfully.

---

## 📝 What I Learned

A few of the biggest lessons from building this:

- Radix teaches the deepest design-system thinking
- shadcn/ui feels like the strongest middle ground for modern app development
- MUI is excellent when speed and coverage matter most
- theming is not just colors — it is also about tokens, consistency, API design, and maintainability
- accessibility becomes much easier to reason about when behavior and presentation are separated clearly

---

## 🔮 Future Improvements

Possible next steps for this project:

- tooltip / popover comparisons
- drawer / sheet comparisons
- chart components
- data-heavy dashboards
- performance comparison of libraries
- deeper design token exploration

---

## 🌐 Live Demo

[Live Demo](https://ui-design-systems-lab.vercel.app)

---

## 📸 Screenshots

### Home

![Home](./src/assets/screenshots/home.png)

### Buttons Comparison

![Buttons](./src/assets/screenshots/buttons.png)

### Forms Comparison

![Forms](./src/assets/screenshots/forms.png)

### Data Display

![Data](./src/assets/screenshots/data-display.png)

### Theming

![Theming](./src/assets/screenshots/theming.png)

---

## 👤 Author

### Thomas Woroniak

**Front-End Developer** focused on building modern, polished, user-friendly **React** applications with strong attention to architecture, usability, and design.

---
