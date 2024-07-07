function FilterBySpecies( {searchBySpecies, handleFilter} ) {
    const handleChangeSearchSpecies = (ev) => {
      handleFilter('species', ev.target.value);
    };
  
    return (
      <label className='form_label' htmlFor='search_species'>
        Species:
        <input
          className='form_input'
          type='text'
          name='search_species'
          id='search_species'
          value={searchBySpecies}
          onChange={handleChangeSearchSpecies}
        />
      </label>
    );
  }
  
  export default FilterBySpecies;