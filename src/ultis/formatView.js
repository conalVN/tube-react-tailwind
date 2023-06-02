const formatView = (num) => {
  const suff = ["", "N", "Tr", "T"];
  let suff_index = 0;
  while (+num >= 1000 && suff_index < suff.length - 1) {
    num /= 1000;
    suff_index++;
  }
  if (num < 1000) {
    const format = num.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${format} ${suff[suff_index]} lượt xem`;
  } else {
    const format = num.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${format} ${suff[suff_index]} lượt xem`;
  }
};

export default formatView;
