import React from 'react'
import Banner from '../component/home/Banner'
import Categories from '../component/home/Categories'
import TrendingCelebrities from '../component/home/TrendingCelebrities'
import RecentlyAddedProfiles from '../component/home/RecentlyAddedProfiles'
import SyncSlider from '../component/home/SyncSlider'
import PopularPeople from '../component/home/PopularSection'
import CtaSection from '../component/home/Cta'
import ContinuousSlider from '../component/home/ContinuousSlider'
import TrendingCelebrities2 from '../component/home/TrendingCelebrities2'
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
  document.title = "Home | We Fanss";
}, []);
  
  return (
    <>
      <Banner/>
      <Categories/>
      {/* <TrendingCelebrities/> */}
      <TrendingCelebrities2/>
      <RecentlyAddedProfiles/>
      <SyncSlider/>
      <ContinuousSlider/>
      <CtaSection/>
      <PopularPeople/>
    </>
  )
}

export default Home