import slugify from 'slugify';
import DOMPurify from 'dompurify';

import avatar from 'src/assets/images/avatar.jpg';
import band from 'src/assets/images/band.jpg';

/**
 * Get the slug
 * @param {String} text The text to get the slug for
 * @return the slug for the text
 */
export const getSlug = (text, id) => {
  const textToSlugify = `${text}-${id}`;

  return slugify(textToSlugify, {
    lower: true,
  });
};

/**
 * Extract the ID from the slug
 * @param {String} slug The text to extract the ID
 * @return the ID
 */
export const getIdFromSlug = (slug) => {
  const index = slug.lastIndexOf('-');

  if (index === -1) {
    return 'NO_ID';
  }

  const id = slug.substring(index + 1).trim();

  return (id.length === 0 ? 'NO_ID' : id);
};

/**
 * Create an array of year's object (last 50 years)
 * @return an array of year's object
 */
export const createYearArray = () => {
  const currentYear = (new Date(Date.now())).getFullYear();
  const yearArray = [];

  for (let year = currentYear; year > currentYear - 50; year -= 1) {
    yearArray.push({
      id: year,
      name: `${year}`,
    });
  }

  return yearArray;
};

/**
 * Get the first object by name in an array of object
 * @param {String} name The name to find
 * @param {Array} array The array to map
 * @return the first object found by name
 */
export const getObjectByName = (name, array) => (
  array.find((item) => item.name.toLowerCase() === name.toLowerCase())
);

/**
 * Check if the object is valid
 * @param {Object} object The object to check
 * @return a boolean to indicate if the object is valid
 */
export const isObjectValid = (object) => (
  object === null || (object !== null && object.name !== undefined && object.id !== undefined)
);

/**
 * Check if the setlist API has more events to display
 * @param {Object} object The object to check
 * @return a boolean to indicate if the setlist API has more events to display
 */
export const checkMoreEventsInSetListApi = (object) => {
  if (object === null) {
    return false;
  }

  const total = Number(object.total);
  const itemsPerPage = Number(object.itemsPerPage);
  const page = Number(object.page);

  return total > itemsPerPage * page;
};

/**
 * Get a unified setlist of the event (first part of the event + the callback)
 * @param {Object} event The event from setlist API
 * @return a setlist (array of object)
 */
export const getUnifiedSetList = (event) => {
  const setList = [];

  if (event !== null) {
    let numb = 1;
    let song = '';

    event.setlist.sets.set.forEach((setElt) => {
      setElt.song.forEach((setSong) => {
        song = setSong.name.trim();
        if (song.length > 0) {
          setList.push({
            numb,
            name: setSong.name,
          });
          numb += 1;
        }
      });
    });
  }

  return setList;
};

/**
 * Get a html content purified (XSS sanitizer)
 * @param {String} htmlContent The htmlContent to purify
 * @return the html content purified
 */
export const createMarkup = (htmlContent) => (
  { __html: DOMPurify.sanitize(htmlContent) }
);

/**
 * Check if the user has participated to this event
 * @param {Array} eventUsers The list of users for this event
 * @param {Object} user The user to check
 * @return a boolean to indicate if the user has participated to this event
 */
export const checkUserParticipatedInEvent = (eventUsers, user) => {
  if (user === null) {
    return false;
  }
  return eventUsers.find((eventUser) => eventUser.id === user.id) !== undefined;
};

/**
 * Check if the user has already published a review to this event
 * @param {Array} eventReviews The list of reviews for this event
 * @param {Object} user The user to check
 * @return a boolean to indicate if the user has already published a review to this event
 */
export const checkUserPublishedAnEventReview = (eventReviews, user) => {
  if (user === null) {
    return false;
  }
  return eventReviews.find((eventReview) => eventReview.user.id === user.id) !== undefined;
};

/**
 * Filter the options list with the text the user has written in the input
 * @param {Array} options The list of options
 * @param {String} user The value of the input
 * @return a filtered list of options
 */
export const getFilteredAutocompletInputOptions = (options, inputValue) => (
  options.filter((option) => {
    const firstLetter = option.name.substring(0, 1);
    // eslint-disable-next-line max-len
    return slugify(option.name.toLowerCase()).startsWith(slugify(inputValue.toLowerCase())) && firstLetter === firstLetter.toUpperCase();
  })
);

/**
 * Get a two digits number
 * @param {Number} number The number
 * @return a two digits number
 */
export const pad = (number) => {
  if (number < 10) {
    return `0${number}`;
  }
  return number;
};

/**
 * Transform events from database to setlist API events
 * @param {Array} events The list of events (from database)
 * @return a setlist API events
 */
export const convertEventsIntoSetlistEvents = (events) => {
  const setlistApiEvents = {
    type: 'setlists',
    itemsPerPage: 20,
    page: 1,
    total: events.length,
    setlist: [],
  };

  events.forEach((event) => {
    const date = new Date(event.date);
    const eventDate = `${pad(date.getDate())}-${pad(date.getMonth() + 1)}-${date.getFullYear()}`;

    setlistApiEvents.setlist.push({
      id: event.setlistId,
      eventDate,
      artist: {
        name: event.band.name,
      },
      venue: {
        name: event.venue,
        city: {
          name: event.city,
          country: {
            name: event.country.name,
          },
        },
      },
    });
  });

  return setlistApiEvents;
};

/**
 * Check if the user is the owner of the review
 * @param {Object} user The user to check
 * @param {Object} review The review
 * @return a boolean to indicate if the user is the owner of the review
 */
export const isUserOwnerReview = (user, review) => (
  user !== null && review !== null && (review.user.id === user.id)
);

/**
 * Change the name of the city
 * @param {String} cityName The name of the city
 * @return a new name for the city
 */
export const changeCityName = (cityName) => {
  switch (cityName) {
    case 'Ville-Lumière':
      return 'Paris';
    default:
      return cityName;
  }
};

/**
 * Get the url of the picture
 * @param {String} path The relative path of the picture
 * @return the url of the picture
 */
export const getAbsolutePicturePath = (path) => (
  `http://ec2-3-80-87-102.compute-1.amazonaws.com/Share-O-Metal/public${path}`
);

/**
 * Get the url of the avatar
 * @param {String} path The relative path of the avatar
 * @return the url of the avatar
 */
export const getAbsoluteAvatarPath = (path) => {
  if (path === null) {
    return avatar;
  }
  return `http://ec2-3-80-87-102.compute-1.amazonaws.com/Share-O-Metal/public${path}`;
};

/**
 * Get a randomized integer number (between 0 and max)
 * @param {Number} max The maximum range of the integer number
 * @return a randomized integer number (between 0 and max)
 */
export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

/**
 * Get a randomized picture
 * @param {Array} picturesArray The list of pictures
 * @return a randomized picture
 */
export const getBandPictureUrl = (picturesArray) => {
  if (picturesArray !== undefined && picturesArray.length > 0) {
    return picturesArray[getRandomInt(picturesArray.length)].url;
  }
  return band;
};

/**
 * Get a string wrapped at the specified length
 * @param {String} text The text to wrap
 * @param {Number} length The specified length
 * @return a string wrapped at the specified length
 */
export const wordWrap = (text, length) => {
  if (text.length <= length) {
    return text;
  }

  const wordWrapText = text.substring(0, length);
  let indexOfSpace = text.lastIndexOf(' ');

  if (indexOfSpace === -1) {
    return `${wordWrapText}...`;
  }

  indexOfSpace = wordWrapText.lastIndexOf(' ');
  if (indexOfSpace === -1) {
    return `${wordWrapText}...`;
  }
  return `${wordWrapText.substring(0, indexOfSpace)}...`;
};

/**
 * Check if the htmlContent is not empty
 * @param {string} user The htmlContent to check
 * @return a boolean to indicate if the htmlContent is not empty
 */
export const isHtmlContentEmpty = (htmlContent) => {
  let textToCheck = htmlContent;
  textToCheck = textToCheck.replace(/<p>/g, '');
  textToCheck = textToCheck.replace(/<\/p>/g, '');
  return textToCheck.trim().length === 0;
};
