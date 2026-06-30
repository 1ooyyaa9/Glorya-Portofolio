# Glorya — Portfolio (React + Vite + Tailwind)

## Cara menjalankan

1. Extract folder ini, lalu buka terminal di dalamnya.
2. Install dependencies:
   ```
   npm install
   ```
3. Jalankan development server:
   ```
   npm run dev
   ```
4. Buka link yang muncul di terminal (biasanya `http://localhost:5173`).

## Build untuk production

```
npm run build
```

Hasilnya ada di folder `dist/`, bisa di-deploy ke Vercel, Netlify, GitHub Pages, dll.

## Struktur project

```
src/
  components/   -> komponen UI yang dipakai berulang (Navbar, Loader, Reveal, dll)
  context/      -> ThemeContext (dark/light mode)
  hooks/        -> custom hooks (useReveal untuk scroll animation, useCountUp untuk counter)
  pages/        -> satu file per "halaman" (Home, About, Skills, dst)
  App.jsx       -> root component, mengatur halaman aktif (view-switching, bukan React Router)
  index.css     -> CSS global + Tailwind + CSS variables untuk tema
```

## Catatan

- Navigasi antar "halaman" memakai state React (bukan React Router), jadi tetap satu URL
  tapi konten berganti penuh saat klik menu — sesuai dengan struktur per-page yang diminta.
- Semua data (skills, projects, certificates, dll) ada langsung di masing-masing file
  page sebagai array/object — edit di sana untuk mengubah konten.
- Ganti placeholder foto profil di `src/pages/Home.jsx` (cari `<div className="relative w-[220px]...`)
  dengan `<img src="..." />` jika sudah punya foto.
