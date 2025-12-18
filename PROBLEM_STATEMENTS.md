# React Problem Statements — Beginner → Pro

A comprehensive, progressive list of React problems to implement in this repo. Each item includes a short description, primary skills you'll practice, and optional stretch goals. Work top→bottom for a natural learning path, but pick what interests you.

---

## 🟢 How to use this list

- Commit often, open PRs, and keep notes on what you learned.
- Add **TypeScript**, **tests**, **accessibility**, and **performance checks** as stretch goals on many problems.
- Track progress in issues/projects/README.

---

## Beginner (Foundations) — 12 problems 🐣

1. **Hello React App**
   - Build a simple app that renders "Hello, React!".
   - Skills: JSX, components, create-react-app / Vite.
   - Stretch: Add TypeScript and a simple test.

2. **Counter (State & Events)**
   - Implement increment/decrement, reset, and step controls.
   - Skills: `useState`, event handlers.
   - Stretch: Add keyboard accessibility and tests.

3. **Controlled vs Uncontrolled Inputs**
   - Create a form with controlled and uncontrolled inputs; show live preview.
   - Skills: form state, refs.
   - Stretch: Add form reset, validation, and tests.

4. **To-Do List (CRUD)**
   - Add, complete, edit, delete tasks; persist to `localStorage`.
   - Skills: lists, keys, localStorage.
   - Stretch: Add filtering, due dates, and unit tests.

5. **Conditional Rendering & Lists**
   - Show filters (all/active/completed) and an empty-state UI.
   - Skills: conditional rendering, array operations.
   - Stretch: Add animations for state changes.

6. **Component Props & Composition**
   - Build a `Card` and a `UserList` composed of cards.
   - Skills: props, children, composition.
   - Stretch: Document with Storybook.

7. **Styling in React**
   - Implement theme toggle (light/dark) using CSS Modules or styled-components.
   - Skills: CSS-in-JS, global CSS, theming basics.
   - Stretch: Add system theme detection and accessible color tokens.

8. **Simple Fetching**
   - Fetch public API (e.g., JSONPlaceholder) and display results with loading/error states.
   - Skills: `fetch`, `useEffect`, state for loading/error.
   - Stretch: Add retries and caching with a custom hook.

9. **Small Router App**
   - Setup React Router, create Home / About / 404 pages.
   - Skills: `react-router` basics, nested routes.
   - Stretch: Add route-based code splitting.

10. **Basic Animations**
    - Animate list items entering/leaving with CSS transitions or `framer-motion` basics.
    - Skills: transitions, animation libs.
    - Stretch: Make motion accessible (reduce motion preference).

11. **Simple Unit Tests**
    - Test key components (Counter, To-Do) with React Testing Library.
    - Skills: RTL, Jest basics.
    - Stretch: Add snapshot tests and coverage reports.

12. **Accessibility: Keyboard & ARIA**
    - Make a modal trap focus and be dismissible by ESC.
    - Skills: ARIA roles, focus management.
    - Stretch: Run `axe` and fix issues.

---

## Intermediate (Patterns & State) — 12 problems 🧭

13. **Reusable Input Component + Validation**
    - Controlled input with validation and error messages; reuse across forms.
    - Skills: prop-driven components, validation patterns.
    - Stretch: Make it themable and type-safe (TypeScript).

14. **Custom Hook: `useDebounce`**
    - Build `useDebounce` and use it for search input.
    - Skills: custom hooks, timers, testability.
    - Stretch: Make `useDebounce` generic and well-tested.

15. **Complex Form (`formik`/`zod` or `react-hook-form`)**
    - Multi-field form with nested values and validation.
    - Skills: form libraries, validation schemas.
    - Stretch: Add async validation and field-level optimization.

16. **Pagination & Infinite Scroll**
    - Implement server-side pagination and infinite scroll with loading indicators.
    - Skills: scroll events, Intersection Observer, API paging.
    - Stretch: Add page caching and restore scroll position.

17. **Optimistic UI Updates**
    - Implement optimistic add/update/delete with rollback on failure.
    - Skills: optimistic updates, error handling.
    - Stretch: Integrate with React Query for automated retries.

18. **`useReducer` for Complex State**
    - Replace `useState` with `useReducer` for a complex component (e.g., kanban board).
    - Skills: reducers, actions, immutability.
    - Stretch: Extract reducer to a library of actions/tests.

19. **Shared State with Context**
    - Use Context for theme/auth across app and avoid unnecessary re-renders.
    - Skills: Context API, memoization.
    - Stretch: Implement selective updates with custom selectors.

20. **Drag-and-Drop Board**
    - Build a Trello-like drag-and-drop with `react-beautiful-dnd` or `dnd-kit`.
    - Skills: DnD libraries, state sync.
    - Stretch: Persist board state and add keyboard DnD.

21. **Image Gallery with Lazy Loading**
    - Implement responsive images, lazy loading, and placeholders.
    - Skills: `srcset`, lazy-loading, skeleton UI.
    - Stretch: Add progressive image loading and LQIP.

22. **Modular Component Library**
    - Create a small, documented component library (Button, Modal, Input) and export it.
    - Skills: reusability, Storybook basics.
    - Stretch: Add visual regression tests.

23. **Routing Guards & Auth Flow**
    - Implement protected routes, redirect after login, and token storage.
    - Skills: auth patterns, tokens, route guards.
    - Stretch: Add refresh token flow and secure storage.

24. **Integration Tests (Cypress)**
    - End-to-end tests for key flows (login, create item).
    - Skills: E2E testing, test maintenance.
    - Stretch: Add test data seeding and CI integration.

---

## Advanced (Performance, Architecture) — 12 problems 🚀

25. **TypeScript Migration**
    - Convert a non-TS app module to TypeScript with strict types.
    - Skills: TS React types, generics, utility types.
    - Stretch: Enable `noImplicitAny` and `strict` compiler options.

26. **Code Splitting & Lazy Loading**
    - Split routes/components and measure initial bundle savings.
    - Skills: `React.lazy`, `Suspense`, build analysis.
    - Stretch: Implement prefetching and chunk naming.

27. **Memoization & Profiler**
    - Find performance bottlenecks and optimize with `useMemo`/`useCallback` and React Profiler.
    - Skills: profiling, memo patterns, re-render avoidance.
    - Stretch: Add selective context consumption to avoid prop drilling.

28. **Virtualized List**
    - Implement virtual scrolling for long lists (`react-window`).
    - Skills: performance, virtualization.
    - Stretch: Support variable heights and dynamic loading.

29. **Server-Side Rendering (Next.js)**
    - Build an SSR page with data fetching and handle hydration differences.
    - Skills: Next.js, `getServerSideProps` / `getStaticProps`.
    - Stretch: Add incremental static regeneration (ISR).

30. **GraphQL Integration**
    - Use Apollo/Relay to query and cache data, implement pagination.
    - Skills: GraphQL queries, cache policies.
    - Stretch: Add subscriptions for real-time updates.

31. **React Query (TanStack)**
    - Replace manual fetch logic with React Query for caching, retries, and background updates.
    - Skills: caching, stale-while-revalidate.
    - Stretch: Add optimistic updates and cache invalidation patterns.

32. **WebSockets & Real-Time UI**
    - Build a chat or live feed with `socket.io` / WebSocket APIs.
    - Skills: real-time sync, optimistic UI.
    - Stretch: Add presence and reconnection strategies.

33. **PWA & Offline Support**
    - Make app installable, add caching strategies, and define offline behavior.
    - Skills: service workers, manifest, background sync.
    - Stretch: Add background sync queue and syncing recovery.

34. **Accessibility Audit + Remediation**
    - Run `axe`/Lighthouse, fix major failures, document accessibility decisions.
    - Skills: a11y testing, semantic HTML.
    - Stretch: Improve keyboard navigation and contrast.

35. **Internationalization (i18n)**
    - Implement locale switching and pluralization (e.g., `react-i18next`).
    - Skills: i18n libraries, performance for translations.
    - Stretch: Add locale-based content and server-side detection.

36. **Secure Frontend Patterns**
    - Prevent XSS, harden localStorage use, and implement secure cookie flows.
    - Skills: security, CSP, safe rendering.
    - Stretch: Implement Content Security Policy and SRI for 3rd-party scripts.

---

## Pro / Expert (Systems, Libraries, Scale) — 12 problems 🧠

37. **Design System with Tokens & Theming**
    - Build design tokens, components, and compile a theme system. Publish docs.
    - Skills: design systems, tokens, build tooling.
    - Stretch: Provide a theming API and token tooling.

38. **Component Performance Audit & Fix**
    - On a large app, identify expensive renders and re-architect to reduce CPU/memory.
    - Skills: profiling at scale, virtualization, memo strategies.
    - Stretch: Add automated performance tests.

39. **Build a React Dev Tool or ESLint Plugin**
    - Create a tool to surface component anti-patterns or lint rules for the team.
    - Skills: AST, tooling, plugin APIs.
    - Stretch: Ship it as an open-source package.

40. **Microfrontends**
    - Split app into independently deployable microfrontends (Module Federation or iframe approach).
    - Skills: federation, runtime integration, deployment concerns.
    - Stretch: Implement shared dependencies and versioned contracts.

41. **Realtime Collaborative App (OT/CRDT)**
    - Implement collaborative editing with CRDTs (Yjs, Automerge) and conflict-free merges.
    - Skills: distributed systems, sync algorithms.
    - Stretch: Add offline-first capabilities and conflict resolution UI.

42. **High-Availability Client (Retry/Backoff, Queuing)**
    - Implement resilient background sync, queued requests, and exponential backoff.
    - Skills: networking resilience patterns.
    - Stretch: Add state persistence for queued work.

43. **Publish a React Component to npm**
    - Prepare, bundle, document, and publish a reusable component package with TypeScript.
    - Skills: packaging, rollup/esbuild, semantic versioning.
    - Stretch: Set up automated publishing with CI.

44. **Server Components / React Flight**
    - Experiment with Server Components and streaming rendering (Next App Router / RSC).
    - Skills: server components, streaming SSR.
    - Stretch: Combine server and client components for performance.

45. **End-to-End CI/CD for a React App**
    - Create CI that runs tests, lint, builds, deploys to staging, uses preview environments.
    - Skills: GitHub Actions, Vercel/Netlify, infra as code.
    - Stretch: Add canary releases and automated rollbacks.

46. **Large-Scale State Management**
    - Compare and implement advanced state strategies (Redux Toolkit, Zustand, Recoil) and pick trade-offs.
    - Skills: normalization, selectors, devtools.
    - Stretch: Build migration guides to move between state managers.

47. **Cross-Platform with React Native / Expo**
    - Reuse components/logic by sharing code between web and native app.
    - Skills: native bridging, shared modules.
    - Stretch: Add platform-specific feature toggles.

48. **Benchmarking & Cost Optimization**
    - Measure bundle/perf and set budgets; remove heavy deps and lazy-load accordingly.
    - Skills: Lighthouse, bundle analysis, cost/perf trade-offs.
    - Stretch: Replace heavy libraries with lighter alternatives and measure improvements.

---

## 🎯 Extra: Mini Projects & Ideas

- Twitter clone (feed, retweets, likes)
- Airbnb search UI with maps and filters
- E-commerce checkout (cart, payments, inventory sync)
- Analytics dashboard with charts and CSV export
- Video conferencing UI (WebRTC + signaling)

---

## 💡 Tips & Next Steps

- Add **TypeScript + tests + accessibility** as mandatory stretch goals for real confidence.
- Track learning in PR descriptions: what you tried, pitfalls, and outcomes.
- Want a curated subset for a 30/60/90 day plan? Create starter templates for specific problems? I can help with either.

---

*File generated by GitHub Copilot — implement these problems in this repo, one branch per problem for easy tracking.*
