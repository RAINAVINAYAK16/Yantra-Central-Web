import robot from "../assets/robot.png";

export default function Content1() {
  return (
    <div className="flex items-center justify-between min-h-screen px-10">
      {/* Text Section */}
      <div className="max-w-lg">
        <h1 className="text-black text-[3rem] font-inknut-antiqua">
          Water water everywhere
        </h1>
        <p className="text-black text-[1.25rem] font-inknut-antiqua">
          This is an all-in-one platform for real-time simulation of water distribution pipelines, from reservoirs to water treatment plants.
        </p>
      </div>
      
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img src={robot} alt="Robot" className="w-[300px] md:w-[400px] lg:w-[500px]" />
      </div>
    </div>
  );
}
