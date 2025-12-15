import type { StatsCardProps } from "../types/statscard";

const StatsCard = ({ title, value }: StatsCardProps) => {
  return (
    <div
      className="
        bg-white
        rounded-xl
        p-6
        shadow-lg
        border
        border-gray-200
        hover:shadow-2xl
        hover:scale-105
        transition
        transform
        duration-300
        ease-in-out
        flex
        flex-col
        items-center
        text-center
        mb-8
        mt-8
      "
    >
      <h3 className="text-gray-500 text-sm mb-2">{title}</h3>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
};

export default StatsCard;
