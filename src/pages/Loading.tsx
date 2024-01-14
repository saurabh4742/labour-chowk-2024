const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full gap-5 mt-4 text-white">
      <span className="dot-animation">Fetching please wait.</span>
      <div className="relative rounded-full border-b-2 border-white h-[50px] w-[50px] animate-spin">    
      </div>
    </div>
  );
};

export default Loading;
