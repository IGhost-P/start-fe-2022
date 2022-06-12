export const fetchData = async (path) => {
  const res = await fetch("./classData.json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(res);
  return await res.json();
};
