import EmptyState from "./EmptyState";
import RoomCard from "./RoomCard";

// props: rooms, selectedRoomId (число або null), onSelect
function RoomList({ rooms, selectedRoomId = null, onSelect }) {
  if (rooms.length === 0) {
    return <EmptyState message="Кімнат не знайдено" />;
  }
  return (
    <div className="grid">
      {rooms.map((room) => (
        <RoomCard
          key={room.id}
          room={room}
          selected={room.id === selectedRoomId}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default RoomList;
