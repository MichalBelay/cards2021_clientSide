import React, { useEffect, useState } from 'react';
import { API_URL, doApiMethod } from '../services/apiSer';


import CardsList from './CardsList';
import PageHeader from './common/pageHeader';

function FavoriteCards(props){
  let [cards_ar,setCardsAr] = useState([]);

  useEffect(() => {
    let url = API_URL + "/users/userCardsFav";
    doApi(url)
  },[])

  const doApi = async(_url) => {
    try{
    let data = await doApiMethod(_url,"GET");
    console.log(data);
    setCardsAr(data);
    }
    catch(err){
      console.log(err.response)
    }
  }

  //TODO: add redux to update

  return(
    <div>
      <PageHeader title="Your favorite business cards" />
      <CardsList ar={cards_ar}/>
    </div> 
  )
}

export default FavoriteCards;

{
  /* <i class="fa fa-heart" aria-hidden="true"></i> */}
  /* <i class="fa fa-heart-o" aria-hidden="true"></i> */