import { useState } from "react";

import Chair1 from '../assets/Chairs/hunzinger-platform-rocker.jpg';
import Chair2 from '../assets/Chairs/Military-Mahogany-Dining-Chairs.jpg';
import Chair3 from '../assets/Chairs/Chinese-Folding-Chair.jpg';
import Chair4 from '../assets/Chairs/victorian-five-leg-chair.webp';
import Chair5 from '../assets/Chairs/chippendale-chair.jpeg';

import Sofa1 from '../assets/Sofa/Camel-Back-Sofa.webp';
import Sofa2 from '../assets/Sofa/Swedish-Classical-Sofa.jpeg';
import Sofa3 from '../assets/Sofa/Scalloped-Grotto-Sofa.webp';
import Sofa4 from '../assets/Sofa/victorian-carved-sofa.webp';
import Sofa5 from '../assets/Sofa/library-study-sofa.jpg';

import Bookshelf1 from '../assets/Bookshelves/neoGothic-bookshelf.jpg';
import Bookshelf2 from '../assets/Bookshelves/library-bookshelf.webp';
import Bookshelf3 from '../assets/Bookshelves/irish-flame-bookshelf.webp';
import Bookshelf4 from '../assets/Bookshelves/walnut-bookshelf.jpg';
import Bookshelf5 from '../assets/Bookshelves/dwarf-bookshelf.jpg';

import Windsor1 from '../assets/Windsor/carved-windsor.jpg';
import Windsor2 from '../assets/Windsor/Gothic-Windsor.jpeg';
import Windsor3 from '../assets/Windsor/yewwood-windsor.jpg';
import Windsor4 from '../assets/Windsor/backhoop-windsor.jpg';
import Windsor5 from '../assets/Windsor/hall-windsor.jpg';

import Armoire1 from '../assets/Armoire/french-mirrored-armoire.jpeg';
import Armoire2 from '../assets/Armoire/Distressed-Armoire.webp';
import Armoire3 from '../assets/Armoire/french-armoire.jpg';
import Armoire4 from '../assets/Armoire/black-ornate-armoire.jpeg';
import Armoire5 from '../assets/Armoire/painted-marriage-armoire.jpg';

import Cabinet1 from '../assets/Cabinet/Rococo-Curio-Cabinet.webp';
import Cabinet2 from '../assets/Cabinet/gold-cabbinet.jpg';
import Cabinet3 from '../assets/Cabinet/Victorian-Goncalo-Alves-Cabinet.jpg';
import Cabinet4 from '../assets/Cabinet/Edwardian-Cabinet.jpg';
import Cabinet5 from '../assets/Cabinet/Edwardian-Glass-Display-Cabinet.jpg';

import Table1 from '../assets/Tables/french-demilune-table.webp';
import Table2 from '../assets/Tables/marquetry--table.jpg';
import Table3 from '../assets/Tables/Marquetry-Games-Table.jpg';
import Table4 from '../assets/Tables/victorian-side-table.jpg';
import Table5 from '../assets/Tables/walnut-table.jpg';

import Dresser1 from '../assets/Dresser/eastlake-dresser-with-mirror.webp';
import Dresser2 from '../assets/Dresser/black-dresser-with-mirror.jpg';
import Dresser3 from '../assets/Dresser/cane-and-bamboo-dresser.webp';
import Dresser4 from '../assets/Dresser/eastlake-tall-dresser.avif';
import Dresser5 from '../assets/Dresser/white-drawer.webp';

import Clock1 from '../assets/Clocks/flower-clock.jpg';
import Clock2 from '../assets/Clocks/vintage-clock.webp';
import Clock3 from '../assets/Clocks/mantel-clock.jpg';
import Clock4 from '../assets/Clocks/european-desk-clock.webp';
import Clock5 from '../assets/Clocks/european-pendulum-clock.jpg';

export default function Catalog() {
  const productImages = {
    'Chairs': [
      { name: 'Hunzinger Platform Rocker', image: Chair1 },
      { name: 'Military Mahogany Dining Chairs', image: Chair2 },
      { name: 'Chinese Folding Chair', image: Chair3 },
      { name: 'Victorian Five Leg Chair', image: Chair4 },
      { name: 'Chippendale Chair', image: Chair5 }
    ],
    'Sofas and Settes': [
      { name: 'Camel Back Sofa', image: Sofa1 },
      { name: 'Swedish Classical Sofa', image: Sofa2 },
      { name: 'Scalloped Grotto Sofa', image: Sofa3 },
      { name: 'Victorian Carved Sofa', image: Sofa4 },
      { name: 'Library Study Sofa', image: Sofa5 }
    ],
    'Bookshelves': [
      { name: 'NeoGothic Bookshelf', image: Bookshelf1 },
      { name: 'Library Bookshelf', image: Bookshelf2 },
      { name: 'Irish Flame Bookshelf', image: Bookshelf3 },
      { name: 'Walnut Bookshelf', image: Bookshelf4 },
      { name: 'Dwarf Bookshelf', image: Bookshelf5 }
    ],
    'Windsor Chairs': [
      { name: 'Carved Windsor', image: Windsor1 },
      { name: 'Gothic Windsor', image: Windsor2 },
      { name: 'Yewwood Windsor', image: Windsor3 },
      { name: 'Backhoop Windsor', image: Windsor4 },
      { name: 'Hall Windsor', image: Windsor5 }
    ],
    'Armoires': [
      { name: 'French Mirrored Armoire', image: Armoire1 },
      { name: 'Distressed Armoire', image: Armoire2 },
      { name: 'French Armoire', image: Armoire3 },
      { name: 'Black Ornate Armoire', image: Armoire4 },
      { name: 'Painted Marriage Armoire', image: Armoire5 }
    ],
    'Cabinets': [
      { name: 'Rococo Curio Cabinet', image: Cabinet1 },
      { name: 'Gold Cabinet', image: Cabinet2 },
      { name: 'Victorian Goncalo Alves Cabinet', image: Cabinet3 },
      { name: 'Edwardian Cabinet', image: Cabinet4 },
      { name: 'Edwardian Glass Display Cabinet', image: Cabinet5 }
    ],
    'Tables': [
      { name: 'French Demilune Table', image: Table1 },
      { name: 'Marquetry Table', image: Table2 },
      { name: 'Marquetry Games Table', image: Table3 },
      { name: 'Victorian Side Table', image: Table4 },
      { name: 'Walnut Table', image: Table5 }
    ],
    'Chests and Dressers': [
      { name: 'Eastlake Dresser with Mirror', image: Dresser1 },
      { name: 'Black Dresser with Mirror', image: Dresser2 },
      { name: 'Cane and Bamboo Dresser', image: Dresser3 },
      { name: 'Eastlake Tall Dresser', image: Dresser4 },
      { name: 'White Drawer', image: Dresser5 }
    ],
    'Clocks': [
      { name: 'Flower Clock', image: Clock1 },
      { name: 'Vintage Clock', image: Clock2 },
      { name: 'Mantel Clock', image: Clock3 },
      { name: 'European Desk Clock', image: Clock4 },
      { name: 'European Pendulum Clock', image: Clock5 }
    ]
  };

  const initialCategory = Object.keys(productImages)[5];
  const [catalogViewed, setCatalogViewed] = useState(initialCategory);
  const [imageIndex, setImageIndex] = useState(0);

  const handleNext = () => {
    const length = productImages[catalogViewed].length;
    setImageIndex((prev) => (prev + 1) % length);
  };

  const handlePrev = () => {
    const length = productImages[catalogViewed].length;
    setImageIndex((prev) => (prev - 1 + length) % length);
  };

  const currentItem = productImages[catalogViewed][imageIndex];

  return (
    <div id="justcatalog">
      <div id="catalogImages">
        <i className="fa-solid fa-chevron-left" onClick={handlePrev} id="handlePrev"></i>
        <img src={currentItem.image} alt={currentItem.name} />
        <i className="fa-solid fa-chevron-right" onClick={handleNext} id="handleNext"></i>
      </div>

      <div id="allProduct">
        <h3>{currentItem.name}</h3>
        <ol id="catalogCollection">
          {Object.keys(productImages).map((item) => (
            <li
              key={item}
              className={catalogViewed === item ? 'active' : undefined}
              onClick={() => {
                setCatalogViewed(item);
                setImageIndex(0);
              }}
            >
              {item}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
