//falta testear
export const newspaperInfo = (client) => async (params) => {
  try {
    const { data } = await client.get("/:id", params);
    console.info(data);
    return data;
  } catch (error) {
    console.info("Newspaper error info: ", error.message);
    return { success: false };
  }
};
