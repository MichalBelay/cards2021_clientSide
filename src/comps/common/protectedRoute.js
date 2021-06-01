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


  //  מפעיל את הקומפנינטה בכל מקרה
  // וברגע שמקבל מהפונקציה שהשרת לא מזהה את הטוקן או שהוא 
  // לא תקף ישגר אותו עם הודעה ללוג אין
  return (
    <Route exact path={props.path}
      render={() => {
        checkIfUser()
          .then(data => {
            console.log(data);
            // אם הכל בסדר אנחנו אמורים
            // לקבל סטטוס
            if (!data.status) {
              toast.error("There problem, log in again");
              // למחוק את הטוקן אם הוא לא תקין
              localStorage.removeItem("tok");
              history.push("/login");
            }
          })
        return (<props.comp />);
      }} />
  )
}

export default ProtectedRoute;