export const newspaperInfo = (client) => async (params) => {
  try {
    const { data: response } = await client.get(
      `http://localhost:3000/searchs/${params.url}`
    );
    console.info(response);
    return response;
  } catch (error) {
    console.info("Newspaper error info: ", error.message);
    console.log(params.url);
    return { success: false };
  }
};
