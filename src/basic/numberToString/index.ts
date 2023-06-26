const numberToString = (num: number): string => {
  if (num === 0) {
    return "0"; // 处理特殊情况：数字为0
  }

  let isNegative = false;
  if (num < 0) {
    isNegative = true;
    num = -num; // 处理负数，将其转换为正数进行处理
  }

  let str = "";
  while (num > 0) {
    const digit = num % 10; // 获取最后一位数字
    str = String.fromCharCode(digit + 48) + str; // 将数字转换为字符并拼接到结果字符串的前面
    num = Math.floor(num / 10); // 去除最后一位数字
  }

  if (isNegative) {
    str = "-" + str; // 处理负数，添加负号
  }

  return str;
};

export default numberToString;
