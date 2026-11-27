import { useHostel } from "../context/HostelContext";

function SelectionChip() {
  const { selectedRoom } = useHostel();
  if (!selectedRoom) return null;
  return <span className="chip">Обрано: кімната {selectedRoom.number}</span>;
}

export default SelectionChip;
