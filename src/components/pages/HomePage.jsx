import Layout from '../Layouts/Layout';
import Analyse  from '../../assets/logo.png'; 
const HomePage = () => {
  return (
    <Layout>
     <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4">
      <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg">This is an example of a homepage created with React and Tailwind CSS. The text is on the left, and the image is on the right for larger screens.</p>
      </div>
      <div className="w-full md:w-1/2">
        <img src={Analyse} alt="Example" className="w-full h-auto" />
      </div>
    </div>
    </Layout>
  );
};

export default HomePage;

