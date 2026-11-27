import Availability from "../components/Availability";
import Button from "../components/Button";
import EmptyState from "../components/EmptyState";
import RoomFilters from "../components/RoomFilters";
import RoomList from "../components/RoomList";
import Section from "../components/Section";
import { rooms } from "../data/rooms";
import { useRoomFilters } from "../hooks/useRoomFilters";
import { getFreePlaces } from "../utils/roomStatus";

function RoomsPage() {
  const { filters, floors, visibleRooms, updateFilters, resetFilters } =
    useRoomFilters(rooms);

  const totalFree = rooms.reduce((sum, room) => sum + getFreePlaces(room), 0);
  const totalCapacity = rooms.reduce((sum, room) => sum + room.capacity, 0);

  return (
    <Section id="rooms" title="Кімнати">
      <Availability free={totalFree} total={totalCapacity} />
      <RoomFilters
        filters={filters}
        floors={floors}
        onChange={updateFilters}
        onReset={resetFilters}
      />
      <p className="muted">
        Показано {visibleRooms.length} з {rooms.length}
      </p>

      {visibleRooms.length === 0 ? (
        <div className="empty">
          <EmptyState message="За вибраними умовами кімнат не знайдено. Змініть умови або скиньте фільтри." />
          <Button onClick={resetFilters}>Скинути фільтри</Button>
        </div>
      ) : (
        <RoomList rooms={visibleRooms} />
      )}
    </Section>
  );
}

export default RoomsPage;
