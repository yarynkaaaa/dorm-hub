import { useState } from "react";
import { getFreePlaces } from "../utils/roomStatus";

const initialFilters = { query: "", floor: "all", onlyAvailable: false };

export function useRoomFilters(rooms) {
  const [filters, setFilters] = useState(initialFilters);

  const floors = [...new Set(rooms.map((room) => room.floor))].sort(
    (a, b) => a - b,
  );

  const visibleRooms = rooms.filter((room) => {
    const matchesQuery = room.number.includes(filters.query.trim());
    const matchesFloor =
      filters.floor === "all" || String(room.floor) === filters.floor;
    const matchesFree = !filters.onlyAvailable || getFreePlaces(room) > 0;
    return matchesQuery && matchesFloor && matchesFree;
  });

  function updateFilters(patch) {
    setFilters((prev) => ({ ...prev, ...patch }));
  }

  function resetFilters() {
    setFilters(initialFilters);
  }

  return { filters, floors, visibleRooms, updateFilters, resetFilters };
}
