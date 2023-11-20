import { ReactNode } from 'react';

type CardProps = {
  title: string;
  icon: ReactNode;
  value: string;
  description: string;
  shadowColor: string | 'shadow-green-600';
};

const Card = ({ title, icon, value, description, shadowColor }: CardProps) => {
  return (
    <div
      className={`shadow-md ${shadowColor} p-6 rounded-md hover:shadow-white`}
    >
      <div className="flex flex-row items-center justify-between pb-2">
        <h1 className="text-sm font-medium text-gray-400">{title}</h1>
        {icon}
      </div>
      <h1 className="text-2xl font-bold">{value}</h1>
      <p className="text-xs text-gray-400 pt-1">{description}</p>
    </div>
  );
};

export default Card;
