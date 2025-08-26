# Mitchi Motcho Websites

🚀 **Mitchi Motcho Websites** is a local Vietnamese-run web development service, focused on building **modern, stress-free websites for small businesses**.
This repository powers our own site (`motchi.ca`) — designed with a **warm, trustworthy aesthetic** that reflects our mission: *we handle the tech so you can focus on your business.*

---

## 🌟 Features

* **Coming Soon landing page** with responsive design
* **Custom Tailwind v4 theme** with Mitchi Motcho brand colors
* **Responsive Navbar & Footer** (with hamburger menu on mobile via [`hamburger-react`](https://github.com/luukdv/hamburger-react))
* **Contact Page** with smart email handling:

  * On phones → opens `mailto:`
  * On desktops → copies email to clipboard with toast feedback
* Reusable **utility classes** (`btn`, `card`, `sectionKicker`, etc.)
* Mobile-friendly, accessible, and designed for small business clarity

---

## 🎨 Brand Colors (from `globals.css`)

* `background` → `#FDFBF8` (cream)
* `foreground` → `#333333` (charcoal)
* `highlight` → `#E37A6D` (coral)
* `highlight-dark` → `#7A3B3B` (garnet)
* `highlight-light` → `#F2E6DC` (beige)

Use them directly in Tailwind as:

```html
bg-background text-foreground
bg-highlight hover:bg-highlight-dark
text-highlight-dark
```

---

## 🛠️ Tech Stack

* [Next.js 15+](https://nextjs.org/) (App Router)
* [Tailwind CSS v4](https://tailwindcss.com/)
* [hamburger-react](https://github.com/luukdv/hamburger-react) for mobile nav
* TypeScript (recommended)

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/mitchi-motcho-websites.git
cd mitchi-motcho-websites
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to see the site.

---

## 📂 Project Structure

```
app/
  ├── page.tsx          # Coming Soon page
  ├── contact/          # Contact page
  │   └── page.tsx
components/
  ├── Navbar.tsx
  └── Footer.tsx
public/
  └── logo.png          # Mitchi Motcho logo
styles/
  └── globals.css       # Tailwind v4 theme + utilities
```

---

## 📬 Contact

💡 Want to learn more or work with us?

* Website: [motchi.ca](https://motchi.ca)
* Email: [contact@motchi.ca](mailto:contact@motchi.ca)

---

## 📄 License

This project is licensed under the MIT License. Feel free to reuse with attribution.

