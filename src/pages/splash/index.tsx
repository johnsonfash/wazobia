import { Link } from 'react-router-dom';
import hive from '../../assets/hive.png'
const Splash = () => {
  return (
    <main
      style={{
        backgroundColor: '#000000'
      }}
      className="min-vw-100 d-flex justify-content-center align-items-center min-vh-100">
      <div className='text-center'>
        <img src={hive} alt="" style={{ maxWidth: '600px' }} />
        <div >
          <Link to='/editor' className='btn btn-primary'>Go to Editor</Link>
        </div>
      </div>
    </main>
  );
};

export default Splash;
