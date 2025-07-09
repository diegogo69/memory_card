const getData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
};

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const getPokeList = async (limit, offset) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  console.log(url);
  const pokeQuery = await getData(url);

  return pokeQuery.results;
};

export { getData, shuffleArray, getPokeList };
