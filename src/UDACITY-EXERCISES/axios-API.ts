/** Use Axios to get data from restcountries api */
import axios from 'axios';

/** Use the free API https://restcountries.eu/
 * You will use the following endpoints
 * https://restcountries.eu/rest/v2/name/{name} for countries by name
 * https://restcountries.eu/rest/v2/regionalbloc/{regionalbloc} for region blocks
 */

/** Create getCountry Function here */
async function getCountry(name: string){
    const getApi = await axios(
        `https://restcountries.eu/rest/v2/name/${name}`
    );
    const data = getApi.data;
    const country = {
        capital: data.capital,
        region: data.region,
        numericCode: data.numericCode
    }
    return country;
}

/** Create a test for this getRegion function */
async function getRegionCountries(regionalbloc: string) {
  const getApi = await axios(
    `https://restcountries.eu/rest/v2/regionalbloc/${regionalbloc}`
  );
  const data = getApi.data;
  const countries = [];
  for (let i = 0; i < data.length; i++) {
    countries.push(data[i].name);
  }
  return countries;
}

/** Create getRegionCapitals function here */
async function getRegionCapitals(region: string): string[]{
  const getApi = await axios(
    `https://restcountries.eu/rest/v2/regionalbloc/${regionalbloc}`
  );
  const data = getApi.data;
}


export default {
  getCountry,
  getRegionCountries,
  getRegionCapitals
};
