abstract class UnionFind {
  protected id: number[];
  protected count: number;

  constructor(N: number) {
    this.count = N;
    this.id = [];
    for (let i = 0; i < N; i++) {
      this.id.push(i);
    }
  }

  getCount() {
    return this.count;
  }

  getMaxDepth() {
    let result = 0;
    for (let i = 0; i < this.id.length; i++) {
      let depth = 0;

      let p = i;
      while (p !== this.id[p]) {
        p = this.id[p];
        depth += 1;
      }

      result = Math.max(result, depth);
    }

    return result;
  }

  connected(p: number, q: number) {
    return this.find(p) === this.find(q);
  }

  print() {
    console.log(this.id);
  }

  abstract find(p: number): number;

  abstract union(p: number, q: number): void;
}

export default UnionFind;
