import React from "react"
import Blogs from "../components/Blogs/Blogs"
import Brands from "../components/Brands/Brands"
import Campaigns from "../components/Campaigns/Campaigns"
import CampaignSingle from "../components/CampaingnSingle/CampaingnSingle"
import Categories from "../components/Categories/Categories"
// import Footer from "../components/Layout/Footer/Footer"
// import Header from "../components/Layout/Header/Header"
import Products from "../components/Products/Products"
import Sliders from "../components/Slider/Sliders"


const HomePage = () => {
    return (

        <React.Fragment>

            
            <Sliders />
            <Categories />
            <Products />
            <Campaigns />
            <Products />
            <Blogs />
            <Brands />
            <CampaignSingle />
           

        </React.Fragment>

    )
}
export default HomePage