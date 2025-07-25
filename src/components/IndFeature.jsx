export default function IndFeature({feature, icon, details, ...props}){
    return(
        <div id="indFeature" className={feature}>
            <h4>{feature}</h4>
            <img src={icon} alt={icon} />
            <p>{details}</p>
        </div>
    )
}