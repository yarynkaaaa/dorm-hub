import SelectionChip from "./SelectionChip";

// props: title (рядок, обов'язково), links (масив { href, label }, може бути порожнім)
function Header({ title, links = [] }) {
  return (
    <header className="header">
      <span className="brand">{title}</span>
      <div className="header-right">
        <nav aria-label="Основна навігація">
          <ul className="nav">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <SelectionChip />
      </div>
    </header>
  );
}

export default Header;
