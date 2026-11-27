import { useState } from "react";
import Button from "./Button";
import StatusBadge from "./StatusBadge";
import { getFreePlaces, getRoomStatus } from "../utils/roomStatus";

// props: room, selected (чи вибрана кімната), onSelect (функція вибору)
function RoomCard({ room, selected = false, onSelect }) {
  const [expanded, setExpanded] = useState(false);
  const [places, setPlaces] = useState(1);
  const status = getRoomStatus(room);
  const free = getFreePlaces(room);

  return (
    <article className={selected ? "card card-selected" : "card"}>
      <h3>Кімната {room.number}</h3>
      <p>Поверх: {room.floor}</p>
      <p>
        Місць: {room.occupied}/{room.capacity}
      </p>
      <StatusBadge status={status} />

      <Button
        variant="secondary"
        pressed={expanded}
        onClick={() => setExpanded((value) => !value)}
      >
        {expanded ? "Сховати деталі" : "Деталі"}
      </Button>

      {expanded && (
        <div className="details">
          {free === 0 ? (
            <p>Вільних місць немає</p>
          ) : (
            <>
              <p>Потрібно місць:</p>
              <div className="stepper">
                <Button
                  variant="secondary"
                  disabled={places <= 1}
                  onClick={() => setPlaces((n) => n - 1)}
                >
                  −
                </Button>
                <strong>{places}</strong>
                <Button
                  variant="secondary"
                  disabled={places >= free}
                  onClick={() => setPlaces((n) => n + 1)}
                >
                  +
                </Button>
              </div>
            </>
          )}
        </div>
      )}

      {onSelect && (
        <Button
          disabled={free === 0}
          pressed={selected}
          onClick={() => onSelect(room.id)}
        >
          {selected ? "Обрано" : "Подати заявку"}
        </Button>
      )}
    </article>
  );
}

export default RoomCard;
