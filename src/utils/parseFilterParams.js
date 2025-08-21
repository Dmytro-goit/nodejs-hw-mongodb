const parseContactType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;

  const validTypes = ['personal', 'work'];
  if (validTypes.includes(type)) {
    return type;
  }
};

const parseIsFavourite = (isFavourite) => {
  if (typeof isFavourite !== 'string') return;

  if (isFavourite.toLowerCase() === 'true') return true;
  if (isFavourite.toLowerCase() === 'false') return false;
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;

  const parsedType = parseContactType(type);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    contactType: parsedType,
    isFavourite: parsedIsFavourite,
  };
};
