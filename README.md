# Healthy Recipe Finder

A responsive recipe discovery web application built with **Angular 19** and **Angular Signals**. Users can browse, search, and filter a curated collection of healthy whole-food recipes — all without a backend, routing, or external state management.

---

## Live Demo

[Live Demo](#) — _coming soon_

---

## Overview

Healthy Recipe Finder lets users:

- Browse 8 hand-picked healthy recipes in a clean card-based layout
- Search recipes by **name or ingredient** in real time
- Filter by **maximum prep time** and **maximum cook time** independently
- Navigate between a **Home**, **About**, and **Recipes** view
- See the total number of matching recipes update instantly as filters change

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Angular 19 (standalone components) |
| State | Angular Signals — `signal()`, `computed()`, `effect()` |
| Styling | SCSS with CSS custom properties (design tokens) |
| Data | Static TypeScript array (no HTTP, no backend) |
| Fonts | Nunito & Nunito Sans (variable fonts) |

---

## How It Works

### State management with Signals

All reactive state lives in `AppComponent`:

```typescript
readonly currentView  = signal<AppView>('home');  // which page is visible
readonly searchQuery  = signal('');                // live search input
readonly maxPrepTime  = signal(999);               // prep time filter (999 = any)
readonly maxCookTime  = signal(999);               // cook time filter (999 = any)

readonly filteredRecipes = computed(() => {
  // re-runs automatically whenever searchQuery, maxPrepTime, or maxCookTime changes
});

readonly filteredCount = computed(() => this.filteredRecipes().length);
```

- **`signal()`** holds mutable state
- **`computed()`** derives the filtered recipe list and count — Angular re-evaluates it only when its dependencies change
- **`effect()`** logs every view change and every filter change to the console for observability

### View switching (no routing)

Instead of Angular Router, a single `currentView` signal drives which page is shown:

```typescript
showHome():    void { this.currentView.set('home'); }
showAbout():   void { this.currentView.set('about'); }
showRecipes(): void { this.currentView.set('recipes'); }
```

The template uses `@if` blocks to conditionally render each page. Every view transition plays a CSS fade + slide-up animation.

### Filtering

`RecipesComponent` receives `maxPrepTime` and `maxCookTime` as signal inputs and emits change events back to `AppComponent`. The `filteredRecipes` computed signal re-evaluates instantly:

```typescript
readonly filteredRecipes = computed(() =>
  this.recipes().filter(recipe =>
    recipe.prepMinutes  <= this.maxPrepTime() &&
    recipe.cookMinutes  <= this.maxCookTime() &&
    (recipe.title.toLowerCase().includes(query) ||
     recipe.ingredients.some(i => i.toLowerCase().includes(query)))
  )
);
```

---

## Project Structure

```
src/
└── app/
    ├── app.component.*          # Root — signals, computed, view switching
    ├── data/
    │   └── recipes.data.ts      # Static array of 8 Recipe objects
    ├── models/
    │   └── recipe.model.ts      # Recipe & RecipeImage interfaces
    └── components/
        ├── navbar/              # Nav links + active underline + outputs
        ├── hero/                # Landing hero section
        ├── features/            # Three feature highlights
        ├── real-life/           # "30 minutes" real-life section
        ├── recipes/             # Search bar, time filters, recipe grid
        ├── recipe-card/         # Individual recipe card
        ├── about/               # About page (4 sections)
        ├── cta/                 # Call-to-action banner
        └── footer/              # Footer with social links
```

---

## Getting Started

**Prerequisites:** Node.js 18+ and Angular CLI 19

```bash
# Install dependencies
npm install

# Start the dev server
ng serve
```

Open [http://localhost:4200](http://localhost:4200) in your browser. The app hot-reloads on every file save.

```bash
# Production build
ng build
```

Build artifacts are written to `dist/recipe-finder-website/`.

---

## Design System

All visual tokens are defined as CSS custom properties in `src/styles.scss`:

| Token group | Examples |
|---|---|
| Colors | `--color-neutral-900`, `--color-orange-500`, `--color-teal-500` |
| Spacing | `--spacing-100` (8px) → `--spacing-1600` (128px) |
| Radius | `--radius-8` → `--radius-full` |
| Fonts | `--font-nunito`, `--font-nunito-sans` |

UI design source: [Figma — Healthy Recipe Website](https://www.figma.com/design/jbMy8QXrEWy7OozLk3wV76/healthy-recipe-website)
