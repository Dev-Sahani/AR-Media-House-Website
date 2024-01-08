import { Heading } from "./";

const Wonder = () => {
  const gradientStyle = {"background-image": "linear-gradient(0deg, #080403 50%, #f4f4f4 50%)"}
  return (
    <div className="pt-4 flex justify-center" style={gradientStyle}>
      <div className="z-4 flex justify-around items-center py-8 w-[80vw] h-72 rounded-[5rem] bg-white relative">
        <div className="h-1/2 absolute w-full top-0 rounded-t-[5rem] shadow-xl" style={{"box-shadow": "#DDDDDD 8px -8px 10px, #DDDDDD -8px -8px 10px"}}></div>
        <Heading
          className="py-8"
          heading="We Can do"
          subHeading="wonders for you"
        />
        <div className="h-56 w-56 bg-tertiary-500">{/* SVG OR ANIMATION */}</div>
      </div>
    </div>
  );
};

export default Wonder;
