import pin from "../../assets/pin.svg"
export default function Home() {

  return (
    <div className="ml-[300px]">
      <div
        id="placeholder-wrap"
        className="w-full h-screen pl-[50px] flex flex-row justify-center items-center text-locaWhite"
      >
        <div className="flex flex-col justify-center items-center">
          <img src={pin} className="w-[200px] mb-[20px]"></img>
        </div>
      </div>
    </div>
  );
}
