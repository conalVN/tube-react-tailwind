const formatSubscribers = (subs) => {
  const suff = ["", "K", "M"];
  let suff_index = 0;
  while (subs >= 1000 && suff_index < suff.length - 1) {
    subs /= 1000;
    suff_index++;
  }
  if (subs < 1000) {
    const format = subs.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${format}${suff[suff_index]} subscribers`;
  } else {
    const format = subs.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${format}${suff[suff_index]} subscribers`;
  }
};

export default formatSubscribers;
