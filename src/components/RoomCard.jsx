import { useState } from "react";
import Button from "./Button";
import StatusBadge from "./StatusBadge";
import { useHostel } from "../context/HostelContext";
import { getFreePlaces, getRoomStatus } from "../utils/roomStatus";

// props: room ({ id, number, floor, capacity, occupied }, обов'язково)
function RoomCard({ room }) {
  const { selectedRoomId, selectRoom } = useHostel();
  const [expanded, setExpanded] = useState(false);
  const [places, setPlaces] = useState(1);
  const selected = selectedRoomId === room.id;
  const status = getRoomStatus(room);
  const free = getFreePlaces(room);

  function handleSelect() {
    selectRoom(room.id);
    document
      .getElementById("settlement")
      ?.scrollIntoView({ behavior: "smooth" });
  }

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

      <Button disabled={free === 0} pressed={selected} onClick={handleSelect}>
        {selected ? "Обрано" : "Подати заявку"}
      </Button>
    </article>
  );
}

export default RoomCard;
