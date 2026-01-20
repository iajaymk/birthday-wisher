# 🎉 Birthday Wisher

**Birthday Wisher** is a lightweight web app that lets you create a magical, interactive birthday wish page for your loved ones — and share it instantly using a single link.

Users can customize the wish (name, age, cake style, candle style), generate a shareable URL, and experience a fun interaction where they can **blow out candles using their microphone**, followed by confetti and animations.

---

## ✨ Features

- 🎂 Interactive birthday cake with candles
- 🔢 Smart candle logic (normal candles for kids, digit candles for adults)
- 🎤 Blow candles using microphone (mobile & desktop supported)
- 🌫️ Smoke animation + 🎊 confetti celebration
- 🎈 Animated “Happy Birthday” balloon text
- 🌈 Festive gradient background with floating balloons
- 📝 Create wish by filling the form
- 🔗 Shareable URL (no login, no backend)
- 📱 Fully responsive & mobile-friendly

---

## 🧠 How It Works

1. User opens the home page
2. Clicks **Create a Birthday Wish**
3. A dialog (desktop) or bottom drawer (mobile) opens
4. User enters:
   - Name
   - Age
   - Cake style
   - Candle style
5. Clicks **Create Wish**
6. App generates a URL like:
   ```bash
   /wish?name=Ruchi&age=27&cake=chocolate&candles=gold
   ```
7. A live preview is shown along with share options
8. The recipient opens the link and enjoys the birthday experience 🎉

---

## 🛠 Tech Stack

- **React** (Vite)
- **React Router**
- **CSS + SVG animations**
- **Web Audio API** (microphone blow detection)
- **canvas-confetti**

---

## 🚀 Getting Started

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Start development server

```bash
npm run dev
```

### 3️⃣ Open in browser

```bash
http://localhost:5173
```

## 🎤 Microphone Support (Important)

- Microphone access requires user interaction on mobile

- Users must tap “Start & Blow Candles” before blowing

- App works on:
  - Desktop Chrome / Firefox

  - Android Chrome

  - iOS Safari / Chrome (HTTPS required)

### 🧪 Example Wish URL

```bash
/wish?name=John&age=31&cake=chocolate&candles=classic
```
