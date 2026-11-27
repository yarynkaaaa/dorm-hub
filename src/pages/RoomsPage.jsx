import { useState } from "react";
import Availability from "../components/Availability";
import Button from "../components/Button";
import EmptyState from "../components/EmptyState";
import RoomFilters from "../components/RoomFilters";
import RoomList from "../components/RoomList";
import Section from "../components/Section";
import { rooms } from "../data/rooms";
import { getFreePlaces } from "../utils/roomStatus";

const initialFilters = { query: "", floor: "all", onlyAvailable: false };

// props: selectedRoomId (число або null), onSelect (функція вибору кімнати)
function RoomsPage({ selectedRoomId, onSelect }) {
  const [filters, setFilters] = useState(initialFilters);

  const floors = [...new Set(rooms.map((room) => room.floor))].sort(
    (a, b) => a - b,
  );

  const visibleRooms = rooms.filter((room) => {
    const matchesQuery = room.number.includes(filters.query.trim());
    const matchesFloor =
      filters.floor === "all" || String(room.floor) === filters.floor;
    const matchesFree = !filters.onlyAvailable || getFreePlaces(room) > 0;
    return matchesQuery && matchesFloor && matchesFree;
  });

  const totalFree = rooms.reduce((sum, room) => sum + getFreePlaces(room), 0);
  const totalCapacity = rooms.reduce((sum, room) => sum + room.capacity, 0);

  function handleChange(patch) {
    setFilters((prev) => ({ ...prev, ...patch }));
  }

  function handleReset() {
    setFilters(initialFilters);
  }

  return (
    <Section id="rooms" title="Кімнати">
      <Availability free={totalFree} total={totalCapacity} />
      <RoomFilters
        filters={filters}
        floors={floors}
        onChange={handleChange}
        onReset={handleReset}
      />
      <p className="muted">
        Показано {visibleRooms.length} з {rooms.length}
      </p>

      {visibleRooms.length === 0 ? (
        <div className="empty">
          <EmptyState message="За вибраними умовами кімнат не знайдено. Змініть умови або скиньте фільтри." />
          <Button onClick={handleReset}>Скинути фільтри</Button>
        </div>
      ) : (
        <RoomList
          rooms={visibleRooms}
          selectedRoomId={selectedRoomId}
          onSelect={onSelect}
        />
      )}
    </Section>
  );
}

export default RoomsPage;
