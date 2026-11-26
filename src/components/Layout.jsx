import Header from "./Header";

const links = [
  { href: "#rooms", label: "Кімнати" },
  { href: "#settlement", label: "Заявка на поселення" },
];

// props: children (вміст сторінки, обов'язково)
function Layout({ children }) {
  return (
    <div className="layout">
      <Header title="DormHub" links={links} />
      <main className="content">{children}</main>
    </div>
  );
}

export default Layout;
