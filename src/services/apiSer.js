import axios from "axios"

// שנעלה לשרת יתחליף לכתובת של השרת
export const API_URL = "http://localhost:3400";
// export const API_URL = "https://ynet.co.il";

export const doApiGet = async (_url) => {
  try {
    let resp = await axios.get(_url);
    console.log(resp)
    return resp.data;
  } catch (err) {
    console.log(err)
    throw err;
  }
}

export const doApiMethod = async (_url, _method, _bodyData) => {
  try {
    let resp = await axios({
      method: _method,
      url: _url,
      data: _bodyData,
      headers: {
        'content-type': "application/json",
        "x-auth-token": localStorage["tok"]
      }
    })
    return resp.data;
  }
  catch (err) {
    console.log(err);
    // אם יש טעות גם הפרומיס שמאזין יריץ 
    // את ה ERR
    throw err;
  }
}