import ellipse7 from "./ellipse-7.svg";
import rectangle1 from "./rectangle-1.svg";

interface Props {
  className: string; 
}

function Component({ className = "" }: Props) {
  return (
    <div
      className={`relative top-[-499px] left-[-989px] w-[1147px] h-[783px] bg-[url(/haikei-1.png)] bg-cover bg-[50%_50%] ${className}`}
    >
      <div className="absolute w-[3.40%] h-[4.85%] top-[64.11%] left-[89.45%] bg-[#fdf8f8b0] rounded-[19.5px/19px]" />

      <div className="absolute w-[3.40%] h-[4.85%] top-[49.17%] left-[68.44%] bg-[#fdf8f8b0] rounded-[19.5px/19px]" />

      <div className="absolute w-[3.40%] h-[4.85%] top-[42.15%] left-[73.23%] bg-[#fdf8f8b0] rounded-[19.5px/19px]" />

      <div className="absolute w-[3.40%] h-[4.85%] top-[52.62%] left-[76.29%] bg-[#fdf8f8b0] rounded-[19.5px/19px]" />

      <div className="absolute w-[3.40%] h-[4.85%] top-[65.39%] left-[78.47%] bg-[#fdf8f8b0] rounded-[19.5px/19px]" />

      <div className="absolute w-[3.40%] h-[4.85%] top-[76.63%] left-[78.81%] bg-[#fdf8f8b0] rounded-[19.5px/19px]" />

      <img
        className="absolute w-[3.40%] h-[4.85%] top-[74.71%] left-[69.31%]"
        alt="Ellipse"
        src={ellipse7}
      />

      <img
        className="absolute w-[45.77%] h-[49.55%] top-[34.74%] left-[18.22%]"
        alt="Rectangle"
        src={rectangle1}
      />
    </div>
  );
};

export default Component;