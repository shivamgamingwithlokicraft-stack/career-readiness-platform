# Tripotic - AI-Powered Career Readiness & Employability Platform

Official project repository for Team Tripotic for the MPOnline Limited Idea & Innovation Hackathon 2026.

## 🛠️ Conceptual Tech Stack & Development Environment
* **Frontend Layer:** React.js / Next.js, Tailwind CSS (Responsive Dashboards & Visual Roadmaps)
* **Backend Layer:** Node.js (Express) / Python (FastAPI Engine for LLM Data Pipelines)
* **AI & Inference Framework:** OpenAI API / LangChain / Hugging Face Text Embeddings
* **Database & Storage Architecture:** Hybrid Storage Model (PostgreSQL + MongoDB)

---

## 🗄️ Database Schema Blueprint & Structural Sequence

The platform runs a dual-database pipeline engineered for speed, data consistency, and flexibility:

### 1. Relational Layer (PostgreSQL) - Structured Core Data
Handles deterministic system entities requiring high relational integrity and strict tables.

*   **`users` Table:**
    *   `user_id` (UUID, Primary Key)
    *   `full_name` (VARCHAR)
    *   `email` (VARCHAR, Unique)
    *   `academic_stream` (VARCHAR)
*   **`skills_inventory` Table:**
    *   `skill_id` (INT, Primary Key)
    *   `skill_name` (VARCHAR)
    *   `domain_category` (VARCHAR)
*   **`student_skills_map` Table:**
    *   `mapping_id` (SERIAL, Primary Key)
    *   `user_id` (Foreign Key -> `users`)
    *   `skill_id` (Foreign Key -> `skills_inventory`)
    *   `proficiency_level` (ENUM: 'Basic', 'Intermediate', 'Advanced')

### 2. Document Layer (MongoDB) - Unstructured Polymorphic Blocks
Handles complex, rapidly changing, and nested AI data structures that do not fit into flat rows.

*   **`roadmaps` Collection:**
    *   Stores the AI-generated JSON milestone arrays (Foundation ➔ Skill Building ➔ Portfolio Projects ➔ Job Tracking).
*   **`skill_gaps` Collection:**
    *   Stores multi-variant text analysis matrices containing microservice calculations between student profiles and industry requirements.
*   **`ai_assistant_chats` Collection:**
    *   Stores stateful, conversational user session logs linked directly to individual user prompt histories.

---

## 🚀 Execution & Implementation Milestones
* **Phase 1:** User Profile Schema Ingestion & Data Initialization (Current Staging Baseline)
* **Phase 2:** Semantic Parsing Pipeline & AI Career Analyzer Integration
* **Phase 3:** Automated Skill-Gap Matching Logic & Structural Database Vector Syncing
* **Phase 4:** Live Deployment & End-to-End MVP Launch
# career-readiness-platform
AI-powered career readiness and employability platform blueprint for the MPOnline Limited Innovation Hackathon 2026.
