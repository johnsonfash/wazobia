import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";

const Page404 = () => {
  return <main>
    <Navbar />
    <div className="my-5 py-5 container text-center">
      <h1 className="display-2 fw-bold">404</h1>
      <p>Page Not Found</p>
      <Link to='/editor' className="btn border btn-primary">Go Back</Link>
    </div>
  </main>;
};

export default Page404;
