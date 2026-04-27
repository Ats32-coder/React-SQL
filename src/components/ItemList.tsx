type Item = {
  id: number;
  name: string;
};

type Props = {
  items: Item[];
  onDelete: (id: number) => void;
  onEdit: (id: number, name: string) => void;
};

export default function ItemList({ items, onDelete, onEdit }: Props) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => onEdit(item.id, item.name)}>Muuda</button>
          <button onClick={() => onDelete(item.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}