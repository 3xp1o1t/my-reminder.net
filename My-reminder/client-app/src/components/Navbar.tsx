import { NavLink } from 'react-router-dom';
import { HEADER_MENUS } from '../constants';
import { cn } from '../lib/utils';

const Navbar = () => {
  return (
    <ul className="flex items-center justify-center gap-4 border-b h-14">
      {HEADER_MENUS.map((menu) => (
        <li key={menu.title}>
          <NavLink
            to={menu.slug}
            className={({ isActive }) =>
              cn(
                'px-2 py-2.5 hover:bg-sky-300 hover:text-slate-900 rounded-md transition',
                isActive ? 'bg-rose-500' : '',
              )
            }
          >
            {menu.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
