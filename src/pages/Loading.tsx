const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full mt-4 text-emerald-500 gap-5">
      <span className="dot-animation">Fetching please wait.</span>
      <div className="relative rounded-full border-b-2 border-emerald-500 h-[50px] w-[50px] animate-spin">    
      </div>
    </div>
  );
};

export default Loading;
