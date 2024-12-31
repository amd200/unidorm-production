import baseUrl from "../Api/baseUrl";

const useGetData = async (url, params) => {
  try {
    const config = {
      withCredentials: true,
      params,
    };
    const response = await baseUrl.get(url, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // يمكنك معالجة الخطأ بشكل أفضل حسب الحاجة
  }
};

export default useGetData;
