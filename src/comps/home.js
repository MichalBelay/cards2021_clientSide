import React, { useEffect, useState } from 'react';
import { API_URL, doApiGet } from '../services/apiSer';
import CardsList from './CardsList';
import PageHeader from './common/pageHeader';


function Home(props){
  let [cards_ar,setCardsAr] = useState([]);

  useEffect(() => {
    let url = API_URL+"/cards"
    doApi(url)
  },[])

  const doApi = async(_url) => {
    let data = await doApiGet(_url);
    console.log(data);
    setCardsAr(data);
  }


  return(
    <div>
      <PageHeader title="Welcome to home page" />
      <CardsList ar={cards_ar}/>
    </div> 
  )
}

export default Home