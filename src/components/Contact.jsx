import IndContact from "./IndContact"

export default function Contact(){
    return(
        <ul id="Contact">
            <IndContact link="mailto:hello@owlantiques.com" icon="fa-solid fa-envelope" contact=" hello@owlantiques.com"/>
            <IndContact link="https://www.linkedin.com/" icon="fa-brands fa-linkedin-in" contact=" @owlantiques"/>
            <IndContact link="tel:+2347032852355" icon="fa-solid fa-phone-volume" contact=" 0703-285-2355"/>
        </ul>
    )
};