export default function SearchForm({country, setCountry, postcode, setPostcode, onSubmit}) {

  return (
    <div className="w-full h-screen bg-geoBlack absolute z-10 flex flex-row justify-center items-center">
      <form
        className="w-[510px] h-[280px] flex flex-col p-[10px]"
        onSubmit={onSubmit}
      >
        <h2 className="font-bold text-[1.7rem] mb-[20px] text-geoWhite">
          Enter your address
        </h2>
        <input
          placeholder="Enter postcode"
          className="w-full h-[55px] pl-[20px] border-[1px] border-geoLightGrey mb-[20px] rounded-[12px] placeholder:text-geoWhite placeholder-regular"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
        ></input>
        <select
          value={country}
          className="mb-[20px] border-[1px]"
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="US">United States</option>
          <option value="DE">Germany</option>
        </select>
        <p className="text-geoWhite text-[0.8rem] mb-[20px]">
          We'll use this info to find the location
        </p>
        <button
          type="submit"
          className="w-full h-[45px] bg-geoRed rounded-full text-geoWhite"
        >
          Find address
        </button>
      </form>
    </div>
  );
}
