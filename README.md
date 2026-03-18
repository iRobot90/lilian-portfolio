# Lilian Shihundu Opete — Model Portfolio

A fully interactive, professional fashion model portfolio website.

---

## 📁 Project Structure

```
lilian-portfolio/
├── index.html              ← Main HTML file
├── css/
│   └── style.css           ← All styles
├── js/
│   └── main.js             ← All interactivity
├── assets/
│   └── images/
│       ├── hero.jpg
│       ├── runway-1.jpg
│       ├── runway-2.jpg
│       ├── runway-3.jpg
│       ├── pageant-1.jpg
│       ├── pageant-2.jpg
│       ├── award-1.jpg
│       ├── award-2.jpg
│       └── cert-mmdi.jpg
└── README.md
```

---

## 🚀 How to Set Up in VSCode + Push to GitHub Pages

### STEP 1 — Open in VSCode
1. Unzip/move the `lilian-portfolio` folder to your computer
2. Open **VSCode**
3. Go to **File → Open Folder** → select `lilian-portfolio`

### STEP 2 — Preview Locally (optional but recommended)
1. Install the **Live Server** extension in VSCode
   - Click Extensions icon (left sidebar) → search "Live Server" → Install
2. Right-click `index.html` → **"Open with Live Server"**
3. Site opens at `http://127.0.0.1:5500` — fully functional!

### STEP 3 — Create a GitHub Repository
1. Go to [https://github.com](https://github.com) and sign in (or create a free account)
2. Click the **"+"** icon → **New repository**
3. Name it: `lilian-portfolio` (or anything you like)
4. Set it to **Public**
5. Do NOT initialise with README (we already have one)
6. Click **Create repository**

### STEP 4 — Push from VSCode
In VSCode, open the **Terminal** (Ctrl + ` or View → Terminal) and run:

```bash
git init
git add .
git commit -m "Initial portfolio launch"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/lilian-portfolio.git
git push -u origin main
```

> Replace `YOUR_USERNAME` with your actual GitHub username.

### STEP 5 — Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** (top tab)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source** → select **Deploy from a branch**
5. Branch: **main** / Folder: **/ (root)**
6. Click **Save**
7. Wait ~2 minutes, then your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/lilian-portfolio/
   ```

---

## ✏️ How to Make Changes & Update the Site

1. Edit any file in VSCode (`index.html`, `css/style.css`, `js/main.js`)
2. Save the file
3. To add new photos: drop them in `assets/images/` and update `index.html` + `js/main.js`
4. Push changes to GitHub:

```bash
git add .
git commit -m "Updated portfolio content"
git push
```

GitHub Pages will automatically update within a minute or two.

---

## 📞 Contact Details in the Site
- WhatsApp: **+254 713 629917**
- All booking buttons open WhatsApp directly

---

## 🌟 Features
- Smooth scroll-triggered animations
- Portfolio gallery with filter (All / Runway / Pageant / Awards)
- Fullscreen lightbox with keyboard navigation (← → Esc)
- Responsive mobile layout with hamburger menu
- Sticky navbar with active section highlight
- All contact/booking buttons link directly to WhatsApp
