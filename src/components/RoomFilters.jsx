import Button from "./Button";
import FormField from "./FormField";

// props: filters { query, floor, onlyAvailable }, floors (масив поверхів),
//        onChange (частина змін), onReset
function RoomFilters({ filters, floors, onChange, onReset }) {
  return (
    <div className="filters">
      <FormField id="filter-query" label="Номер кімнати">
        <input
          id="filter-query"
          type="text"
          value={filters.query}
          onChange={(e) => onChange({ query: e.target.value })}
        />
      </FormField>

      <FormField id="filter-floor" label="Поверх">
        <select
          id="filter-floor"
          value={filters.floor}
          onChange={(e) => onChange({ floor: e.target.value })}
        >
          <option value="all">Усі</option>
          {floors.map((floor) => (
            <option key={floor} value={String(floor)}>
              {floor}
            </option>
          ))}
        </select>
      </FormField>

      <label className="check">
        <input
          type="checkbox"
          checked={filters.onlyAvailable}
          onChange={(e) => onChange({ onlyAvailable: e.target.checked })}
        />
        Лише з вільними місцями
      </label>

      <Button variant="secondary" onClick={onReset}>
        Скинути
      </Button>
    </div>
  );
}

export default RoomFilters;
