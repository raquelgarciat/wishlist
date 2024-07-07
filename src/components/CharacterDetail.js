import { Link } from 'react-router-dom';
import alien from '../images/alien.png';

function CharacterDetail({ characterData }) {
  if (characterData) {
    return (
      <div className='detail'>
        <section className='card'>
          <img
            className='card_image'
            src={characterData.image}
            alt={`${characterData.name}`}
          />
          <div>
            <h2 className='card_title'>{characterData.name}</h2>
            <ul className='card_data'>
              <li className='card_data-li'>
                <span className='datatitle'>Status: </span>
                {characterData.status === 'Alive' ? (
                  <i className="fa-solid fa-heart-circle-check"></i>
                ) : (
                  <i className='fa-solid fa-skull-crossbones'></i>
                )}
              </li>
              <li className='card_data-li'>
                <span className='datatitle'>Species: </span>
                {characterData.species === 'Human' ? (
                  <i className='fa-solid fa-person'></i>
                ) : (
                  <img src={alien} alt='alien' className='detail_alien' />
                )}
              </li>
              <li className='card_data-li'>
                <span className='datatitle'>Origin: </span>
                {characterData.planet}
              </li>
              <li className='card_data-li'>
                <span className='datatitle'>Episodes: </span>
                {characterData.episodes}
              </li>
            </ul>
          </div>
        </section>
        <Link className='detail_back' to='/'>
          <i className='fa-solid fa-circle-left'></i> Go back
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <p className='detail_errormsg'>
          Sorry! We couldn't find that character in any known universe!
        </p>
        <Link className='detail_back' to='/'>
          <i className='fa-solid fa-circle-left'></i> Go back
        </Link>
      </div>
    );
  }
}

export default CharacterDetail;
