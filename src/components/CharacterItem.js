import { Link } from 'react-router-dom';

function CharacterItem({ eachCharacter }) {
  return (
    <Link to={'/character/' + eachCharacter.id}>
      <img
        className='charlist_card-img'
        src={eachCharacter.image}
        alt={`${eachCharacter.name}`}
      />
      <h3 className='charlist_card-name'>{eachCharacter.name}</h3>
    </Link>
  );
}

export default CharacterItem;
