import EmptyState from "./EmptyState";
import RoomCard from "./RoomCard";

// props: rooms (масив кімнат, може бути порожнім), onSelect (необов'язково)
function RoomList({ rooms, onSelect }) {
  if (rooms.length === 0) {
    return <EmptyState message="Кімнат не знайдено" />;
  }
  return (
    <div className="grid">
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default RoomList;
