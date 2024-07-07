// IMPORTS

import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';

import getDataFromApi from '../services/api';

import '../styles/main.scss';

import logo from '../images/logo.png';

import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';

// FUNCIÓN DEL COMPONENTE

function App() {
  // SECCIÓN DE VARIABLES DE ESTADO
  const [characterList, setCharacterList] = useState([]);
  const [searchByName, setSearchByName] = useState('');
  const [searchBySpecies, setSearchBySpecies] = useState('');

  // SECCIÓN DE CÓDIGO CUANDO CARGA LA PÁGINA
  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setCharacterList(cleanData);
    });
  }, []);

  // SECCIÓN DE HANDLERS/EVENTOS
  const handleFilter = (varName, varValue) => {
    if (varName === 'name') {
      setSearchByName(varValue);
    } else if (varName === 'species') {
      setSearchBySpecies(varValue);
    }
  };

  // SECCIÓN FUNCIONES DE PINTADO
  const filteredCharacters = characterList
    .filter((eachCharacter) =>
      eachCharacter.name.toLowerCase().includes(searchByName.toLowerCase())
    )
    .filter((eachCharacter) =>
      eachCharacter.species
        .toLowerCase()
        .includes(searchBySpecies.toLowerCase())
    );
  const species = characterList.map((eachCharacter) => eachCharacter.species);

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
      <header className='header'>
        <img src={logo} alt='logo' className='header_logo' />
      </header>
      <main className='main'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Filters
                  searchByName={searchByName}
                  searchBySpecies={searchBySpecies}
                  handleFilter={handleFilter}
                  species={species}
                />
                <section className='charlist'>
                  <CharacterList characterList={filteredCharacters} />
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
                <i className="fa-solid fa-skull-crossbones"></i> Error 404: page not
                found
              </h2>
              <Link className='detail_back' to='/'>
              <i className='fa-solid fa-circle-left'></i> Go back
            </Link></div>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

// EXPORT DEL COMPONENTE

export default App;
