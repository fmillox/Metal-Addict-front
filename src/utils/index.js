export const sortByName = (array) => {
  array.sort((a, b) => a.name.localeCompare(b.name));
};

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

export const getObjectByName = (name, array) => (
  array.find((item) => item.name.toLowerCase() === name.toLowerCase())
);

export const isObjectValid = (object) => (
  (object !== null && object.name !== undefined && object.id !== undefined) || object === null
);
