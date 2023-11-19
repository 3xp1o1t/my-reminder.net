import { Outlet } from 'react-router-dom';

type Props = {};

const index = (props: Props) => {
  return (
    <div>
      Landing page <br />
      <hr />
      <Outlet />
    </div>
  );
};

export default index;
