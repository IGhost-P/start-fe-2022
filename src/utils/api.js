export const fetchData = async (path) => {
  const res = await fetch(path);
  const data = await res.json();
  return await JSON.parse(data);
};
