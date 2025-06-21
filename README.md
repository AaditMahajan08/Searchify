# Aho-Corasick Pattern Search Web App

This is a full-stack web application that takes an input text and multiple patterns, and returns the number of occurrences along with their positions using the **Aho-Corasick algorithm**. The app is designed for both user interaction and performance analysis.

🔗 **Features:**
- Accepts dynamic text and pattern input from the user
- Displays number of matches and starting positions
- Supports large-scale testing (7000-line input with 50 patterns)
- React + Tailwind frontend, Express backend, and core logic in C++

---

## 📁 Project Structure

```
root/
├── frontend/         # React + Tailwind (Vite) GUI
├── backend/          # Express server + C++ executable runner
│   ├── server.js
│   └── logic/
│       ├── code.cpp        # Aho-Corasick implementation
│       ├── searchtool      # Compiled executable
│       ├── input.txt
│       └── pattern.txt
├── analysis/         # Offline analysis
│   ├── input.txt     # 7000-line input
│   ├── patterns.txt  # 50 patterns
│   └── analysis.py   # Python script to benchmark Aho-Corasick
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

Install for both frontend and backend:

```bash
cd frontend
npm install

cd ../backend
npm install
```

### 3. Compile the C++ Executable

In the `backend/logic/` folder, compile the Aho-Corasick implementation:

```bash
g++ main.cpp -o searchtool
```

This generates the `searchtool` executable used by the backend.

---

## 🧑‍💻 Running the App

### Start Backend Server

```bash
cd backend
node server.js
```

### Start Frontend (Vite Dev Server)

In a separate terminal:

```bash
cd frontend
npm run dev
```

The frontend will be accessible at:  
`http://localhost:5173/`

---

## 📊 Analysis (Optional)

In the `analysis/` folder, a Python script benchmarks the algorithm using a 7000-line input and 50 patterns.

To run it:

```bash
cd analysis
python analysis.py
```

---

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS, Vite
- **Backend:** Node.js, Express
- **Core Algorithm:** C++ (Aho-Corasick)
- **Analysis:** Python

---

## 📄 License

MIT License
