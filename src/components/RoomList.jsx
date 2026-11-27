import EmptyState from "./EmptyState";
import RoomCard from "./RoomCard";

// props: rooms (масив кімнат, може бути порожнім)
function RoomList({ rooms }) {
  if (rooms.length === 0) {
    return <EmptyState message="Кімнат не знайдено" />;
  }
  return (
    <div className="grid">
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  );
}

export default RoomList;
