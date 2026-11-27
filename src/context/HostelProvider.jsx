import { useEffect, useMemo, useState } from "react";
import { rooms } from "../data/rooms";
import { HostelContext } from "./HostelContext";

// props: children (усе дерево застосунку)
export function HostelProvider({ children }) {
  const [selectedRoomId, setSelectedRoomId] = useState(null);

  const value = useMemo(
    () => ({
      selectedRoomId,
      selectedRoom: rooms.find((room) => room.id === selectedRoomId) ?? null,
      selectRoom: setSelectedRoomId,
      clearSelection: () => setSelectedRoomId(null),
    }),
    [selectedRoomId],
  );

  const roomNumber = value.selectedRoom?.number ?? null;

  useEffect(() => {
    const previousTitle = document.title;
    document.title = roomNumber ? `Кімната ${roomNumber} · DormHub` : "DormHub";
    return () => {
      document.title = previousTitle;
    };
  }, [roomNumber]);

  return (
    <HostelContext.Provider value={value}>{children}</HostelContext.Provider>
  );
}
