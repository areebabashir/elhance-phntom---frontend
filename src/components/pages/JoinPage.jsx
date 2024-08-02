import Layout from "../Layouts/Layout";
import join1 from "../../assets/join.png";

const JoinPage = () => {
  return (
    <Layout>
     <div className=" flex items-center justify-center pt-16 mt-0 mb-12">
      <div className=" rounded-lg text-center w-full  pt-3"style={{
              background:
                "linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))",
                height:'433px'
            }}>
        <h1 className="text-white font-extrabold text-3xl pt-12 mb-5">Become Part of <br />our team!!</h1>
        <img src={join1} alt="Placeholder Image" className="mx-auto mb-0 pb-0" />
      </div>
    </div>
    <div>
      <h1 className="font-bold mb-10 text-3xl text-center">Fill this form</h1>
    </div>
    <div className="border border-black p-4 rounded-2xl  " style={{width:'90%', margin:'auto'}}>
      <div className=" w-full boder boder-2 border-black ">
        <h2 className="pl-4 font-bold">You are applying for?</h2>
        <div className=" flex ">
      <p className="border border-black p-2 m-2 w-28 text-center rounded-full">Head</p>
      <p className="border border-black p-2 m-2 w-28 text-center rounded-full">Co-Head</p>
      <p className="border border-black p-2 m-2 w-36 text-center rounded-full">General Member</p>
    </div>

      </div>
    </div>
    </Layout>
  );
};

export default JoinPage;
