module.exports.getDate = function () {
  let today = new Date();

  let options = {
    month: "short",
  };

  const month = today.toLocaleDateString("en-us", options);

  options = {
    day: "numeric",
  };
  const day = today.toLocaleDateString("en-us", options);
  return `${day}-${month}`;
};
