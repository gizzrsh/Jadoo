# Jadoo — Travel Agency Landing

Адаптивная одностраничная посадка для турагентства по макету из Figma/шаблона. Проект портфолио: отработка SCSS, NPM и кастомных слайдеров.

<img width="3614" height="1790" alt="image" src="https://github.com/user-attachments/assets/fb493049-8bf4-4d18-8ad4-ebbfb41b1b75" />

## ✨ Технологии
- **HTML5 / SCSS / Vanilla JS** — с препроцессором SASS (nesting)
- **SwiperJS** — слайдер отзывов в блоке testimonials (autoplay, pagination, navigation)
- **NPM** — менеджер пакетов для Swiper и сборки
- **Google Fonts** — иконки и типографика
- **Адаптив** — desktop-first, hover-эффекты

## 📱 Демо & Репо
- [Живое демо](https://jadoo-black.vercel.app/)
- [GitHub](https://github.com/gizzrsh/Jadoo) — коммиты с комментариями по блокам

## 🚀 Установка
```bash
git clone https://github.com/gizzrsh/Jadoo.git
cd Jadoo
npm install
npm run dev  # или открой index.html
```

## 🎨 Ключевые фичи верстки
- **Testimonials carousel** — Swiper с навигацией и авто-прокруткой
- **Footer** — социалки, навигация

Подробные комментарии в SCSS/JS и Git-история изменений.

## 📂 Структура
```
Jadoo/
├── index.html
├── scss/
│   ├── main.scss     # Импорты
│   └── base/   # Переменные, reset.scss, шрифты
│   └── layout/   # BEM-модули
├── js/
│   ├── script.js       # Swiper init + utils
├── node_modules/     # NPM deps
├── package.json
└── images/           # img
```

## 📈 Отработанные навыки
| Навык     | Реализация |
|-----------|------------|
| SCSS      | Mixins для кнопок, nesting в блоках |
| Swiper    | Testimonials: `{autoplay: {delay: 5000}, pagination: true}` |
| NPM       | Scripts: build/watch с sass |
| Адаптив   | Media: 320/768/1200px |
