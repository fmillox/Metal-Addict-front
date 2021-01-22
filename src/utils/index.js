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
  object === null || (object !== null && object.name !== undefined && object.id !== undefined)
);

export const checkMoreEventsInSetListApi = (object) => {
  if (object === null) {
    return false;
  }

  const total = Number(object.total);
  const itemsPerPage = Number(object.itemsPerPage);
  const page = Number(object.page);

  return total > itemsPerPage * page;
};
