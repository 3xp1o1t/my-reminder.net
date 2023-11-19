import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <ul className="flex items-center justify-center gap-4 border-b h-14">
      <li>
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            cn(
              'px-2 py-2.5 hover:bg-sky-300 hover:text-slate-100 rounded-md transition',
              isActive ? 'bg-rose-500' : '',
            )
          }
        >
          Inicio
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/contact'}
          className={({ isActive }) =>
            cn(
              'px-2 py-2.5 hover:bg-sky-300 hover:text-slate-100 rounded-md transition',
              isActive ? 'bg-rose-500' : '',
            )
          }
        >
          Contacto
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/about'}
          className={({ isActive }) =>
            cn(
              'px-2 py-2.5 hover:bg-sky-300 hover:text-slate-100 rounded-md transition',
              isActive ? 'bg-rose-500' : '',
            )
          }
        >
          Acerca de
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/repo'}
          className={({ isActive }) =>
            cn(
              'px-2 py-2.5 hover:bg-sky-300 hover:text-slate-100 rounded-md transition',
              isActive ? 'bg-rose-500' : '',
            )
          }
        >
          Repositorio
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/sign-up'}
          className={({ isActive }) =>
            cn(
              'px-2 py-2.5 hover:bg-sky-300 hover:text-slate-100 rounded-md transition',
              isActive ? 'bg-rose-500' : '',
            )
          }
        >
          Sign-up
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
