# Cortex Web App: Granular Task Backlog

*Instructions: Give Antigravity one task from this list at a time. Do not proceed to the next task until you have reviewed and tested the current one.*

## Phase 1: Foundation & Setup
- [x] **Task 1.1:** Initialize a Next.js (App Router) project with Tailwind CSS and TypeScript.
- [x] **Task 1.2:** Install and configure Shadcn UI; set up the base theme and global CSS.
- [x] **Task 1.3:** Integrate Clerk for authentication and wrap the app in the Clerk Provider.
- [ ] **Task 1.4:** Create a protected route wrapper or middleware to secure the `/dashboard` routes.
- [ ] **Task 1.5:** Set up the Supabase project connection and environment variables.
- [ ] **Task 1.6:** Define the database schema (SQL or via ORM) for `Users`, `Clients`, and `Projects`.
- [ ] **Task 1.7:** Define the database schema for `Tasks`, `Finances`, `Documents`, and `TestCases`.
- [ ] **Task 1.8:** Create a Clerk Webhook API route to automatically sync new users to the Supabase `Users` table.
- [ ] **Task 1.9:** Build the main Dashboard layout shell (sidebar navigation, header, user profile button).

## Phase 2: CRM & Financial Tracking
- [ ] **Task 2.1:** Build the backend API route (GET, POST, PUT, DELETE) for Clients.
- [ ] **Task 2.2:** Build the frontend Client List view with a data table and pagination.
- [ ] **Task 2.3:** Build a form component (using react-hook-form + zod) to create and edit Clients.
- [ ] **Task 2.4:** Build the backend API routes for Projects and associate them with Clients.
- [ ] **Task 2.5:** Build the Finance API routes for Invoices and Expenses.
- [ ] **Task 2.6:** Create the Finance Dashboard UI with a basic list of recent transactions.
- [ ] **Task 2.7:** Integrate a charting library (e.g., Recharts) and display a monthly revenue bar chart.

## Phase 3: Project Management & Kanban
- [ ] **Task 3.1:** Create the API routes for Tasks/Bugs (fetching by Project ID).
- [ ] **Task 3.2:** Build the static UI for the Kanban board columns (Backlog, In Progress, Review, Done).
- [ ] **Task 3.3:** Implement drag-and-drop functionality using `@hello-pangea/dnd` or `dnd-kit`.
- [ ] **Task 3.4:** Wire up the drag-and-drop event to update the Task status in the Supabase database.
- [ ] **Task 3.5:** Build a modal/drawer UI for viewing and editing full Task details.
- [ ] **Task 3.6:** Integrate the LLM API (e.g., OpenAI or Google Gemini).
- [ ] **Task 3.7:** Add the "Generate Ticket" UI button and prompt logic to auto-fill the Task details based on a short description.

## Phase 4: Documentation Module
- [ ] **Task 4.1:** Set up Document API routes (CRUD operations scoped to a project).
- [ ] **Task 4.2:** Integrate a rich text editor (TipTap or Editor.js) into a document view page.
- [ ] **Task 4.3:** Implement auto-saving logic for the rich text editor.
- [ ] **Task 4.4:** Build the "AI Assist" context menu that triggers when text is highlighted.
- [ ] **Task 4.5:** Wire the AI Assist menu to the LLM API for summarizing and expanding text.

## Phase 5: The Test Lab (E2E)
- [ ] **Task 5.1:** Create the TestCase API routes and link them to specific Project and Task IDs.
- [ ] **Task 5.2:** Build the Test Lab UI: a list view of test cases with Pass/Fail/Untested status badges.
- [ ] **Task 5.3:** Build the Test Execution UI where a user can step through test instructions and mark the result.
- [ ] **Task 5.4:** Implement the "Generate Tests" LLM prompt that reads a Task ticket's acceptance criteria and outputs formatted test steps.

## Phase 6: Codebase Analyzer
- [ ] **Task 6.1:** Build a backend endpoint to accept and extract a ZIP file of a repository.
- [ ] **Task 6.2:** Write a utility script to parse JS/TS files into Abstract Syntax Trees (AST) to find imports/exports.
- [ ] **Task 6.3:** Set up `react-flow-renderer` on the frontend.
- [ ] **Task 6.4:** Map the parsed AST data into nodes and edges for React Flow.
- [ ] **Task 6.5:** Add interactivity to the graph (clicking a node highlights its dependencies).

## Phase 7: Mockup Designer
- [ ] **Task 7.1:** Initialize the infinite canvas using `fabric.js` or HTML5 Canvas.
- [ ] **Task 7.2:** Build the designer toolbar (Select, Rectangle, Circle, Text).
- [ ] **Task 7.3:** Implement logic to draw and resize basic shapes on the canvas.
- [ ] **Task 7.4:** Implement state saving so the canvas data (JSON representation) is saved to the database.