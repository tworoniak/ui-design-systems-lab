# 🎨 UI Systems Lab

A hands-on **React + TypeScript** playground for learning and comparing modern UI/design system approaches with:

- **Radix Primitives**
- **shadcn/ui**
- **MUI**

This project implements the **same UI patterns across all three systems** so you can compare:

- component APIs
- styling workflows
- accessibility patterns
- theming approaches
- developer experience
- real-world tradeoffs

---

## 🚀 Project Goal

The purpose of **UI Systems Lab** is to move beyond simply “using a component library” and instead understand:

- how different systems approach **UI architecture**
- where **unstyled primitives** shine
- when **editable local components** are most useful
- when a **prebuilt library** is the fastest and most practical choice

Rather than building random isolated demos, this project uses consistent side-by-side comparisons across real product UI patterns.

---

## 🧰 Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **React Router**
- **Tailwind CSS**
- **Radix UI**
- **shadcn/ui**
- **MUI**
- **Lucide React**
- **Sonner**

---

## 📚 What This Project Covers

The app is organized into pages that compare the same pattern in all three systems.

### Included sections

- **Buttons**
- **Forms**
- **Overlays**
- **Data Display**
- **Navigation & Feedback**
- **Theming**
- **Final Comparison**

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

    shared/
      ComparisonMatrix.tsx
      ComparisonNotes.tsx
      DemoCard.tsx
      PageHeader.tsx
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
    ComparisonPage.tsx

  lib/
    utils.ts

  main.tsx
  index.css
```

## 📦 Main Dependencies

```bash
npm install react-router-dom
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install @radix-ui/react-dialog
npm install @radix-ui/react-dropdown-menu
npm install @radix-ui/react-tabs
npm install @radix-ui/react-checkbox
npm install @radix-ui/react-switch
npm install @radix-ui/react-select
npm install @radix-ui/react-accordion
npm install @radix-ui/react-progress
npm install @radix-ui/react-toast
npm install lucide-react
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

- add dark mode toggle
- add responsive/mobile navigation patterns
- add drawer/sheet comparisons
- add tooltip/popover comparisons
- add skeleton/loading state comparisons
- add charts and dashboard widgets
- add a dedicated “When I’d use each system” case study page
- add screenshots and a live deployed demo

---

## 🌐 Live Demo

[Live Demo](https://ui-design-systems-lab.vercel.app)

---

## 📸 Screenshots

![Home Page](./src/assets/screenshots/home.png)
![Buttons Comparison](./src/assets/screenshots/buttons.png)
![Forms Comparison](./src/assets/screenshots/forms.png)
![Theming Page](./src/assets/screenshots/theming.png)

---

## 👤 Author

### Thomas Woroniak

**Front-End Developer** focused on building modern, polished, user-friendly **React** applications with strong attention to architecture, usability, and design.

---
