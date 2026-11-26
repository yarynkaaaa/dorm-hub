import { useEffect, useState } from "react";
import Availability from "./Availability";
import Button from "./Button";
import FormField from "./FormField";
import { getFreePlaces } from "../utils/roomStatus";

// props: rooms (масив кімнат), selectedRoomId (рядок; "" — кімнату не обрано)
function SettlementForm({ rooms, selectedRoomId = "" }) {
  const [fullName, setFullName] = useState("");
  const [group, setGroup] = useState("");
  const [roomId, setRoomId] = useState(selectedRoomId);
  const [prepared, setPrepared] = useState(null);

  useEffect(() => {
    if (selectedRoomId) setRoomId(selectedRoomId);
  }, [selectedRoomId]);

  const availableRooms = rooms.filter((room) => getFreePlaces(room) > 0);
  const selectedRoom = rooms.find((room) => String(room.id) === roomId);

  function handleSubmit(event) {
    event.preventDefault();
    setPrepared({ fullName, group, roomNumber: selectedRoom.number });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FormField id="fullName" label="ПІБ мешканця">
        <input
          id="fullName"
          type="text"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </FormField>

      <FormField id="group" label="Група" hint="Наприклад, ІПЗ 24-1">
        <input
          id="group"
          type="text"
          required
          value={group}
          onChange={(e) => setGroup(e.target.value)}
        />
      </FormField>

      <FormField id="room" label="Кімната">
        <select
          id="room"
          required
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        >
          <option value="">Оберіть кімнату</option>
          {availableRooms.map((room) => (
            <option key={room.id} value={String(room.id)}>
              Кімната {room.number}
            </option>
          ))}
        </select>
      </FormField>

      {selectedRoom && (
        <Availability
          free={getFreePlaces(selectedRoom)}
          total={selectedRoom.capacity}
        />
      )}

      <Button type="submit">Підготувати заявку</Button>

      {prepared && (
        <p role="status" className="success">
          Заявку підготовлено: {prepared.fullName} ({prepared.group}), кімната{" "}
          {prepared.roomNumber}.
        </p>
      )}
    </form>
  );
}

export default SettlementForm;
