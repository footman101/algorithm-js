import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import isPrime from "./index.ts";

Deno.test("isPrime", function addTest() {
  assertEquals(isPrime(4), false);
  assertEquals(isPrime(37), true);
  assertEquals(isPrime(100), false);
});
