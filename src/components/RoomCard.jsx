import Button from "./Button";
import StatusBadge from "./StatusBadge";
import { getFreePlaces, getRoomStatus } from "../utils/roomStatus";

// props: room ({ id, number, floor, capacity, occupied }, обов'язково),
//        onSelect (необов'язкова функція; якщо немає — кнопки не буде)
function RoomCard({ room, onSelect }) {
  const status = getRoomStatus(room);
  const free = getFreePlaces(room);

  return (
    <article className="card">
      <h3>Кімната {room.number}</h3>
      <p>Поверх: {room.floor}</p>
      <p>
        Місць: {room.occupied}/{room.capacity}
      </p>
      <StatusBadge status={status} />
      {onSelect && (
        <Button disabled={free === 0} onClick={() => onSelect(room.id)}>
          Подати заявку
        </Button>
      )}
    </article>
  );
}

export default RoomCard;
