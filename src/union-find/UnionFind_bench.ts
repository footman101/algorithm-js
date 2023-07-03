import UnionFind from "./UnionFind.ts";
import QuickFindUF from "./QuickFindUF.ts";
import QuickUnionUF from "./QuickUnionUF.ts";
import WeightedQuickUnionUF from "./WeightedQuickUnionUF.ts";
import PathCompressedQuickUnionUF from "./PathCompressedQuickUnionUF.ts";

const N = 10000;

const data: number[][] = [];
for (let i = 0; i < N; i++) {
  data.push([Math.floor(Math.random() * N), Math.floor(Math.random() * N)]);
}

function ufBench(uf: UnionFind) {
  // console.time("uf");
  data.forEach((pair) => {
    uf.union(pair[0], pair[1]);
  });

  for (let i = 0; i < 2; i++) {
    data.forEach((pair) => {
      uf.find(pair[i % 2]);
    });
  }

  // console.timeEnd("uf");
  // console.log(uf.getMaxDepth());
  // uf.print();
}

// ufBench(new QuickFindUF(N));
// ufBench(new QuickUnionUF(N));
// ufBench(new WeightedQuickUnionUF(N));
// ufBench(new PathCompressedQuickUnionUF(N));

Deno.bench(function quickFindUF() {
  ufBench(new QuickFindUF(N));
});

Deno.bench(function quickUnionUF() {
  ufBench(new QuickUnionUF(N));
});

Deno.bench(function weightedQuickUnion() {
  ufBench(new WeightedQuickUnionUF(N));
});

Deno.bench(function pathCompressedQuickUnion() {
  ufBench(new PathCompressedQuickUnionUF(N));
});
