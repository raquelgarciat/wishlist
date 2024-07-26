import { Link } from 'react-router-dom';

function CharacterList({ characterList }) {
  if (characterList.length > 0) {
    let htmlLi = characterList.map((eachCharacter) => (
      <Link
        li
        to={'/character/' + eachCharacter.id}
        className='charlist_card'
        key={eachCharacter.id}
      >
        <div
          className='charlist_card-img'
          style={{ backgroundImage: `url(${eachCharacter.image})` }}
        ></div>
        <h3 className='charlist_card-name'>{eachCharacter.name}</h3>
      </Link>
    ));
    return <ul className='charlist_cards'>{htmlLi}</ul>;
  } else {
    return <p className='charlist_error'>Loading item list...</p>;
  }
}

export default CharacterList;
