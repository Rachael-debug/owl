import { useState } from "react";


import Chair1 from '../assets/Chairs/hunzinger-platform-rocker.jpg'
import Chair2 from '../assets/Chairs/Military-Mahogany-Dining-Chairs.jpg'
import Chair3 from '../assets/Chairs/Chinese-Folding-Chair.jpg'
import Chair4 from '../assets/Chairs/victorian-five-leg-chair.webp'
import Chair5 from '../assets/Chairs/chippendale-chair.jpeg'

import Sofa1 from '../assets/Sofa/Camel-Back-Sofa.webp'
import Sofa2 from '../assets/Sofa/Swedish-Classical-Sofa.jpeg'
import Sofa3 from '../assets/Sofa/Scalloped-Grotto-Sofa.webp'
import Sofa4 from '../assets/Sofa/victorian-carved-sofa.webp'
import Sofa5 from '../assets/Sofa/library-study-sofa.jpg'

import Bookshelf1 from '../assets/Bookshelves/neoGothic-bookshelf.jpg'
import Bookshelf2 from '../assets/Bookshelves/library-bookshelf.webp'
import Bookshelf3 from '../assets/Bookshelves/irish-flame-bookshelf.webp'
import Bookshelf4 from '../assets/Bookshelves/walnut-bookshelf.jpg'
import Bookshelf5 from '../assets/Bookshelves/dwarf-bookshelf.jpg'

import Windsor1 from '../assets/Windsor/carved-windsor.jpg'
import Windsor2 from '../assets/Windsor/Gothic-Windsor.jpeg'
import Windsor3 from '../assets/Windsor/yewwood-windsor.jpg'
import Windsor4 from '../assets/Windsor/backhoop-windsor.jpg'
import Windsor5 from '../assets/Windsor/hall-windsor.jpg'

import Armoire1 from '../assets/Armoire/french-mirrored-armoire.jpeg'
import Armoire2 from '../assets/Armoire/Distressed-Armoire.webp'
import Armoire3 from '../assets/Armoire/french-armoire.jpg'
import Armoire4 from '../assets/Armoire/black-ornate-armoire.jpeg'
import Armoire5 from '../assets/Armoire/painted-marriage-armoire.jpg'

import Cabinet1 from '../assets/Cabinet/Rococo-Curio-Cabinet.webp'
import Cabinet2 from '../assets/Cabinet/gold-cabbinet.jpg'
import Cabinet3 from '../assets/Cabinet/Victorian-Goncalo-Alves-Cabinet.jpg'
import Cabinet4 from '../assets/Cabinet/Edwardian-Cabinet.jpg'
import Cabinet5 from '../assets/Cabinet/Edwardian-Glass-Display-Cabinet.jpg'

import Table1 from '../assets/Tables/french-demilune-table.webp'
import Table2 from '../assets/Tables/marquetry--table.jpg'
import Table3 from '../assets/Tables/Marquetry-Games-Table.jpg'
import Table4 from '../assets/Tables/victorian-side-table.jpg'
import Table5 from '../assets/Tables/walnut-table.jpg'

import Dresser1 from '../assets/Dresser/eastlake-dresser-with-mirror.webp'
import Dresser2 from '../assets/Dresser/black-dresser-with-mirror.jpg'
import Dresser3 from '../assets/Dresser/cane-and-bamboo-dresser.webp'
import Dresser4 from '../assets/Dresser/eastlake-tall-dresser.avif'
import Dresser5 from '../assets/Dresser/white-drawer.webp'

import Clock1 from '../assets/Clocks/flower-clock.jpg'
import Clock2 from '../assets/Clocks/vintage-clock.webp'
import Clock3 from '../assets/Clocks/mantel-clock.jpg'
import Clock4 from '../assets/Clocks/european-desk-clock.webp'
import Clock5 from '../assets/Clocks/european-pendulum-clock.jpg'

export default function Catalog(){
    const productImages = {
        'Chairs': [Chair1, Chair2, Chair3, Chair4, Chair5],
        'Sofas and Settes': [Sofa1, Sofa2, Sofa3, Sofa4, Sofa5],
        'Bookshelves': [Bookshelf1, Bookshelf2, Bookshelf3, Bookshelf4, Bookshelf5],
        'Windsor Chairs': [Windsor1, Windsor2, Windsor3, Windsor4, Windsor5],
        'Armoires': [Armoire1, Armoire2, Armoire3, Armoire4, Armoire5],
        'Cabinets': [Cabinet1, Cabinet2, Cabinet3, Cabinet4, Cabinet5],
        'Tables': [Table1, Table2, Table3, Table4, Table5],
        'Chests and Dressers': [Dresser1, Dresser2, Dresser3, Dresser4, Dresser5],
        'Clocks': [Clock1, Clock2, Clock3, Clock4, Clock5]
    };

    const initialCategory = Object.keys(productImages)[5];
    const [catalogViewed, setCatalogViewed] = useState(initialCategory);
    const [imageIndex, setImageIndex] = useState(0)

    const handleNext = () => {
        const imagesLength = productImages[catalogViewed].length
        setImageIndex((prevIndex) => (prevIndex + 1) % imagesLength);
    };

    const handlePrev = () => {
        const imagesLength = productImages[catalogViewed].length
        setImageIndex((prevIndex) =>
        (prevIndex - 1 + imagesLength) % imagesLength
        );
    };

    const currentImage = productImages[catalogViewed][imageIndex];
    const productName = currentImage
        .split('/')
        .pop()                      // "hunzinger-platform-rocker.jpg"
        .replace(/\.[^/.]+$/, '')   // "hunzinger-platform-rocker"
        .replace(/-/g, ' ')         // "hunzinger platform rocker"
        .replace(/\b\w/g, c => c.toUpperCase());

    return(
        <div id="justcatalog">
            <div id="catalogImages">
                <i className="fa-solid fa-chevron-left" onClick={handlePrev} id="handlePrev"></i>
                <img src={productImages[catalogViewed][imageIndex]} alt="" />
                <i className="fa-solid fa-chevron-right" onClick={handleNext} id="handleNext"></i>
            </div>
            <div id="allProduct">
                <h3>{productName}</h3>
                <ol id="catalogCollection">
                    {Object.keys(productImages).map((item) => (
                    <li key={item}
                    className={catalogViewed === item ? 'active' : undefined}
                    onClick={() => {
                        setCatalogViewed(item);
                        setImageIndex(0);
                    }}
                    >{item}</li>
                ))}
                </ol>
            </div>
        </div>
    )
}

