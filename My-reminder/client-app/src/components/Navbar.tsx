import { NavLink } from 'react-router-dom';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <ul className="flex items-center justify-center gap-4 border-b h-14">
      <li>
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            [
              'px-2 py-2.5 hover:bg-sky-300 hover:text-slate-100 rounded-md transition',
              isActive ? 'bg-rose-500' : '',
            ].join(' ')
          }
        >
          Inicio
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/contact'}
          className={({ isActive }) =>
            [
              'px-2 py-2.5 hover:bg-sky-300 hover:text-slate-100 rounded-md transition',
              isActive ? 'bg-rose-500' : '',
            ].join(' ')
          }
        >
          Contacto
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/about'}
          className={({ isActive }) =>
            [
              'px-2 py-2.5 hover:bg-sky-300 hover:text-slate-100 rounded-md transition',
              isActive ? 'bg-rose-500' : '',
            ].join(' ')
          }
        >
          Acerca de
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/repo'}
          className={({ isActive }) =>
            [
              'px-2 py-2.5 hover:bg-sky-300 hover:text-slate-100 rounded-md transition',
              isActive ? 'bg-rose-500' : '',
            ].join(' ')
          }
        >
          Repositorio
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
