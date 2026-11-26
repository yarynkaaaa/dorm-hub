import Section from "../components/Section";
import SettlementForm from "../components/SettlementForm";
import { rooms } from "../data/rooms";

// props: selectedRoomId (рядок; "" — кімнату не обрано)
function SettlementPage({ selectedRoomId }) {
  return (
    <Section id="settlement" title="Заявка на поселення">
      <SettlementForm rooms={rooms} selectedRoomId={selectedRoomId} />
    </Section>
  );
}

export default SettlementPage;
