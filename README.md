

```markdown
# Customer Enquiry System

A full-stack web application built with Django (DR-API) and ReactJS. Users can submit enquiries and view/search/delete them.

---

## 📁 Project Structure

```

root/
├── frontend/           ← React app
│   ├── src/
│   └── …
├── myproject/          ← Django project (contains your API app and settings)
│   └── …
└── README.md

````

---

## 🛠 Prerequisites

- Python 3.x  
- Node.js + npm  
- Git  
- SQLite (default Django database)  
- Optional: Virtual environment for backend  

---

## ✅ Setup & Run Locally

### Backend (Django)

1. Navigate to the backend project folder:
   ```bash
   cd myproject/
````

2. (Recommended) Create and activate a Python virtual environment:

   ```bash
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```
3. Install Python dependencies:

   ```bash
   pip install -r requirements.txt
   ```
4. Apply database migrations:

   ```bash
   python manage.py migrate
   ```
5. Make sure static files settings are correct (in `settings.py`):

   ```python
   STATIC_URL = '/static/'
   STATIC_ROOT = BASE_DIR / 'staticfiles'
   ```
6. Run the development server:

   ```bash
   python manage.py runserver
   ```

   The API will be available at `http://127.0.0.1:8000/`.

### Frontend (React)

1. Navigate to the frontend folder:

   ```bash
   cd ../frontend/
   ```
2. Install npm dependencies:

   ```bash
   npm install
   ```
3. Ensure API base URL in your React app (e.g., `src/api.js`) points to backend:

   ```js
   const api = axios.create({
     baseURL: 'http://127.0.0.1:8000/api/enquiries/'
   });
   ```
4. Start the React development server:

   ```bash
   npm start
   ```

   This opens at `http://localhost:3000/`.

---

## 🧪 Usage

* Submit an enquiry via the form (name, valid email, digits-only phone, message).
* View the list of enquiries below the form.
* Use the search bar to filter by name or email.
* Delete an enquiry via the Delete button.

---

## 🧠 Basic Test Cases

* Valid submission → success message & entry appears.
* Blank required fields → error messages per field.
* Invalid email format → proper error.
* Phone with characters or wrong length → error message.
* Search for name/email substring → filters list.
* Delete entry → removed from list.

---

## 📦 Deployment (Brief)

1. Build frontend for production:

   ```bash
   cd frontend/
   npm run build
   ```
2. Deploy backend (e.g., on Render), set `ALLOWED_HOSTS`, static files, etc.
3. Update frontend’s API URL to point to deployed backend.
4. Host build folder on static hosting or integrate with backend’s static serving.

---
