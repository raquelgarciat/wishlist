function FilterByName( {searchByName, handleFilter} ) {
    const handleChangeSearchName = (ev) => {
      handleFilter('name', ev.target.value);
    };
  
    return (
      <label className='form_label' htmlFor='search_name'>
        Name:
        <input
          className='form_input'
          type='text'
          name='search_name'
          id='search_name'
          value={searchByName}
          onChange={handleChangeSearchName}
        />
      </label>
    );
  }
  
  export default FilterByName;