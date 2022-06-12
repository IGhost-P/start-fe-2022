
  export const tagFilter = (tableData, tag) => {
    switch (tag) {
      case "모두":
        return tableData;
      case "도움링크":
        return tableData.filter((item) => item.links.length > 0);
      case "git":
        return tableData.filter((item) => item.gitUrl);
      case "최신순":
        return tableData.sort((a, b) => b.data - a.data);
      default:
        return tableData;
    }
  };