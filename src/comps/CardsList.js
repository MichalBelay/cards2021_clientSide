import React from 'react';
import { getUserData } from '../services/userSer';


function CardsList(props) {
  let [userData,SetUserData]=useState();

  useEffect(() => {
    // בודק מידע על היוזר
    // יעזור לנו להבין למשל במקרה שלה הקומפנינטה למה הוא
    // עשה כבר פייבוריט ולמה לא
    setUserData(getUserData());
  },[])


 
  return (
    <div className="row">
      {props.ar.map(item => {
        // ? -> אם המאפיין לא קיים שלא יתייחס
        let bg = item.bizImage?.length > 2 ? item.bizImage : '/images/default.jpg'
        return (
          <div key={item._id} className="col-lg-4 p-3">
            <div className="border">
              {/* הגדרות עיצוב נמצאות בקובץ card.css */}
              <div className="biz_img" style={{
                 backgroundImage:  `url(${bg})` }} >

              </div>
              <article className="p-3">
                <h2>{item.bizName}</h2>
                <p>{item.bizDescription}</p>
                <hr />
                <div><strong>Phone:</strong> {item.bizPhone}</div>
                <div><strong>Address:</strong> {item.bizAddress}</div>
              </article>
            </div>
          </div>
        )
      })}
    </div>

  )
}

export default CardsList



{/* <div className="col-lg-4 p-3">
        <div className="p-2 border">
          <div className="biz_img" style={{ backgroundImage: `url(../images/default.jpg)` }} >

          </div>
          <h2>{prop}</h2>
        </div>
      </div> */}