import baseUrl from "../Api/baseUrl";

const useUpdateDataWithMedia = (url, params) => {
  const config = {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const res = baseUrl.patch(url, params, config);

  return res;
};

const useUpdateData = (url, params) => {
  const config = {
    withCredentials: true,
  };

  const res = baseUrl.patch(url, params, config);

  return res;
};

export { useUpdateData, useUpdateDataWithMedia };
  