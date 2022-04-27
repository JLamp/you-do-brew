export const getTablespoonsFromWeight = (grams) => {
  const tablespoons = grams / 5;
  console.log(grams % 1);
  return tablespoons;
};

export const formatTime = (timer) => {
  const getSeconds = `0${timer % 60}`.slice(-2);
  const minutes = `${Math.floor(timer / 60)}`;
  const getMinutes = `${minutes % 60}`.slice(-2);
  // const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

  return `${getMinutes}:${getSeconds}`;
};
