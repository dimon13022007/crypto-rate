export interface StatsCardProps {
  title: string;
  value: string | number;
}

const StatsCard = ({ title, value }: StatsCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-105 transition transform duration-300 ease-in-out flex flex-col items-center text-center mb-8 mt-8">
      <h3 className="text-gray-500 dark:text-gray-400 text-sm mb-2">{title}</h3>
      <p className="text-xl font-semibold text-gray-900 dark:text-white">
        {value}
      </p>
    </div>
  );
};

export default StatsCard;
