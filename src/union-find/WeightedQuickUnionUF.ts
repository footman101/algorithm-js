import UnionFind from "./UnionFind.ts";

class WeightedQuickUnionUF extends UnionFind {
  private sz: number[];

  constructor(N: number) {
    super(N);

    this.sz = [];
    for (let i = 0; i < N; i++) {
      this.sz.push(i);
    }
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

    if (this.sz[pRoot] < this.sz[qRoot]) {
      this.id[pRoot] = qRoot;
      this.sz[qRoot] += this.sz[pRoot];
    } else {
      this.id[qRoot] = pRoot;
      this.sz[pRoot] += this.sz[qRoot];
    }

    this.count -= 1;
  }
}

export default WeightedQuickUnionUF;
