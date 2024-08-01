import Layout from "../Layouts/Layout"
import contact from '../../assets/conatct.png'
const contactus = () => {
  return (<Layout>
    <div className="min-h-screen flex items-center w-{90%}  ">
      <div className="container mx-auto flex flex-col md:flex-row items-center p-16" style={{
              background:
                "linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))",
            }}>
        {/* Image on the left */}
        <div className="w-full md:w-{30%} flex justify-center mb-6 md:mb-0">
          <img src={contact} alt="Contact" className=" w-96 h-auto rounded-lg"/>
        </div>
        
        {/* Contact Form */}
        <div className="w-full md:w-{70%}p-8 rounded-lg pr-20 ">
          <h2 className="text-4xl text-white font-bold mb-6">Get in Touch</h2>
          <form>
            <div className="mb-4">
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              
              <textarea
                id="message"
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
 </Layout> )
}

export default contactus