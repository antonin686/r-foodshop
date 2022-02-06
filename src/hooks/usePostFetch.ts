import { useState, useEffect, useCallback } from "react";
import axios, { AxiosRequestConfig } from "axios";

function usePostFetch(url: string , data: any) {
  

  const [state, setstate] = useState<any>(null);

  const postMethod = useCallback(() => {
    axios
      .post(url, data)
      .then((response) => {
        setstate(response.data);
      })
      .catch((error) => {
        if (error.response) {
          if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
        }
        setstate([]);
      });
  }, [url]);

  useEffect(() => {
    postMethod();
  }, [url, postMethod]);

  const renewState = () => {
    postMethod();
  };

  return [state, renewState];
}

export default usePostFetch;
