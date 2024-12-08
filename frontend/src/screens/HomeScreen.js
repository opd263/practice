import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import Meta from '../components/Meta';

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  return (
    <>
      { (
        <Link to='/' className='btn btn-light mb-4'>
          Go Back
        </Link>
      )}
        
        <>
          <Meta />
          <h1>Welcome to INNOFarms.AI</h1>
        </>
      
    </>
  );
};
export default HomeScreen;