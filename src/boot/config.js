import { boot } from "quasar/wrappers";

export default boot(({ app }) => {
  app.config.globalProperties.$project = "morpheus";
  app.config.globalProperties.$sleep = (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };
  app.config.globalProperties.$splitArray = (array, count, isBalanced) => {
    if (count < 2)
      return [array];

    let len = array.length,
      out = [],
      i = 0,
      size;

    if (len % count === 0) {
      size = Math.floor(len / count);
      while (i < len) {
        out.push(array.slice(i, i += size));
      }
    } else if (isBalanced) {
      while (i < len) {
        size = Math.ceil((len - i) / count--);
        out.push(array.slice(i, i += size));
      }
    } else {
      count--;
      size = Math.floor(len / count);
      if (len % size === 0)
        size--;
      while (i < size * count) {
        out.push(array.slice(i, i += size));
      }
      out.push(array.slice(size * count));
    }
    return out;
  };
});
