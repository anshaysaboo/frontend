export default function Tags({ items = [] }) {
  return (
    <div className="py-4 flex flex-row flex-wrap gap-x-2 gap-y-2">
      {items.map((name) => (
        <div
          className="font-bold bg-gray-200 text-gray-500 rounded text-sm py-1 px-2"
          key={name}
        >
          {name}
        </div>
      ))}
    </div>
  );
}
