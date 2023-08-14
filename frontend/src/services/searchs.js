import axios from "axios";

export const newspaperInfo = (client) => async (params) => {
  try {
    const { data: response } = await client.get(
      `http://localhost:3000/searchs/${params.url}`
    );
    console.info(response);
    return response;
  } catch (error) {
    console.info("Newspaper error info: ", error.message);
    return { success: false };
  }
};

export const websiteAPI = () => async (url) => {
  axios
    .get(url)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

export const addSearch = (client) => async (params) => {
  try {
    const { data } = await client.post(
      "http://localhost:3000/searchs/newsearch",
      params
    );
    console.info("service data: ", data);
    return data;
  } catch (error) {
    console.info("Search addition error info: ", error.message);
    console.log("search service params: ", params);
    return { success: false };
  }
};
