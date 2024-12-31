import baseUrl from "../Api/baseUrl";

const useInsertDataWithMedia = async (url, params) => {
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
    withCredentials: true,
  };

  const res = await baseUrl.post(url, params, config);
  return res;
};

const useInsertData = async (url, params) => {
  const config = {
    withCredentials: true,
  };
  const res = await baseUrl.post(url, params, config);
  return res;
};

export { useInsertData, useInsertDataWithMedia };
