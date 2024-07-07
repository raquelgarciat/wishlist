const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((objectAPI) => {
        return {
          id: objectAPI.id,
          name: objectAPI.name,
          image: objectAPI.image,
          status: objectAPI.status,
          species: objectAPI.species,
          episodes: objectAPI.episode.length,
          planet: objectAPI.origin.name,
        };
      });

      return cleanData;
    });
};

export default getDataFromApi;
