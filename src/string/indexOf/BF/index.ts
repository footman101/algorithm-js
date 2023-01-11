const indexOf: (s: string, t: string) => number = (s, t) => {
  if (s.length < t.length) return -1;

  for (let i = 0; i < s.length - t.length + 1; i++) {
    let isMatch = true;
    for (let j = 0; j < t.length; j++) {
      if (t[j] !== s[i + j]) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) {
      return i;
    }
  }

  return -1;
};

export default indexOf;
