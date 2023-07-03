import UnionFind from "./UnionFind.ts";

class QuickUnionUF extends UnionFind {
  constructor(N: number) {
    super(N);
  }

  find(p: number): number {
    while (p !== this.id[p]) {
      p = this.id[p];
    }

    return p;
  }

  union(p: number, q: number): void {
    const pRoot = this.find(p);
    const qRoot = this.find(q);

    if (pRoot === qRoot) return;

    this.id[pRoot] = qRoot;

    this.count -= 1;
  }
}

export default QuickUnionUF;
