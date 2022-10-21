import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        priority
        className="opacity-70"
        src="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        layout="fill"
        objectFit="cover"
        alt="banner"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg ">Not sure where to go? Perfect</p>
        <button className="text-red-400 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I am Flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
