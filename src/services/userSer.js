import { API_URL, doApiMethod } from "./apiSer";

let user = {};


export const updateUserData = async () => {
  if (localStorage["tok"]) {
    // אם יש טוקן מנסים להוציא את המידע
    // של המשתמש במידה והטוקן לא תקין
    // נשלח אותו ללוג אין
    let url = API_URL + "/users/userInfo";
    try{
      let data = await doApiMethod(url,"GET");
      if(data._id){
        user = data
      }
      else{
        localStorage.removeItem("tok");
        user = {}
      }
      return user
    }
    catch(err){
      localStorage.removeItem("tok");
      user = {};
      return user
    }
  }
  else{
    user = {}
    return user;
  }
}



export const getUserData = () => {
  return user;
}

// פונקציה שמעדכנת את המערך קארדס של היוזר שהוא עשה להם פייבורייט
export const updateUserCardsAddFav = async(_bizCardNumber) => {
  // אני אמנע מצב שיש פעמיים את אותו תא במערך
  let temp_ar  = [...user.cards,_bizCardNumber];
  // Set -> מייצר אובייקט שדואג שלא יהיה מצב שיש פעמיים תא מסויים
   temp_ar = new Set([...temp_ar]);
  user.cards.splice(0, user.cards.length, ...temp_ar);
  
  let url = API_URL+"/users/cards"
  try{

    let data = await doApiMethod(url,"PATCH",{cards:user.cards});
    return data;
  }
  catch(err){
    console.log(err)
    alert("there problem, try again later")
    throw err
  }
}


