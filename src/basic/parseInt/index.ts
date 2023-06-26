const parseInt = (str: string) => {
  if (str === "") {
    return NaN; // 返回null，表示空字符串无法转换为数字
  }

  let num = 0;
  let sign = 1;
  let i = 0;

  // 处理符号位
  if (str[i] === "-") {
    sign = -1;
    i++;
  } else if (str[i] === "+") {
    i++;
  }

  // 循环处理每个字符
  while (i < str.length) {
    const charCode: number = str.charCodeAt(i) - 48; // 获取字符的数字值（'0'的ASCII码为48）
    if (charCode >= 0 && charCode <= 9) {
      num = num * 10 + charCode;
      i++;
    } else {
      break; // 遇到非数字字符，停止转换
    }
  }

  return num * sign;
};

export default parseInt;
