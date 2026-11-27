import { useState } from "react";
import Availability from "./Availability";
import Button from "./Button";
import DraftSummary from "./DraftSummary";
import FormField from "./FormField";
import { getFreePlaces } from "../utils/roomStatus";

const emptyDraft = { fullName: "", group: "" };

// props: rooms, selectedRoomId (число або null), onSelectRoom (змінити вибір)
function SettlementForm({ rooms, selectedRoomId, onSelectRoom }) {
  const [draft, setDraft] = useState(emptyDraft);
  const [submitted, setSubmitted] = useState(null);

  const availableRooms = rooms.filter((room) => getFreePlaces(room) > 0);
  const selectedRoom = rooms.find((room) => room.id === selectedRoomId) ?? null;
  const canSubmit =
    draft.fullName.trim() !== "" &&
    draft.group.trim() !== "" &&
    selectedRoom !== null;

  function handleField(event) {
    const { name, value } = event.target;
    setDraft((prev) => ({ ...prev, [name]: value }));
    setSubmitted(null);
  }

  function handleRoom(event) {
    const value = event.target.value;
    onSelectRoom(value ? Number(value) : null);
    setSubmitted(null);
  }

  function handleClear() {
    setDraft(emptyDraft);
    setSubmitted(null);
    onSelectRoom(null);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (canSubmit) {
      setSubmitted({ ...draft, roomNumber: selectedRoom.number });
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FormField id="fullName" label="ПІБ мешканця">
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={draft.fullName}
          onChange={handleField}
        />
      </FormField>

      <FormField id="group" label="Група" hint="Наприклад, ІПЗ 24-1">
        <input
          id="group"
          name="group"
          type="text"
          value={draft.group}
          onChange={handleField}
        />
      </FormField>

      <FormField id="room" label="Кімната">
        <select
          id="room"
          value={selectedRoom ? String(selectedRoom.id) : ""}
          onChange={handleRoom}
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

      <DraftSummary draft={draft} room={selectedRoom} />

      <div className="form-actions">
        <Button type="submit" disabled={!canSubmit}>
          Підготувати заявку
        </Button>
        <Button variant="secondary" onClick={handleClear}>
          Очистити
        </Button>
      </div>

      {submitted && (
        <p role="status" className="success">
          Заявку підготовлено: {submitted.fullName} ({submitted.group}), кімната{" "}
          {submitted.roomNumber}.
        </p>
      )}
    </form>
  );
}

export default SettlementForm;
