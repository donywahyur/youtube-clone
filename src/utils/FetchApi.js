import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
        maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': '9ba54a8129msh689833577e2463dp17dfd6jsnbce99d945311',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchApi = async (url) =>  {
    const response = await axios.get(`${BASE_URL}/${url}`, options)

    return response.data
}