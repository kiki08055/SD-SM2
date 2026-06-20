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
    <div className="bg-white rounded-2xl p-5 shadow-md border border-slate-200">
      <p className="text-slate-500 mb-2">
        {title}
      </p>

      <h3
        className={`text-5xl font-extrabold ${color}`}
      >
        {value}
      </h3>
    </div>
  );
}