import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categories`;
const URL_CATEGORIES_WITH_VIDEOS = `${config.URL_BACKEND}/categories?_embed=videos`;

function getAll() {
  return fetch(URL_CATEGORIES)
    .then(async (response) => {
      if (response.ok) {
        const responseJson = await response.json();
        return responseJson;
      }

      throw new Error("Cant' fetch data from server!");
    });
}

function getAllWithVideos() {
  return fetch(URL_CATEGORIES_WITH_VIDEOS)
    .then(async (response) => {
      if (response.ok) {
        const responseJson = await response.json();
        return responseJson;
      }

      throw new Error('Unable to fetch data from server!');
    });
}

function create(categoryObject) {
  return fetch(URL_CATEGORIES, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(categoryObject),
  })
    .then(async (response) => {
      if (response.ok) {
        const responseJson = await response.json();
        return responseJson;
      }

      throw new Error('Unable to create new category.');
    });
}

export default {
  getAll,
  getAllWithVideos,
  create,
};
