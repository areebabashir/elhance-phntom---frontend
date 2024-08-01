import Layout from "../Layouts/Layout"
import safi from "../../assets/safii.jpeg"
import sarmad from "../../assets/sarmad.jpeg"
import aliyan from "../../assets/aliyan.jpeg"
import hafsa from "../../assets/hafsa.jpeg"
import shahyar from "../../assets/shahyar.jpeg"
import haroon from "../../assets/haroon.jpeg"
import daniyal from "../../assets/daniyal.jpeg"
import talha from "../../assets/talha.jpeg"
import shamir from "../../assets/shamir.jpeg"
import fatima from "../../assets/fatima.jpg"
import sharjeel from "../../assets/sharjeel.jpeg"
import gulzareen from "../../assets/gulzareen.jpeg"
import areeba from "../../assets/areeba.jpeg"



const Cabinet = () => {
  const gradientStyle = {
    background: 'linear-gradient(hsla(269, 100%, 65%, 1), hsla(200, 80%, 69%, 1))',
    height: '400px',
  };

  const cardStyle = {
    background: 'white',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.25)',
  };
  return (
    <Layout>
    <div className="w-full text-black text-center text-5xl font-bold" style={gradientStyle}>
      <h1>
        Welcome, Meet <br /> Our Team!
      </h1>
    </div>
    <div className="container mx-auto py-8 ">
      <div className="flex flex-col md:flex-row justify-center items-center m-auto w-full md:w-[80%] md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
        <div className="max-w-xs mx-auto md:pt-0  bg-white shadow-2xl text-center text-lg rounded-lg p-8 " style={cardStyle}>
          <div className="relative h-12">
            <img
              src={safi}
              alt="Profile"
              className="w-32 h-32 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="p-8">
            <div className="text-2xl font-bold text-black">Muhammad Saffi Ul Haq</div>
            <h3
              className="mt-4 text-white pl-4 pr-4 rounded-3xl"
              style={{
                background: 'linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))',
              }}
            >
              President
            </h3>
          </div>
        </div>
        <div className="max-w-xs mx-auto md:pt-0 pt-10 bg-white shadow-2xl text-center text-lg rounded-lg p-8" style={cardStyle}>
          <div className="relative h-12">
            <img
              src={sarmad}
              alt="Profile"
              className="w-32 h-32 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="p-8">
            <div className="text-2xl font-bold text-black">Sarmad Mirza</div>
            <h3
              className="mt-4 text-white pl-4 pr-4 rounded-3xl"
              style={{
                background: 'linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))',
              }}
            >
              Vice President
            </h3>
          </div>
        </div>
        <div className="max-w-xs mx-auto md:pt-0 pt-10 bg-white shadow-2xl text-center text-lg rounded-lg p-8" style={cardStyle}>
          <div className="relative h-12">
            <img
              src={sarmad}
              alt="Profile"
              className="w-32 h-32 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="p-8">
            <div className="text-2xl font-bold text-black">Attia batool</div>
            <h3
              className="mt-4 text-white pl-4 pr-4 rounded-3xl"
              style={{
                background: 'linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))',
              }}
            >
             Vice President
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-cente items-center m-auto w-full pt-52r md:w-[80%] md:pt-80">
        <div className="max-w-xs mx-auto md:pt-0 bg-white shadow-2xl text-center text-lg rounded-lg p-8" style={cardStyle}>
          <div className="relative h-12">
            <img
              src={aliyan}
              alt="Profile"
              className="w-32 h-32 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="p-8">
            <div className="text-2xl font-bold text-black">Aliyan Ilyas</div>
            <h3
              className="mt-4 text-white pl-4 pr-4 rounded-3xl"
              style={{
                background: 'linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))',
              }}
            >
Finance Secretary            </h3>
          </div>
        </div>
        <div className="max-w-xs mx-auto md:pt-0 pt-10 bg-white shadow-2xl text-center text-lg rounded-lg p-8" style={cardStyle}>
          <div className="relative h-12">
            <img
              src={hafsa}
              alt="Profile"
              className="w-32 h-32 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="p-8">
            <div className="text-2xl font-bold text-black">Hafsa Faraz</div>
            <h3
              className="mt-4 text-white pl-4 pr-4 rounded-3xl"
              style={{
                background: 'linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))',
              }}
            >
General Secretary            </h3>
          </div>
        </div>
        <div className="max-w-xs mx-auto md:pt-0 pt-10 bg-white shadow-2xl text-center text-lg rounded-lg p-8" style={cardStyle}>
          <div className="relative h-12">
            <img
              src={shahyar}
              alt="Profile"
              className="w-32 h-32 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="p-8">
            <div className="text-2xl font-bold text-black">Shehryar</div>
            <h3
              className="mt-4 text-white pl-4 pr-4 rounded-3xl"
              style={{
                background: 'linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))',
              }}
            >
             Joint Secretary
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center m-auto w-full  pt-20  md:w-[95%] md:pt-40">
        <div className="max-w-xs mx-auto md:pt-0 bg-white shadow-2xl text-center text-lg rounded-lg p-8" style={cardStyle}>
          <div className="relative h-12">
            <img
              src={haroon}
              alt="Profile"
              className="w-32 h-32 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="p-8">
            <div className="text-2xl font-bold text-black">Your Name</div>
            <h3
              className="mt-4 text-white pl-4 pr-4 rounded-3xl"
              style={{
                background: 'linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))',
              }}
            >
              Your Title
            </h3>
          </div>
        </div>
        <div className="max-w-xs mx-auto md:pt-0 bg-white shadow-2xl text-center text-lg rounded-lg p-8" style={cardStyle}>
          <div className="relative h-12">
            <img
              src={daniyal}
              alt="Profile"
              className="w-32 h-32 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="p-8">
            <div className="text-2xl font-bold text-black">Your Name</div>
            <h3
              className="mt-4 text-white pl-4 pr-4 rounded-3xl"
              style={{
                background: 'linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))',
              }}
            >
              Your Title
            </h3>
          </div>
        </div>
        <div className="max-w-xs mx-auto md:pt-0 pt-10 bg-white shadow-2xl text-center text-lg rounded-lg p-8" style={cardStyle}>
          <div className="relative h-12">
            <img
              src={talha}
              alt="Profile"
              className="w-32 h-32 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="p-8">
            <div className="text-2xl font-bold text-black">Your Name</div>
            <h3
              className="mt-4 text-white pl-4 pr-4 rounded-3xl"
              style={{
                background: 'linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))',
              }}
            >
              Your Title
            </h3>
          </div>
        </div>
        <div className="max-w-xs mx-auto md:pt-0 pt-10 bg-white shadow-2xl text-center text-lg rounded-lg p-8" style={cardStyle}>
          <div className="relative h-12">
            <img
              src={shamir}
              alt="Profile"
              className="w-32 h-32 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="p-8">
            <div className="text-2xl font-bold text-black">Your Name</div>
            <h3
              className="mt-4 text-white pl-4 pr-4 rounded-3xl"
              style={{
                background: 'linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))',
              }}
            >
              Your Title
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center m-auto w-full  pt-20  md:w-[95% ] md:pt-40">
        <div className="max-w-xs mx-auto md:pt-0 bg-white shadow-2xl text-center text-lg rounded-lg p-8" style={cardStyle}>
          <div className="relative h-12">
            <img
              src={fatima}
              alt="Profile"
              className="w-32 h-32 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="p-8">
            <div className="text-2xl font-bold text-black">Your Name</div>
            <h3
              className="mt-4 text-white pl-4 pr-4 rounded-3xl"
              style={{
                background: 'linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))',
              }}
            >
              Your Title
            </h3>
          </div>
        </div>
        <div className="max-w-xs mx-auto md:pt-0 bg-white shadow-2xl text-center text-lg rounded-lg p-8" style={cardStyle}>
          <div className="relative h-12">
            <img
              src={sharjeel}
              alt="Profile"
              className="w-32 h-32 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="p-8">
            <div className="text-2xl font-bold text-black">Your Name</div>
            <h3
              className="mt-4 text-white pl-4 pr-4 rounded-3xl"
              style={{
                background: 'linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))',
              }}
            >
              Your Title
            </h3>
          </div>
        </div>
        <div className="max-w-xs mx-auto md:pt-0 pt-10 bg-white shadow-2xl text-center text-lg rounded-lg p-8" style={cardStyle}>
          <div className="relative h-12">
            <img
              src={gulzareen}
              alt="Profile"
              className="w-32 h-32 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="p-8">
            <div className="text-2xl font-bold text-black">Your Name</div>
            <h3
              className="mt-4 text-white pl-4 pr-4 rounded-3xl"
              style={{
                background: 'linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))',
              }}
            >
              Your Title
            </h3>
          </div>
        </div>
        <div className="max-w-xs mx-auto md:pt-0 pt-10 bg-white shadow-2xl text-center text-lg rounded-lg p-8" style={cardStyle}>
          <div className="relative h-12">
            <img
              src={areeba}
              alt="Profile"
              className="w-32 h-32 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="p-8">
            <div className="text-2xl font-bold text-black">Your Name</div>
            <h3
              className="mt-4 text-white pl-4 pr-4 rounded-3xl"
              style={{
                background: 'linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))',
              }}
            >
              Your Title
            </h3>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default Cabinet