import CharacterItem from './CharacterItem';

function CharacterList({ characterList }) {
  if (characterList.length > 0) {
    let htmlLi = characterList.map((eachCharacter) => (
      <li key={eachCharacter.id} className='charlist_card'>
        <CharacterItem eachCharacter={eachCharacter} />
      </li>
    ));
    return <ul className='charlist_cards'>{htmlLi}</ul>;
  } else {
    return (
      <p className='charlist_error'>
        Sorry! We couldn't find that character in any known universe!
      </p>
    );
  }
}

export default CharacterList;
