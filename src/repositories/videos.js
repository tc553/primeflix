import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(videoObject) {
  return fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoObject),
  })
    .then(async (response) => {
      if (response.ok) {
        const responseJson = await response.json();
        return responseJson;
      }

      throw new Error('Unable to create new video.');
    });
}

export default {
  create,
};
