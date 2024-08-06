import Layout from "../Layouts/Layout"
import huawei from '../../assets/Huawei.png'
import seminar from '../../assets/seminar.png'




const Events = () => {
  return (
    <Layout>
      <div className="w-full  " style={{background: 'linear-gradient( hsla(200, 80%, 69%, 1),hsla(269, 100%, 65%, 1))',
  height: '300px'}}>
<div className="flex flex-row justify-center items-center ">
  <p className="text-center flex justify-center mt-10 items-center font-bold md:text-9xl text-7xl"
   style={{
     background: "linear-gradient(90deg, hsla(200, 100%, 35%, 1), hsla(0, 0%, 100%, 1))",
     WebkitBackgroundClip: "text",
     WebkitTextFillColor: "transparent"
   }}>E</p>
<p className="text-center flex justify-center mt-32 items-center  font-bold md:text-9xl text-7xl"
   style={{
     background: "linear-gradient(90deg, hsla(200, 100%, 35%, 1), hsla(0, 0%, 100%, 1))",
     WebkitBackgroundClip: "text",
     WebkitTextFillColor: "transparent"
   }}>V</p>
<p className="text-center flex justify-center mt-10 items-center font-bold md:text-9xl text-7xl"
   style={{
     background: "linear-gradient(90deg, hsla(200, 100%, 35%, 1), hsla(0, 0%, 100%, 1))",
     WebkitBackgroundClip: "text",
     WebkitTextFillColor: "transparent"
   }}>E</p>
<p className="text-center flex justify-center mt-32 items-center font-bold md:text-9xl text-7xl"
   style={{
     background: "linear-gradient(90deg, hsla(200, 100%, 35%, 1), hsla(0, 0%, 100%, 1))",
     WebkitBackgroundClip: "text",
     WebkitTextFillColor: "transparent"
   }}>N</p>
<p className="text-center flex justify-center mt-10 items-center  font-bold md:text-9xl text-7xl"
   style={{
     background: "linear-gradient(90deg, hsla(200, 100%, 35%, 1), hsla(0, 0%, 100%, 1))",
     WebkitBackgroundClip: "text",
     WebkitTextFillColor: "transparent"
   }}>T</p>
<p className="text-center flex justify-center mt-32 items-center  font-bold md:text-9xl text-7xl"
   style={{
     background: "linear-gradient(90deg, hsla(200, 100%, 35%, 1), hsla(0, 0%, 100%, 1))",
     WebkitBackgroundClip: "text",
     WebkitTextFillColor: "transparent"
   }}>S</p>

</div>
      </div>
      
      <div className="md:w-[90%] pt-20 pb-20 pl-4 pr-4 m-auto flex flex-col md:flex-row justify-center gap-16">
  <div className="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-96 p-4 border border-black">
    <img src={seminar} className="w-full h-48 object-cover" alt="Card Image"/>
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">Event1 Highlight </h3>
      <p className="text-gray-700 mb-4">A sucessfull webinar on “The Digital Business Strategies” by Huzaifa Ali </p>
      <button className=" text-white px-4 py-2 rounded" style={{
              background:
                "linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))",
            }}>More Info</button>
    </div>
  </div>
  <div className="bg-white  shadow-md rounded-lg overflow-hidden w-full md:w-96  p-4 border border-black">
    <img src={huawei} className="w-full h-48 object-cover" alt="Card Image"/>
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">Event2 Highlight </h3>
      <p className="text-gray-700 mb-4">Seminar on “Huawei ICT Academy” By Dr.Zeshan Iqbal</p>
      <button className=" text-white px-4 py-2 rounded"style={{
              background:
                "linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))",
            }}> More info</button>
    </div>
  </div>
</div>
      </Layout>
  )
}

export default Events