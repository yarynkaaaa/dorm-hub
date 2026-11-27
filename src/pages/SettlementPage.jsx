import Section from "../components/Section";
import SettlementForm from "../components/SettlementForm";
import { rooms } from "../data/rooms";

function SettlementPage() {
  return (
    <Section id="settlement" title="Заявка на поселення">
      <SettlementForm rooms={rooms} />
    </Section>
  );
}

export default SettlementPage;
