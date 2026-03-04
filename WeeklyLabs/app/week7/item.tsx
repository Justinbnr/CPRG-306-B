
interface ItemProps {
  name: string;
  quantity: number;
  category: string;
}

export default function Item({ name, quantity, category, onClick }: ItemProps & { onClick: () => void }) {
  return (
    <li className="p-2 m-4 bg-slate-900 max-w-sm border-b border-slate-700 list-none cursor-pointer" onClick={onClick}>
      <div className="text-xl font-bold text-white">{name}</div>
      <div className="text-sm text-gray-400">
        Buy {quantity} in {category}
      </div>
    </li>
  );
}