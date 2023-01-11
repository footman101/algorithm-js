const hash = (
  s: string,
  start: number,
  end: number,
) => {
  let hash = 0;
  for (let i = start; i <= end; i++) {
    hash = hash + s.charCodeAt(i);
  }

  return hash;
};

// Rabin-Karp
const indexOf: (s: string, t: string) => number = (s, t) => {
  if (t === "") return 0;
  if (s === "") return -1;
  if (s.length < t.length) return -1;

  const tHash = hash(t, 0, t.length - 1);
  let curHash = hash(s, 0, t.length - 1);

  for (let i = 0; i < s.length - t.length + 1; i++) {
    if (curHash === tHash) {
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

    curHash = curHash - s.charCodeAt(i) + s.charCodeAt(i + t.length);
  }

  return -1;
};

export default indexOf;
