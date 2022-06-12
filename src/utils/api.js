export const fetchData = async (path) => {
  const res = await fetch(path, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
};
