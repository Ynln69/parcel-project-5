# MIMIHO — Ресторанно-готельний комплекс

Багатосторінковий адаптивний вебсайт для ресторанно-готельного комплексу **MIMIHO** (м. Полтава).

Командний проект, виконаний у рамках курсу **GoIT — Full Stack Developer** (блок верстки).

## Demo

- **Netlify:** [mimiho.netlify.app]([https://website-mimino.netlify.app/]) 

## Технології

| Категорія | Інструменти |
|---|---|
| Збірка | Parcel 2.6 |
| Стилі | SCSS, CSS Custom Properties, modern-normalize |
| Шаблонізація | posthtml-include (компонентний підхід через HTML-партіали) |
| Слайдери | Swiper 8, Slick Carousel |
| Адаптивність | Mobile-first, 3 брейкпоінти (414px / 1024px / 1280px) |
| Шрифти | FilmP3, Montserrat, Times New Roman (woff/woff2) |
| Деплой | GitHub Actions (GitHub Pages), Netlify |

## Сторінки

- **Головна** — hero-секція, опис ресторану та готелю, слайдери, контакти, Google Maps
- **Ресторан** — hero, опис кухні, меню
- **Готель** — hero, типи номерів (двомісний люкс, тримісний, двомісний)
- **Номер** — hero зі слайдером автоперегортання, зручності номеру

## Функціональність

- Адаптивна верстка під мобільні, планшети та десктоп
- Слайдери з автоплеєм та навігацією стрілками
- Модальні вікна бронювання (столик, номер, ціни)
- Retina-ready зображення (srcset 1x/2x)
- SEO-оптимізація (meta description, Open Graph, canonical, alt-тексти)

## Встановлення та запуск

```bash
# Клонування
git clone https://github.com/Ynln69/parcel-project-5.git
cd parcel-project-5

# Встановлення залежностей
npm install

# Запуск dev-сервера (localhost:1234)
npm start

# Продакшн-збірка
npm run build
```

## Команда

Проект розроблений командою студентів курсу GoIT (Full Stack Developer).

## Ліцензія

ISC
