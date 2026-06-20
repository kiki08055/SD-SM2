interface Props {
  title: string;
  value: number;
  color: string;
}

export default function StatsCard({
  title,
  value,
  color,
}: Props) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-medium text-gray-500">
        {title}
      </p>

      <div className="mt-3 flex items-end gap-2">
        <h3 className={`text-4xl font-semibold ${color}`}>
          {value}
        </h3>

        <span className="mb-1 text-sm text-gray-400">
          items
        </span>
      </div>
    </div>
  );
}