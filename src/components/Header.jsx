// props: title (рядок, обов'язково), links (масив { href, label }, може бути порожнім)
function Header({ title, links = [] }) {
  return (
    <header className="header">
      <span className="brand">{title}</span>
      <nav aria-label="Основна навігація">
        <ul className="nav">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
