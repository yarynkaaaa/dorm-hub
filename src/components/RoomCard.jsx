function RoomCard({ room }) {
  const free = room.capacity - room.occupied;
  const status =
    free === 0
      ? "Заповнена"
      : room.occupied === 0
        ? "Вільна"
        : "Є вільні місця";
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: 8, padding: 16 }}>
      <h3>Кімната {room.number}</h3>
      <p>Поверх: {room.floor}</p>
      <p>
        Місць: {room.occupied}/{room.capacity}
      </p>
      <strong>{status}</strong>
    </div>
  );
}
export default RoomCard;
