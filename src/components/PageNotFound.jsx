import Footer from './Footer';
import NaviBar from './NaviBar';
import { useEffect } from 'react';

const PageNotFound = () => {
  useEffect(() => {
    document.title = '404: Page Not Found';
  }, []);
  return (
    <div className='bg-[#291D24] h-screen flex flex-col justify-between'>
      <NaviBar />
      <p className='halant text-white text-6xl text-center mt-10'>
        Error 404: Page Not Found
      </p>
      <Footer />
    </div>
  );
};

export default PageNotFound;
