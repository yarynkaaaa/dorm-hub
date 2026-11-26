// props: message (текст, коли даних немає)
function EmptyState({ message }) {
  return <p className="muted">{message}</p>;
}

export default EmptyState;
