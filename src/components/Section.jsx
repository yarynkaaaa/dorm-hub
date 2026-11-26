// props: id (якір для посилання), title (заголовок), children (вміст секції)
function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
