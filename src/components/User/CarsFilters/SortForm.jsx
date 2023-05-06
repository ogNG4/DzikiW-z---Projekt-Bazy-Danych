import { Select } from "@chakra-ui/react";

export default function SortForm({ handleSortChange }) {
  return (
    <form>
      <Select placeholder="Sortuj wg" onChange={handleSortChange}>
        <option value="power-asc">Moc Rosąco</option>
        <option value="power-desc">Moc Malejąco</option>
        <option value="year-asc">Rocznik Rosnąco</option>
        <option value="year-desc">Rocznik Malejąco</option>
        <option value="price-asc">Cena Rosnąco</option>
        <option value="price-desc">Cena Malejąco</option>
      </Select>
    </form>
  );
}