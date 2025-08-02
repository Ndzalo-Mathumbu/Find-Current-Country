'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
/* const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //   countriesContainer.style.opacity = 1;
}; */

/* const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}; */
// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

/////////// AJAX CALL: XMLHttpRequest ///////////
/* const countryData = function (country) {
  const request = new XMLHttpRequest()
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `<article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages.at(0).name}</p>
        <p class="country__row"><span>💰</span>${data.currencies.at(0).name}</p>
      </div>
    </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
  request.send();
};

// Example usage:
// countryData('usa');
// countryData('china');
// countryData('ghana');
// countryData('egypt');

/////////// CALLBACK HELL ///////////

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}M</p>
      <p class="country__row"><span>🗣️</span>${data.languages.at(0).name}</p>
      <p class="country__row"><span>💰</span>${data.currencies.at(0).name}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const countryAndNeighbour = function (country) {
  // AJAX call for first country
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

    // Get neighbour
    const neighbour = data.borders?.[0];
    if (!neighbour) return;

    // AJAX call for neighbour country
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
    request2.send();
  });
  request.send();
};

countryAndNeighbour('canada');
 */

//////////  Consuming Promises  //////////

/* const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}M</p>
      <p class="country__row"><span>🗣️</span>${data.languages.at(0).name}</p>
      <p class="country__row"><span>💰</span>${data.currencies.at(0).name}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  //   countriesContainer.style.opacity = 1;
};

const getCountryData = country => {
  // country1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => {
      console.log(response);
    })
    .then(([data]) => {
      renderCountry(data);
      const neighbour = data.borders?.[0];
      if (!neighbour) return;
      // country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err}💥`);
      renderError(`SOMETHING WENT WRONG${err.message}. Try again`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', function () {
  getCountryData('mozacascqce');
});
 */

/* const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}M</p>
      <p class="country__row"><span>🗣️</span>${data.languages.at(0).name}</p>
      <p class="country__row"><span>💰</span>${data.currencies.at(0).name}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};


const getCountryData = country => {
  // country1
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(([data]) => {
      renderCountry(data);
      const neighbour = data.borders?.[0];
      if (!neighbour) throw new Error('No neighbour found');
      // country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => {
      if (!data) return;
      renderCountry(data, 'neighbour');
    })
    .catch(err => {
      console.error(`${err} 💥`);
      renderError(`Something went wrong: ${err.message}. Try again!`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', function () {
  getCountryData('australia');
});
 */

/////////////// Coding Challenge #1 ///////////////

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.
The AJAX call will be done to a URL with this format: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
/* 
const whereAmI = function (lat, lng) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  )
    .then(response => {
      const data = response.json();
      data.then(response => {
        console.log(`You are in ${response.city}, ${response.countryName}`);
        const html = `<article class="country ${response.countryName}">
        <img class="country__img" src="${response.flag}" />
        <div class="country__data">
        <h3 class="country__name">${response.name}</h3>
        <h4 class="country__region">${response.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +response.population / 1000000
        ).toFixed(1)}M</p>
        <p class="country__row"><span>🗣️</span>${
          response.languages.at(0).name
        }</p>
        <p class="country__row"><span>💰</span>${
          response.currencies.at(0).name
        }</p>
        </div>
        </article>`;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
      });
    })
    .catch(err => console.error('Something went wrong:', err.message));
};

btn.addEventListener('click', function () {
  whereAmI(52.508, 13.381);
});
 */

// //////////  EVENT LOOP  //////////

// console.log('TEST START');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//   /*  for (let i = 0; i < 10; i++) {
//     // console.log(i);
//   } */
//   console.log(res);
// });
// console.log('Test end');

// //////////     BUILDING A PROMISE     /////////

// const doItPromise = new Promise(function (resolve, reject) {
//   console.log('happening');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('YOU WIN');
//     } else {
//       reject(new Error('YOU LOST'));
//     }
//   }, 2000);
// });

// doItPromise.then(res => console.log(res)).catch(err => console.error(err));

// const wait = function (seconds) {
//   //promisifying setTimeout
//   const somePromise = new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
//   return somePromise;
// };

// wait(3)
//   .then(() => {
//     console.log('i waited for 3 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('i waited for 1 second'));

//////////     Promisifying the Geolocation API     //////////

/* const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}M</p>
      <p class="country__row"><span>🗣️</span>${data.languages.at(0).name}</p>
      <p class="country__row"><span>💰</span>${data.currencies.at(0).name}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};


const getCountryData = country => {
  // country1
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(([data]) => {
      renderCountry(data);
      const neighbour = data.borders?.[0];
      if (!neighbour) throw new Error('No neighbour found');
      // country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => {
      if (!data) return;
      renderCountry(data, 'neighbour');
    })
    .catch(err => {
      console.error(`${err} 💥`);
      renderError(`Something went wrong: ${err.message}. Try again!`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', function () {
  getCountryData('australia');
});
 */

// const renderCountry = function (data, className = '') {
//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getMyPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
//   /* navigator.geolocation.getCurrentPosition(
//       position => resolve(position),
//       err => reject(new Error(err))
//     ); */
// };
// getMyPosition().then(position => console.log(position));

// const whereAmI = function () {
//   getMyPosition()
//     .then(pos => {
//       const { latitude, longitude } = pos.coords;
//       return fetch(
//         `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
//       );
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.countryCode}`);

//       return fetch(`https://restcountries.com/v2/name/${data.countryName}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥`));
// };
// btn.addEventListener('click', function () {
//   whereAmI();
// });

//////////     CHALLENGE NUMBER 2     //////////

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

/* const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const imgAttribute = document.createElement('img');
    imgAttribute.src = `${imgPath}`;
    imgAttribute.addEventListener('load', function () {
      const imgClass = document.querySelector('.images');
      imgClass.append(this);
      resolve(this);
    });
    imgAttribute.addEventListener('error', function () {
      reject(new Error('Something went wrong'));
    });
  });
};

createImage('img-1.png').then(() => {
  const wait = function (seconds) {
    //promisifying setTimeout
    const somePromise = new Promise(function (resolve) {
      setTimeout(resolve, seconds * 1000);
    });
    return somePromise;
  };
  wait(2)
    .then(() => {
      const imgAttribute = document.createElement('img');
      imgAttribute.src = `${imgPath}`;
      imgAttribute.classList.display = 'none';
      return wait(1);
    })
    .then(() => {
      const imgAttribute = document.createElement('img');
      imgAttribute.src = `${imgPath}`;
      imgAttribute.addEventListener('load', function () {
        const imgClass = document.querySelector('.images');
        imgClass.append(this);
      });
    })
    .catch(err =>
      console.error(new Error(err, 'Could not not load and image'))
    );
});
 */

/* const wait = function (seconds) {
  //promisifying setTimeout
  const somePromise = new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
  return somePromise;
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(this);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};
let currentImg;
createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('img 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('Img/img-2.jpg');
  })
  .then(() => {
    currentImg.style.display = 'none';
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));
 */

//////////     CONSUMING PROMISES WITH Async/Await     //////////

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}M</p>
      <p class="country__row"><span>🗣️</span>${data.languages.at(0).name}</p>
      <p class="country__row"><span>💰</span>${data.currencies.at(0).name}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
const getMyPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  /* navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(new Error(err))
    ); */
};

const whatIsMyLocation = async function () {
  try {
    const position = await getMyPosition();
    const { latitude, longitude } = position.coords;

    const positionData = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
    );
    if (!positionData.ok) throw new Error('Problem with location data');
    const posData = await positionData.json();

    const res = await fetch(
      `https://restcountries.com/v2/name/${posData.countryName}`
    );
    const [data] = await res.json();

    // console.log(data);
    // console.log(posData);
    renderCountry(data);

    return `you are in ${posData.city}, ${posData.countryName}`;
  } catch (err) {
    console.error(err);
    renderError(`Something went wrong ${err.message}`);

    //reject promise returned from async function
    throw err;
  }
};
/* console.log('1: Will get location');
// const city = whatIsMyLocation();
// console.log(city);
whatIsMyLocation()
  .then(city => console.log(city))
  .catch(err => console.error(`Wrong things are happening ${err.message}`))
  .finally(() => {
    console.log('3: finished getting location');
  }); */

(async function () {
  try {
    console.log('1: Will get location');
    const hereIsMyLocation = await whatIsMyLocation();
    console.log(hereIsMyLocation);
  } catch (err) {
    console.error(`Wrong things are happening ${err.message}`);
    throw err;
  }
  console.log('3: finished getting location');
})();

//////////     RUNNING PROMISES IN PARALLEL     //////////
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const get3countries = async function (country1, country2, country3) {
  try {
    /* const [data1] = await getJSON(
      `https://restcountries.com/v2/name/${country1}`
    );
    const [data2] = await getJSON(
      `https://restcountries.com/v2/name/${country2}`
    );
    const [data3] = await getJSON(
      `https://restcountries.com/v2/name/${country3}`
    ); */

    /////   combinator   ////
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${country1}`),
      getJSON(`https://restcountries.com/v2/name/${country2}`),
      getJSON(`https://restcountries.com/v2/name/${country3}`),
    ]);
    console.log(data.map(data => data.at(0).capital));
    // console.log([data1.capital, data2.capital, data3.capital]);
  } catch (err) {
    console.error(err);
  }
};
get3countries('brazil', 'south afric', 'namibia');

//////////     Promise.race     /////////
(async function () {
  try {
    const response = await Promise.race([
      getJSON(`https://restcountries.com/v2/name/brazil`),
      getJSON(`https://restcountries.com/v2/name/egypt`),
      getJSON(`https://restcountries.com/v2/name/usa`),
    ]);
    // console.log(response[0]);
  } catch (err) {
    console.error(err);
  }
})();

const timeOut = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error('Your are too slow'));
    }, sec * 1000);
  });
};

(async function () {
  try {
    const testTimeout = await Promise.race([
      getJSON(`https://restcountries.com/v2/name/egypt`),
      timeOut(1),
      getJSON(`https://restcountries.com/v2/name/usa`),
    ]);
    // console.log(testTimeout.at(0));
  } catch (err) {
    console.error(err);
  }
})();

// //////////     Promise.allSettled     /////////

// (async function () {
//   try {
//     const allSettled = await Promise.allSettled([
//       Promise.resolve('Success'),
//       Promise.reject('Failed'),
//       Promise.resolve('Another Success'),
//     ]);
//     console.log(allSettled);
//   } catch (err) {
//     console.error(err);
//   }
// })();

// //////////     Promise.any     /////////

// (async function () {
//   try {
//     const allSettled = await Promise.any([
//       Promise.resolve('Success'),
//       Promise.reject('Failed'),
//       Promise.resolve('Another Success'),
//     ]);
//     console.log(allSettled);
//   } catch (err) {
//     console.error(err);
//   }
// })();

//////////     CHALLENGE 3     /////////

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

/* const wait = function (seconds) {
  //promisifying setTimeout
  const somePromise = new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
  return somePromise;
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(this);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};
let currentImg;
createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('img 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('Img/img-2.jpg');
  })
  .then(() => {
    currentImg.style.display = 'none';
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));
 */

/* const wait = function (seconds) {
  //promisifying setTimeout
  const somePromise = new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
  return somePromise;
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      // this.classList.add('parallel');
      resolve(this);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;
const loadNPause = async function () {
  try {
    const imgArgument = await createImage('img/img-1.jpg');
    currentImg = imgArgument;
    console.log('img 1 loaded');
    const mustWait = await wait(2);
    mustWait;
    currentImg.style.display = 'none';
    createImage('Img/img-2.jpg');
    console.log('img 2 loaded');
    mustWait;
    currentImg.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};
// loadNPause();

const loadAll = async function (img1, img2, img3) {
  try {
    const imgArr = await Promise.all([img1, img2, img3]);
    const imgs = imgArr.map(img => {
      console.log(img);
      return createImage(img);
    });
    const [pic1, pic2, pic3] = imgs;
    const picture1 = await pic1;
    const picture2 = await pic2;
    const picture3 = await pic3;
    [picture1, picture2, picture3].forEach(photo =>
      photo.classList.add('parallel')
    );
    console.log(pic1, pic2, pic3);
  } catch (err) {
    console.error(err);
  }
};

loadAll('img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg');
 */
