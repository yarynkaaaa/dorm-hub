import Availability from "../components/Availability";
import RoomList from "../components/RoomList";
import Section from "../components/Section";
import { rooms } from "../data/rooms";
import { getFreePlaces } from "../utils/roomStatus";

// props: onSelect (необов'язкова функція вибору кімнати для заявки)
function RoomsPage({ onSelect }) {
  const totalFree = rooms.reduce((sum, room) => sum + getFreePlaces(room), 0);
  const totalCapacity = rooms.reduce((sum, room) => sum + room.capacity, 0);

  return (
    <Section id="rooms" title="Кімнати">
      <Availability free={totalFree} total={totalCapacity} />
      <RoomList rooms={rooms} onSelect={onSelect} />
    </Section>
  );
}

export default RoomsPage;
