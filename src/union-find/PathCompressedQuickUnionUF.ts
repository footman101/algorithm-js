import QuickUnionUF from "./QuickUnionUF.ts";

class PathCompressedQuickUnionUF extends QuickUnionUF {
  constructor(N: number) {
    super(N);
  }

  find(p: number): number {
    const path = [];
    while (p !== this.id[p]) {
      path.push(p);
      p = this.id[p];
    }

    path.forEach((s) => {
      this.id[s] = p;
    });

    return p;
  }
}

export default PathCompressedQuickUnionUF;
