import axios from "axios";

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1/",
})

export const getCountriesData = () => {
    return api.get("all?fields=name,capital,flags,continents,population");
}

export const getDetailedData = (countryName) => {
    return api.get(`name/${countryName}`);
}