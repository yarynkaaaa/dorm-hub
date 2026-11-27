import Section from "../components/Section";
import SettlementForm from "../components/SettlementForm";
import { rooms } from "../data/rooms";

// props: selectedRoomId (число або null), onSelect (змінити обрану кімнату)
function SettlementPage({ selectedRoomId, onSelect }) {
  return (
    <Section id="settlement" title="Заявка на поселення">
      <SettlementForm
        rooms={rooms}
        selectedRoomId={selectedRoomId}
        onSelectRoom={onSelect}
      />
    </Section>
  );
}

export default SettlementPage;
