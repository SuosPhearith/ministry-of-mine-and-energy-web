import Image from "next/image";
import logo from "../../../../public/images/mme/MME_Logo.png";
const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-primary dark:bg-black">
      <div className="flex flex-col items-center">
        <Image src={logo} width={120} height={120} alt="loading" />
        <div className="mt-3 flex items-center justify-center space-x-2 dark:invert">
          <div className="h-3 w-3 animate-bounce rounded-full bg-white [animation-delay:-0.3s]"></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-white [animation-delay:-0.10s]"></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-white [animation-delay:-0.15s]"></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
