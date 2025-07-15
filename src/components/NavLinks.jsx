// export default function NavLinks({link, page}){
//     return(
//         <li className="navLink">
//             <a href={link} target="_top">{page}</a>
//         </li>
//     )
// }
import { Link } from "react-scroll";

export default function NavLinks({page}){
    return(
        <li className="navLink">
            {/* <a href={link} target="_top">{page}</a> */}
            <Link
                to={page}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                activeClass="activeLink"
                // className="cursor-pointer transition-colors duration-300"
            > {page}</Link>
        </li>
    )
}