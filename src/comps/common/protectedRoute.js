import React from 'react';
import { Route, useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import { checkIfUser } from '../../services/authSer';

function ProtectedRoute(props) {
  let history = useHistory();
  // בודק אם היוזר מחובר ואם לא משגר אותו בחזרה ללוגאין

  // וראוט שרק לעסק מותר להיות בו אז גם משגר החוצה אם המשתמש לא מחובר

  //  כדי להשתמש בקומפנינטה שהועבר בפרופס אנחנו כותבים
  // <props.comps />

  const checkAuth = () => {
    checkIfUser()
    .then(data => {
      console.log(data);
      if(!data.status){
        toast.error("There problem, log in please")
        localStorage.removeItem("tok");
        history.push("/login");
      }
    })
    return (<props.comp />);
  }

  return (
    <Route exact path={props.path}
      render={ () => {
        return (checkAuth())
      }  } />
  )
}

export default ProtectedRoute;