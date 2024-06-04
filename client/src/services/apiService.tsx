export const fetchPostalCodeData = async (
  country: string,
  postcode: string
) => {
  try {
    const res = await fetch(`https://api.zippopotam.us/${country}/${postcode}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (error: any) {
    throw new Error(`Error during fetch: ${error.message}`);
  }
};
