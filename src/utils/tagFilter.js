export const tagFilter = (tableData, tag) => {
  const temp = [...tableData];
  switch (tag) {
    case "모두":
      return tableData;
    case "도움링크":
      return tableData.filter((item) => item.links.length > 0);
    case "git":
      return tableData.filter((item) => item.gitUrl);
    case "최신순":
      return temp.sort((a, b) => new Date(b.date) - new Date(a.date));
    default:
      return tableData;
  }
};
