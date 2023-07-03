import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import QuickFindUF from "./QuickFindUF.ts";
import QuickUnionUF from "./QuickUnionUF.ts";
import WeightedQuickUnionUF from "./WeightedQuickUnionUF.ts";
import PathCompressedQuickUnionUF from "./PathCompressedQuickUnionUF.ts";

Deno.test("UnionFind - QuickFindUF", function addTest() {
  const uf = new QuickFindUF(10);
  assertEquals(uf.getCount(), 10);

  uf.union(1, 2);
  uf.union(9, 2);
  uf.union(1, 5);

  assertEquals(uf.connected(2, 5), true);
  assertEquals(uf.connected(1, 8), false);
  assertEquals(uf.getCount(), 7);
});

Deno.test("UnionFind - QuickUnionUF", function addTest() {
  const uf = new QuickUnionUF(10);
  assertEquals(uf.getCount(), 10);

  uf.union(1, 2);
  uf.union(9, 2);
  uf.union(1, 5);

  assertEquals(uf.connected(2, 5), true);
  assertEquals(uf.connected(1, 8), false);
  assertEquals(uf.getCount(), 7);
});

Deno.test("UnionFind - WeightedQuickUnionUF", function addTest() {
  const uf = new WeightedQuickUnionUF(10);
  assertEquals(uf.getCount(), 10);

  uf.union(1, 2);
  uf.union(9, 2);
  uf.union(1, 5);

  assertEquals(uf.connected(2, 5), true);
  assertEquals(uf.connected(1, 8), false);
  assertEquals(uf.getCount(), 7);
});

Deno.test("UnionFind - PathCompressedQuickUnionUF", function addTest() {
  const uf = new PathCompressedQuickUnionUF(10);
  assertEquals(uf.getCount(), 10);

  uf.union(1, 2);
  uf.union(9, 2);
  uf.union(1, 5);

  assertEquals(uf.connected(2, 5), true);
  assertEquals(uf.connected(1, 8), false);
  assertEquals(uf.getCount(), 7);
});
