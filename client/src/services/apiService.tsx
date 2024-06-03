export const fetchPostalCodeData = async (country, postcode) => {
    try {
        const res = await fetch(
          `https://api.zippopotam.us/${country}/${postcode}`
        );
        if (res.ok) {
            return await res.json()
        }
    } catch (error) {
        throw new Error(error.message)
    }
}
