import { useState } from "react";
import Layout from "./components/Layout";
import RoomsPage from "./pages/RoomsPage";
import SettlementPage from "./pages/SettlementPage";

function App() {
  const [selectedRoomId, setSelectedRoomId] = useState(null);

  function handleSelect(roomId) {
    setSelectedRoomId(roomId);
    document
      .getElementById("settlement")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Layout>
      <RoomsPage selectedRoomId={selectedRoomId} onSelect={handleSelect} />
      <SettlementPage
        selectedRoomId={selectedRoomId}
        onSelect={setSelectedRoomId}
      />
    </Layout>
  );
}

export default App;
