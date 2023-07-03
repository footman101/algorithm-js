import UnionFind from "./UnionFind.ts";

class QuickFindUF extends UnionFind {
  constructor(N: number) {
    super(N);
  }

  find(p: number) {
    return this.id[p];
  }

  union(p: number, q: number) {
    const pId = this.find(p);
    const qId = this.find(q);

    if (pId === qId) return;
    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] === pId) {
        this.id[i] = qId;
      }
    }

    this.count -= 1;
  }
}

export default QuickFindUF;
