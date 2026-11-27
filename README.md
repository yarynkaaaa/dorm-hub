# DormHub

Веб-сайт для управління студентським гуртожитком (React + Vite).

## Запуск

```
npm install
npm run dev        # http://localhost:5173
npm run build      # збірка в dist/
```

## Docker

```
docker build -t dorm-hub .
docker run --rm -p 5173:5173 -v "${PWD}:/app" -v /app/node_modules dorm-hub
```

## Структура

- `src/data`: тестові дані кімнат
- `src/utils`: правило статусу кімнати
- `src/components`: повторно використовувані компоненти
- `src/pages`: сторінки, складені з компонентів
- `docs/project-plan.md`: план проєкту
- `docs/architecture.md`: ієрархія компонентів і контракти props
- `src/hooks`: власні хуки (useRoomFilters)
- `src/context`: контекст вибору кімнати (HostelContext, HostelProvider)
- `docs/component-architecture.md`: карта стану, область провайдера, контракти подій
