import { FaArrowDown, FaFile, FaFly, FaUser } from 'react-icons/fa';
import Card from '../../components/Card';

const Home = () => {
  return (
    <div className="container pt-4 flex flex-col mx-auto">
      <h1 className="font-bold text-3xl">Home</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
        <Card
          title="Usuarios"
          icon={<FaUser className="text-sky-600" />}
          value="123"
          description="Total de usuarios"
          shadowColor="shadow-sky-600"
        />
        <Card
          title="Reportes"
          icon={<FaFile className="text-emerald-600" />}
          value="533"
          description="Total de reportes"
          shadowColor="shadow-emerald-600"
        />
        <Card
          title="Bajas"
          icon={<FaArrowDown className="text-rose-600" />}
          value="972"
          description="Total de bajas"
          shadowColor="shadow-rose-600"
        />
        <Card
          title="Eventos"
          icon={<FaFly className="text-yellow-600" />}
          value="3421"
          description="Total de eventos"
          shadowColor="shadow-yellow-600"
        />
      </div>
    </div>
  );
};

export default Home;
