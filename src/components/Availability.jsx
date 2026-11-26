// props: free (вільних місць), total (усього місць); total = 0 — порожній випадок
function Availability({ free, total }) {
  if (total === 0) {
    return <p className="muted">Місць немає</p>;
  }
  return (
    <p className="availability">
      Вільних місць: <strong>{free}</strong> з {total}
    </p>
  );
}

export default Availability;
