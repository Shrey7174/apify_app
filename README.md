README.md — Apify Integration Dashboard

#  Apify Integration Dashboard

A modern, dark-themed web app that allows users to connect with the Apify platform, explore public and private actors, dynamically fetch their input schemas, run actors with user-provided inputs, and view execution results — all in real-time.

>  Built for an internship selection assignment to demonstrate full-stack integration, dynamic schema handling, and clean UI/UX thinking.

---

##  Features

- ✅ **Login-Free API Key Input** via secure modal
- ✅ **Fetch Your Apify Actors** (private) using your API key
- ✅ **Browse Public Apify Actors**
- ✅ **Dynamic Schema Loading** at runtime (no hardcoded schemas)
- ✅ **Input JSON Preview & Editing**
- ✅ **Single Actor Run Execution**
- ✅ **Live Run Result Viewer** (collapsible, readable JSON)
- ✅ **Clear Previous Schema/Input**
- ✅ **Error Handling & Feedback**
- ✅ **Fully Responsive UI**
- ✅ **Internship-Quality Dark Mode Styling**

---

## 🛠️ Tech Stack

| Layer       | Tool / Library                     |
|-------------|------------------------------------|
| Frontend    | Next.js (App Router), React        |
| Styling     | Tailwind CSS (Dark mode enabled)   |
| Backend     | Node.js + Express.js               |
| API         | [Apify Open API](https://docs.apify.com/) |
| UX Enhancer | `react-toastify`, `react-json-view`|



##  Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/apify-integration-dashboard.git
cd apify-integration-dashboard
```
2️⃣ Frontend Setup
```bash
cd frontend
npm install
# Add environment variable in .env.local
echo "NEXT_PUBLIC_BACKEND_URL=http://localhost:5002" > .env.local
npm run dev
```
3️⃣ Backend Setup
```bash
cd backend
npm install
npm run dev
```
    Make sure both frontend (port 3000) and backend (port 5002) are running.

# Using the App

   - Click " API Key" button in the top bar and paste your Apify API Key.

   - Click "My Actors" or "Public Actors" to fetch available actors.

   - Click "Load" on any actor to:

        Dynamically load its input schema

        See auto-generated sample input

    - Edit the JSON input and click "Run"

   - View the execution result instantly

# Actor Used for Testing

    apify/hello-world

    apify/google-search-scraper

You can try with your own actors too!

# 📁 Project Structure

apify-integration-dashboard/
├── backend/
│   └── api/actors, schema, run
│   └── server.js
├── frontend/
│   ├── src/app/
│   │   ├── page.jsx
│   ├── src/components/
│   │   ├── ActorList.jsx
│   │   ├── SchemaEditor.jsx
│   │   ├── RunResult.jsx
│   │   ├── ApiKeyModal.jsx
│   │   ├── DocsModal.jsx
│   ├── tailwind.config.js
│   ├── globals.css

# Notable Design Choices

   - Schema is dynamically generated at runtime using the actor's API.
   - API key is never stored — only used for the current session.
   - Built with modularity in mind (components/ folder).
   - Styling and transitions were refined to avoid white flashes and janky reloads.
   - Clear Schema button and auto-reset logic added for better flow.

# Future Improvements

    Save API Key in session (optional)
    Add actor search and tag filters
    Run history or past run viewer
    Actor detail viewer with example inputs

