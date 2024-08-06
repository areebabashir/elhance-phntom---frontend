import Layout from "../Layouts/Layout";
import contact from '../../assets/conatct.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contactus = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Show toast notification
    toast.success('Message sent successfully!');
    // Reload page after 2 seconds
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <Layout>
      <ToastContainer />
      <div className="min-h-screen flex items-center w-{90%}">
        <div className="container mx-auto flex flex-col md:flex-row items-center p-16" style={{
          background: "linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))",
        }}>
          {/* Image on the left */}
          <div className="w-full text-center md:w-{30%} flex justify-center items-center mb-6 md:mb-0 w-96">
            <img src={contact} alt="Contact" className="inline-block" />
          </div>
          
          {/* Contact Form */}
          <div className="w-full md:w-{70%} p-8 rounded-lg md:pr-20">
            <h2 className="text-4xl text-white font-bold mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default contactus;
