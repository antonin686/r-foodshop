import axios from "axios";

const fetchPostRes = async (url: string, data: any, token?: any) => {
  let formdata = new FormData();
  let dataArr = Object.entries(data).map(([key, value]) => ({ key, value }));

  dataArr.forEach((element: any) => {
    formdata.append(element.key, element.value);
  });

  let config: any = null;
  
  if (token) {
    config = {
      headers: {
        "auth-token": token,
      },
    };
  }

  let myObject = await axios.post(url, formdata, config);
  // console.log(myObject)
  return myObject.data;
};

const fetchGetRes = async (url: string, token?: any) => {
  let config: any = null;

  if (token) {
    config = {
      headers: {
        "auth-token": token,
      },
    };
  }
  let myObject = await axios.get(url, config);
  return myObject.data;
};

export { fetchPostRes, fetchGetRes };
