import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Routes, Route, Link } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';

import '../styles/main.scss';

import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

const supabase = createClient(
  'https://rtcnwwlfcwswsnhcuzod.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0Y253d2xmY3dzd3NuaGN1em9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAyODgxNjYsImV4cCI6MjAzNTg2NDE2Nn0.d1Src9uf7rpbDLkeHaDxIanU_C9SF7dGJ9TapghtQ2E'
);

function App() {
  // SECCIÓN DE VARIABLES DE ESTADO
  const [characterList, setCharacterList] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data } = await supabase.from('products').select();
    setCharacterList(data);
  }

  const getDataFromApi = () => {
    const cleanData = products.map((objectAPI) => {
      return {
        id: objectAPI.id,
        name: objectAPI.name,
        image: objectAPI.image,
        shop: objectAPI.shop,
        category: objectAPI.category,
        url: objectAPI.producturl,
        itemdesc: objectAPI.itemdesc,
      };
    });
    return cleanData;
  };

  getDataFromApi();

  // OBTENER LA INFORMACIÓN DEL CONTACTO
  const { pathname } = useLocation();

  const routeData = matchPath('/character/:characterId', pathname);

  const characterId = routeData !== null ? routeData.params.characterId : null;

  const characterData = characterList.find(
    (character) => character.id === parseInt(characterId)
  );

  // SECCION HTML
  return (
    <div className='page'>
      <header className='header'>Wishlist</header>
      <main className='main'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <section className='charlist'>
                  <CharacterList characterList={characterList} />
                </section>
              </>
            }
          />
          <Route
            path='/character/:characterId'
            element={<CharacterDetail characterData={characterData} />}
          />
          <Route
            path='*'
            element={
              <div>
                <h2 className='errormsg'>
                  <i className='fa-solid fa-skull-crossbones'></i> Error 404:
                  page not found
                </h2>
                <Link className='detail_back' to='/'>
                  <i className='fa-solid fa-circle-left'></i> Go back
                </Link>
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
