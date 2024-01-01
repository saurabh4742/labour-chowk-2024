import LandingPageLoginCard from "./ui-boiler/LandingPageLoginCard";
function Landing({setisLabor,setisEmployer}) {
  return (
    <div  className="justify-center flex h-[100vh] items-center ">
      <LandingPageLoginCard setisLabor={setisLabor} setisEmployer={setisEmployer}/>
    </div>
  );
}
export default Landing;
