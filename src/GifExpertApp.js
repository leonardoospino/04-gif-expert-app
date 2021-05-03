import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  // const categories = [
  //   'One Punch',
  //   'Samurai X',
  //   'Dragon Ball'
  // ];

  const [categories, setCategories] = useState([
    'One Punch',
    'Samurai X',
    'Dragon Ball'
  ]);

  // const handleAdd = () => {
  //   setCategories(cats => [...cats, 'Hunter']);
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory />
      <hr />

      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {
          categories.map((category) => {
            return <li key={category}>{ category }</li>;
          })
        }
      </ol>
    </>
  );
};