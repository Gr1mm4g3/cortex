# System Design Document: Cortex (AI-First Developer Web App)

## 1. Product Overview
Cortex is a comprehensive, AI-first web application designed to manage the entire lifecycle of a freelance software engineering business. It consolidates CRM, financial tracking, agile project management (Kanban), documentation, QA testing, repository analysis, and UI/UX mockup design into a single platform. The core differentiator is its deep AI integration, designed to automate boilerplate tasks like ticket creation, test case generation, and codebase dependency mapping.

## 2. Tech Stack
* **Frontend Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS (coupled with Shadcn UI for rapid, accessible components)
* **Database & Backend-as-a-Service:** Supabase (PostgreSQL)
* **Authentication:** Clerk
* **Specialty Libraries:**
  * *Kanban:* `@hello-pangea/dnd` or `dnd-kit`
  * *Code Analyzer Graph:* `react-flow-renderer`
  * *Mockup Designer:* `fabric.js` or HTML5 Canvas API
  * *Rich Text:* `TipTap` or `Editor.js`

## 3. High-Level Database Schema (Supabase)
* **Users (Synced via Clerk Webhooks):** `user_id`, `email`, `settings_json`
* **Clients:** `id`, `user_id`, `name`, `email`, `company`, `status`
* **Projects:** `id`, `client_id`, `name`, `status`, `budget`, `deadline`
* **Tasks/Bugs:** `id`, `project_id`, `type` (task/bug), `title`, `description`, `status` (backlog, in-progress, review, done), `priority`
* **Finances:** `id`, `project_id`, `type` (invoice/expense), `amount`, `status`, `due_date`
* **Documents:** `id`, `project_id`, `title`, `content` (JSON/Rich Text), `last_updated`
* **TestCases:** `id`, `project_id`, `linked_task_id`, `title`, `steps`, `expected_result`, `status` (pass/fail/untested)

## 4. Core Modules & AI Integrations

### 4.1. CRM & Finances
* **Features:** Client CRUD interfaces, project associations, invoice generation, expense tracking, and basic chart visualizations (monthly MRR, outstanding balances).

### 4.2. Workspace & Kanban
* **Features:** Drag-and-drop board for Tasks and Bugs.
* **AI Integration:** "Generate Ticket" - User provides a brief feature description; the LLM API generates a fully formatted ticket with User Stories, Acceptance Criteria, and Edge Cases.

### 4.3. Knowledge Base
* **Features:** Notion-style rich-text editor for project specs and meeting notes.
* **AI Integration:** "AI Assist" - Highlight text to summarize, expand, or draft API endpoints and technical specifications based on natural language prompts.

### 4.4. Qtest Lab (E2E)
* **Features:** Manual E2E test case writing, execution tracking, and status marking.
* **AI Integration:** "Generate Tests" - The AI reads a specific Task/Bug ticket or Document and automatically outputs the step-by-step test cases required for full coverage.

### 4.5. Codebase Analyzer
* **Features:** Import a repository via ZIP upload or Git API.
* **AI Integration:** AST (Abstract Syntax Tree) parser combined with AI analysis to map imports/exports. Outputs an interactive dependency graph to visualize the blast radius of code changes.

### 4.6. Mockup Designer
* **Features:** Figma-lite infinite canvas.
* **Tools:** Shapes, text, lines, and a library of pre-built UI components. Requires grouping, layering, and robust state management for coordinates.