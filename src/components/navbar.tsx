import { Link } from 'react-router-dom';
import wazobia from '../assets/wazobia.png'

const Navbar = () => {
  return (
    <nav className="shadow-sm bg-white">
      <div className="container d-flex justify-content-between align-items-center py-2">
        <Link to='/' className='max-w-3'><img src={wazobia} alt="" /></Link>
        <div>
          <Link to='/editor' className='btn btn-primary'>Editor</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
