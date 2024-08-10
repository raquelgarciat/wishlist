import { Link } from 'react-router-dom';

function CharacterDetail({ characterData }) {
  if (characterData) {
    return (
      <div className="detail">
        <section className="card">
          <img
            className="card_image"
            src={characterData.image}
            alt={`${characterData.name}`}
          />
          <div>
            <h2 className="card_title">{characterData.name}</h2>
            <div className="bar"></div>
            <ul className="card_data">
              <li className="card_data-li">
                <p className="datatitle">DESCRIPTION</p>
                <p>{characterData.itemdesc}</p>
              </li>
              <li className="card_data-li">
                <p className="datatitle">CATEGORIES </p>
                <p>{characterData.category}</p>
              </li>

              <li className="card_data-li">
                <p className="datatitle">WHERE TO BUY</p>
                <a href={characterData.producturl} target='blank'>{characterData.shop}</a>
              </li>
            </ul>
          </div>
        </section>
        <Link className="detail_back" to="/">
          <i className="fa-solid fa-circle-left"></i> Go back
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <p className="detail_errormsg">
          Sorry! We couldn't find that character in any known universe!
        </p>
        <Link className="detail_back" to="/">
          <i className="fa-solid fa-circle-left"></i> Go back
        </Link>
      </div>
    );
  }
}

export default CharacterDetail;
