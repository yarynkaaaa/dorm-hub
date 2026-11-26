# Архітектура інтерфейсу DormHub

## Ієрархія компонентів

```
App
└── Layout
    ├── Header (посилання #rooms, #settlement)
    └── main
        ├── RoomsPage -> Section #rooms
        │   ├── Availability
        │   └── RoomList
        │       ├── EmptyState (коли кімнат немає)
        │       └── RoomCard x N (StatusBadge, Button)
        └── SettlementPage -> Section #settlement
            └── SettlementForm
                ├── FormField x 3 (ПІБ, група, кімната)
                ├── Availability
                └── Button (submit)
```

## Контракти props

| Компонент | Props | Обов'язкові / порожні випадки |
|---|---|---|
| Layout | children | children обов'язковий |
| Header | title, links | title обов'язковий; links може бути порожнім |
| Section | id, title, children | id і title обов'язкові |
| Button | children, type, variant, disabled, onClick | children обов'язковий; type = button за замовчуванням |
| StatusBadge | status { key, label } | status обов'язковий |
| Availability | free, total | total = 0 показує «Місць немає» |
| EmptyState | message | message обов'язковий |
| RoomCard | room, onSelect | room обов'язковий; без onSelect кнопки немає |
| RoomList | rooms, onSelect | порожній масив показує EmptyState |
| FormField | id, label, hint, children | id, label, children обов'язкові; hint необов'язковий |
| SettlementForm | rooms, selectedRoomId | selectedRoomId = "" означає, що кімнату не обрано |

## Повторне використання

- Section: секції «Кімнати» та «Заявка на поселення».
- Button: картка кімнати та форма заявки.
- Availability: підсумок гуртожитку та вибрана кімната у формі.
- StatusBadge і правило статусу (utils/roomStatus.js): картка кімнати, одне місце для логіки.

## Оформлення

Власні стилі в src/index.css. React Bootstrap не підключено: інтерфейс невеликий, власних стилів достатньо, а додаткова залежність збільшила б образ Docker і вимагала б його перезбирання. Перехід на бібліотеку можливий пізніше без зміни контрактів props.