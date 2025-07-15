export default function IndContact({link, icon, contact}){
    return(
        <a href={link} target="_blank"><li><span><i className={icon}></i></span> {contact}</li></a>
    )
}