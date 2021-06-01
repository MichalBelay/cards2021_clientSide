import { API_URL, doApiMethod } from "./apiSer";
import { checkIfUser } from "./authSer";

let user = {};

// הקובץ היכיל את כל המידע על יוזר הקיים
// ויוכל לספק לכל קומפנינטה את המידע על המשתמש

export const checkUser = async () => {
  if (localStorage["tok"]) {
    // קודם בודק אם הטוקן תקין
    let dataUser = await checkIfUser();
    if (!dataUser.status) {
      localStorage.removeItem("tok");
      window.location.href = "/login";
    }
    else{
      getUserDataFromApi();
    }
  }
}


export const getUserDataFromApi = async() => {
  try{
    let url = API_URL + "/users/userInfo";
    let data = await doApiMethod(url,"GET");
    console.log(data);
    user = data;
  }
  catch (err) {
    user = {}

  }
}

export const getUserData = () => {
  return user;
}