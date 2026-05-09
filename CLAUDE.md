# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
ng serve          # Dev server on http://localhost:4200
ng build          # Production build to dist/recipe-finder-website
ng test           # Run all unit tests (Karma/Jasmine)
ng test --include='**/foo.component.spec.ts'  # Run a single test file
ng lint           # Lint (if configured)
```

## Architecture

Angular 19 standalone component project — no NgModules. Bootstrap happens in `main.ts` via `bootstrapApplication(AppComponent, appConfig)`. Application config lives in `src/app/app.config.ts` (add providers like `provideHttpClient()` here, not in a module).

**Data source**: `/public/data.json` contains 8 recipe objects. Each recipe has `id`, `title`, `slug`, `image` (`large`/`small`), `overview`, `servings`, `prepMinutes`, `cookMinutes`, `ingredients[]`, and `instructions[]`. Image assets live in `public/assets/images/`.

**State management intent**: The project name references Angular Signals — use `signal()`, `computed()`, and `effect()` for reactive state rather than RxJS subjects or NgRx.

**Routing**: `src/app/app.routes.ts` exists but is currently empty. The root `AppComponent` uses `RouterOutlet`. Feature routes go here.

**Styling**: SCSS. Global styles in `src/styles.scss`. Per-component styles in `.scss` files. TypeScript strict mode and strict Angular templates are both enabled.

**Key files to know:**
- `src/app/app.config.ts` — add providers here (`provideHttpClient()`, etc.)
- `src/app/app.routes.ts` — define all routes here
- `public/data.json` — recipe data served as a static asset; fetch via `HttpClient` at runtime using the path `/data.json`



You are acting as my professional Angular development partner for this lab project.

## Project Context

I have already initialized a preconfigured Angular project.
Inside `/public`, you will find:

* assets (images, icons, illustrations)
* `data.json` (mock data / content for this lab)

I will additionally provide:

* Lab requirements / specification
* Figma design link (source of truth for UI/UX)
* Typography / styling requirements
* Any extra written notes needed for implementation

You must strictly follow these sources of truth.

Priority order:

1. Lab specification (highest priority)
2. Figma design
3. Typography / styling rules
4. Existing project structure
5. Best Angular practices

If any of these conflict, stop and ask me.

---

## Working Rules

Do NOT hallucinate.

If:

* an asset is missing
* a Figma detail is unclear
* a lab instruction is ambiguous
* a design behavior is not specified
* data structure is confusing
* implementation has multiple possible interpretations

STOP and ask me before proceeding.

Never assume.

Clarification > guessing.

---

## Development Process

We are building this professionally.

Before writing code:

1. Analyze everything first
2. Summarize your understanding of the project
3. Present a step-by-step implementation plan
4. Wait for my approval

Do not start coding until I approve the plan.

Before every phase:

* explain what you're about to build
* explain why
* mention affected files
* mention architectural decisions
* wait for approval

Only proceed when I say:
**"Approved, continue."**

---

## Git Workflow

We will work like a real team.

Required:

* initialize git locally if not already initialized
* main branch = protected / stable
* create and work in `dev`
* build in logical milestones
* commit after each milestone ONLY after my approval

Before every commit:

1. summarize completed work
2. show files changed
3. explain why changes were made
4. wait for my approval

Commit only when approved.

Commit messages must be professional and semantic:

Examples:

* feat: implement landing page hero section
* feat: build reusable card component
* refactor: simplify signal state management
* fix: correct responsive navigation overflow
* style: align typography with design system
* chore: configure linting and formatting

Never commit vague messages like:

* update stuff
* fix code
* changes

---

## Angular Engineering Rules

Use Angular best practices.

Required:

* standalone components
* Angular Signals where state is needed
* dependency injection properly
* reusable components
* clear folder organization (feature-based where appropriate)
* clean TypeScript typing
* readable naming
* scalable architecture
* minimal complexity
* avoid overengineering
* avoid unnecessary abstractions
* avoid clever code for no reason
* keep logic beginner-readable unless complexity is necessary

Prefer:
simple > fancy
clear > clever
maintainable > compact

---

## Teaching Mode

Important:
I am learning Angular.

Treat this as mentorship.

While coding:

* explain important Angular decisions
* explain Signals usage
* explain dependency injection usage
* explain architecture choices
* explain file purpose
* explain best practices being used

Teach briefly but clearly.

Assume I know Angular fundamentals, but I am still growing.

Help me become better, not dependent.

---

## Quality Control

Before marking anything complete:

* verify requirements match spec
* verify UI matches Figma
* verify assets are correctly used
* verify responsive behavior
* verify code readability
* verify clean architecture
* verify no unnecessary complexity

Then present for approval.

Never self-approve.

Wait for me.

---

here's the lab requirements 

Module Lab: Reactive Recipe Finder
Completion requirements

Overview
In this lab, learners will build a simplified Recipe finder website application using Angular Signals to manage reactive state.
The project focuses on creating a responsive, interactive interface where users can search and filter recipes — all powered by Signals, computed(), and effect().
Scenario
Your challenge is to build a reactive Recipe Finder interface where users can:
View a list of recipes
Search by name or ingredient
Filter recipes by maximum cook time
See dynamic updates instantly as they type or adjust filters
You’ll manage all app state using Angular’s Signals API — no RxJS or external state management libraries.
Requirements
Functional Requirements
Display a list of recipes (use a static array of recipe objects — name, ingredients, cookTime, image).
Add a search input that filters recipes by name or ingredient.
Add a slider or numeric input to filter recipes by maximum cook/prep time.
Show the total number of filtered recipes (using computed()).
Automatically update the visible list whenever the user changes search or filter values.
Show a placeholder message when no recipes match.
Log changes to filters or search queries using an effect() (e.g., console log or toast message).
UI Requirements
Clean, card-based layout showing recipe image, title, and prep time.
Responsive layout (single column on mobile, grid on larger screens).
Hover/focus states for buttons or filters.
Consistent color scheme and typography (can match Frontend Mentor style).
Technical Guidelines
Use signal() to hold the recipes array, search query, and filter value.
Use computed() to derive the filtered list of recipes dynamically.
Use effect() to perform side effects (e.g., log state changes or sync filters).
No routing, services, or async API calls — use static data defined in the component file.
Stretch Goals (Optional)
Add a “favorites” toggle using another signal.
Persist search/filter state using localStorage via an effect().
Add sorting (e.g., by shortest cook time first).
Add a light/dark theme toggle managed by a signal.
Evaluation Criteria
 
Criterion
Weight
Performance Indicators
Signal Usage
30%
Uses signal() appropriately to store and update app state.
Computed & Derived State
25%
Implements computed() correctly for filtering or totals.
Effects & Reactivity
20%
Uses effect() for reactive side effects (logs, UI feedback, persistence).
UI Responsiveness & Accessibility
15%
Clean, responsive layout with clear hover/focus states.
Code Quality & Structure
10%
Organized, readable, and maintainable component code.


here's the figma link 
https://www.figma.com/design/jbMy8QXrEWy7OozLk3wV76/healthy-recipe-website?node-id=73-6718&p=f&t=EWlXd2pYvoXSJuyl-0

First task:
Read all provided materials, analyze them, summarize your understanding, and propose Phase 1 implementation plan.
Then stop and wait for approval.


Never include Co-Authored-By or any AI attribution in git commits.
