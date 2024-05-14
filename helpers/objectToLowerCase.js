function objectToLowerCase(obj) {
  const entries = Object.entries(obj);

  return Object.fromEntries(
    entries.map(([key, value]) => {
      return [key.toLowerCase(), value.toLowerCase()];
    })
  );
}

module.exports = objectToLowerCase;
