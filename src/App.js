// https://www.youtube.com/watch?v=ly3m6mv5qvg
// 1 hr 29' 00 ''
import React, { useState } from 'react';

import Menu from './Menu';
import Categories from './Categories';
import items from './data';



function App() {
	const [ menuItems, setMenuItems ] = useState(items);
  const [ categories, setCategories ] = useState([]);
  console.log(menuItems);

	
  return (
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories />
      <Menu items={menuItems} />
    </section>
  );
}



export default App;


