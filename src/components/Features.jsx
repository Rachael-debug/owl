import IndFeature from "./indFeature"

import verifiedIcon from '../assets/verified-icon.svg'
import handIcon from '../assets/hand-icn.svg'
import shippingIcon from '../assets/shipping-icon.svg'

import CtaButton from "./CtaButton"


export default function Features(){
    return(
        <section id="Features">
            <h3>What we give You</h3>
            <div id="featureList">
                <IndFeature feature="AUTHENTIC PIECES" icon={verifiedIcon} details="Carefully sourced and verified"/>
                <IndFeature feature="HAND-RESTORED" icon={handIcon} details="Lovingly preserved to last"/>
                <IndFeature feature="WORLDWIDE SHIPPING" icon={shippingIcon} details="Rare finds, delivered globally"/>
            </div>
            <div id="featuresCta">
                <CtaButton/>
                <div><hr /></div>
            </div>
            <h1>Features</h1>
        </section>
    )
}