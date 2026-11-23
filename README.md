# Pex — адаптивная вёрстка PSD-макета (React + CSS Modules)

Одностраничный сайт по макету `09.psd`. Стек: React 19, Vite, CSS Modules, Flexbox.

## Запуск

```bash
npm install
npm run dev        # разработка: http://localhost:5173
npm run build      # продакшн-сборка в dist/ (с предрендером HTML)
npm run preview    # посмотреть dist/ локально
```

## Проверки

- HTML: https://validator.w3.org/ →
  1 Warning (связанный с текстом заглушкой Lorem ipsum)
  21 Info (W3C рекомендует не использовать завершающий / слеш в элементах без завершающего тега, но в .jsx без них необойтись)
- CSS: https://jigsaw.w3.org/css-validator/ →
  1 Warning (-webkit-text-size-adjust - неизвестное расширение поставщика)
- Скорость: https://pagespeed.web.dev/ →
  Компьютер:
  - производительность 100
  - специальные возможности 92
  - рекомендации 100
  - поисковаят оптимизация 100

  Мобильное устройство:
  - производительность 98
  - специальные возможности 95
  - рекомендации 100
  - поисковаят оптимизация 100

## SEO — что сделано

`<title>`, `meta description`, `canonical`, Open Graph и Twitter Card, JSON-LD (`WebSite`), `robots.txt`, `sitemap.xml`,
`lang="en"`, один `<h1>`, иерархия `h2`/`h3`, семантические теги (`header`, `nav`, `main`, `section`, `article`, `footer`),
осмысленные `alt`, предрендер HTML.

## Производительность — что сделано

Изображения в WebP с `srcset`/`sizes`, у картинок заданы `width`/`height` (нет сдвигов вёрстки),
`loading="lazy"` для всего ниже первого экрана, `fetchPriority="high"` для главной картинки (LCP),
шрифт Open Sans self-hosted (только latin, 4 начертания), хэшированные файлы для кэширования.
