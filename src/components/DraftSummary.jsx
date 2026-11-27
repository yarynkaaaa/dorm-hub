// props: draft { fullName, group }, room (об'єкт кімнати або null)
function DraftSummary({ draft, room }) {
  return (
    <dl className="summary">
      <dt>ПІБ</dt>
      <dd>{draft.fullName || "—"}</dd>
      <dt>Група</dt>
      <dd>{draft.group || "—"}</dd>
      <dt>Кімната</dt>
      <dd>{room ? `Кімната ${room.number}` : "—"}</dd>
    </dl>
  );
}

export default DraftSummary;
