import axios from "axios";

export const postTabReq1 = (postData) => {
  const response = axios.post(
    `/route`,
    {
      data: postData,
    }
    //If need any authorization
    // {
    //   headers: {
    //     Authorization: `Bearer ${bearerToken}`,
    //     "Content-Type": "application/json",
    //   },
    // }
  );
  return response;
};
export const postTabReq2 = (postData) => {
  const response = axios.post(
    `/route`,
    {
      data: postData,
    }
    //If need any authorization
    // {
    //   headers: {
    //     Authorization: `Bearer ${bearerToken}`,
    //     "Content-Type": "application/json",
    //   },
    // }
  );
  return response;
};
export const postTabReq3 = (postData) => {
  const response = axios.post(
    `/route`,
    {
      data: postData,
    }
    //If need any authorization
    // {
    //   headers: {
    //     Authorization: `Bearer ${bearerToken}`,
    //     "Content-Type": "application/json",
    //   },
    // }
  );
  return response;
};
//Get request sample

export const GetData = async () => {
  const response = await axios.get(
    `/route`
    //If need any authorization
    //   {
    //     headers: {
    //       Authorization: `Bearer ${bearerToken}`,
    //     },
    //   }
  );
  return response;
};
