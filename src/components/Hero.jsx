import CtaButton from "./CtaButton"
import clock from '../assets/clock-bg.png'
import bottomArrow from '../assets/bottom-arrow.svg'

export default function Hero(){
    return(
        <main id="Home">
            <div id="homep1"> 
                <div id="lightShadow"></div>
                <h1>Timeless Beauty, Aged Masterpieces</h1>
                <p>Owl is a boutique antique store curating timeless treasures — from vintage furniture to rare collectibles. Each piece tells a story, and we're here to pass them on.</p>
                <CtaButton/>
                <a href="#Contact"><img src={bottomArrow} alt="go to bottom" /></a>
            </div>
            <div id="homep2">
                <img src={clock} alt="antique clock" />
                
            </div>
            
        </main>
    )
}