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
