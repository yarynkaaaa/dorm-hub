export function getFreePlaces(room) {
  return Math.max(room.capacity - room.occupied, 0);
}

export function getRoomStatus(room) {
  if (getFreePlaces(room) === 0) return { key: "full", label: "Заповнена" };
  if (room.occupied === 0) return { key: "free", label: "Вільна" };
  return { key: "partial", label: "Є вільні місця" };
}
