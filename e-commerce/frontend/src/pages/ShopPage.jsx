import { Fragment } from "react"
// import Header from "../components/Layout/Header/Header"
import Categories from "../components/Categories/Categories"
import Products from "../components/Products/Products"
import CampaignSingle from "../components/CampaingnSingle/CampaingnSingle"
// import Footer from "../components/Layout/Footer/Footer"

const ShopPage = () => {
    return (
        <Fragment>
           
            <Categories />
            <Products />
            <CampaignSingle />
            <Products />
           

        </Fragment>
    )
}
export default ShopPage