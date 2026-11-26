// props: status ({ key, label }, обов'язково) — результат getRoomStatus
function StatusBadge({ status }) {
  return <span className={`badge badge-${status.key}`}>{status.label}</span>;
}

export default StatusBadge;
