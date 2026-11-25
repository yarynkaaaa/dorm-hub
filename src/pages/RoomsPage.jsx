import { rooms } from "../data/rooms";
import RoomCard from "../components/RoomCard";

function RoomsPage() {
  const freePlaces = rooms.reduce((s, r) => s + r.capacity - r.occupied, 0);
  return (
    <section style={{ padding: 24 }}>
      <h1>DormHub: кімнати</h1>
      <p>Вільних місць: {freePlaces}</p>
      <div
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        }}
      >
        {rooms.map((r) => (
          <RoomCard key={r.id} room={r} />
        ))}
      </div>
    </section>
  );
}
export default RoomsPage;
