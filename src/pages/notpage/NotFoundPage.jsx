import { Link } from "react-router-dom";
import NotFoundImage from "../../assets/image/not_found.jpg"

const NotFoundPage = () => {
  return (
    <>
      <div className='relative mb-5 md:mb-0'>
        <img className='w-full' src={NotFoundImage} alt="" />
        <Link to="/" className='absolute transform -translate-x-1/2 top-[85%] left-1/2 primary-btn'>Back to Home</Link>
      </div>
    </>
  );
}

export default NotFoundPage;
