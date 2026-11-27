import Layout from "./components/Layout";
import { HostelProvider } from "./context/HostelProvider";
import RoomsPage from "./pages/RoomsPage";
import SettlementPage from "./pages/SettlementPage";

function App() {
  return (
    <HostelProvider>
      <Layout>
        <RoomsPage />
        <SettlementPage />
      </Layout>
    </HostelProvider>
  );
}

export default App;
