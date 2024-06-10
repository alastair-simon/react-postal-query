
export default function Home() {

  return (
    <div className="ml-[300px]">
      <div
        id="placeholder-wrap"
        className="w-full h-screen pl-[50px] flex flex-row justify-center items-center text-locaWhite"
      >
        <div className="w-[240px] h-[120px] flex flex-row justify-center items-center gap-2 rounded-[20px] border-[1px] border-locaMidLight">
          <p className="text-[18px] text-center font-regular text-locaMidLight">
            K + ⌘ to start <br></br> a new search
          </p>
        </div>
      </div>
    </div>
  );
}
