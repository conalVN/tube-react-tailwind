const formatSubscribers = (subs) => {
  const suff = ["", "N", "Tr", "T"];
  let suff_index = 0;
  while (subs >= 1000 && suff_index < suff.length - 1) {
    subs /= 1000;
    suff_index++;
  }
  if (subs < 1000) {
    const format = subs.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${format}${suff[suff_index]} người đăng ký`;
  } else {
    const format = subs.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${format}${suff[suff_index]} người đăng ký`;
  }
};

export default formatSubscribers;
