export const fetchPostalCodeData = async (
  country: string,
  postcode: string
) => {
  try {
    const res = await fetch(`https://api.zippopotam.us/${country}/${postcode}`);
    if (res.ok) {
      return await res.json();
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};
