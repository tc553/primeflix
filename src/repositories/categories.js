import config from '../config';

function getAllWithVideos() {
  const URL_API = `${config.URL_BACKEND}/categories`;
  fetch(URL_API)
    .then(async (response) => {
      const responseJson = await response.json();
    //   setCategories([
    //     ...responseJson,
    //   ]);
    });
  return '';
}

export default {
  getAllWithVideos,
};
