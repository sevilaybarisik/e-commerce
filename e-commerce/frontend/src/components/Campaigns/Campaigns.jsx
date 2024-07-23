import CampaignItem from "./CampaignItem"
import "./CampaignItem.css"
import "./Campaigns.css"

const Campaigns = () => {
    return (
        <section className="campaigns">
            <div className="container">
                <div className="campaigns-wrapper">
                    <CampaignItem />
                    <CampaignItem />

                </div>
                <div className="campaigns-wrapper">
                    <CampaignItem />
                    <CampaignItem />

                </div>
            </div>
        </section>
    )
}
export default Campaigns