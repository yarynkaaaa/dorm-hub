import { useState } from "react";
import Layout from "./components/Layout";
import RoomsPage from "./pages/RoomsPage";
import SettlementPage from "./pages/SettlementPage";

function App() {
  const [selectedRoomId, setSelectedRoomId] = useState("");

  function handleSelect(roomId) {
    setSelectedRoomId(String(roomId));
    document
      .getElementById("settlement")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Layout>
      <RoomsPage onSelect={handleSelect} />
      <SettlementPage selectedRoomId={selectedRoomId} />
    </Layout>
  );
}

export default App;
