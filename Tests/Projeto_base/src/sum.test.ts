import { sum } from "./sum";

describe("Sum", () => {
  //Agrupar testes
  let sumResult: number;

  beforeAll(() => {
    sumResult = 10;
    console.log("Executado antes dos testes!");
  });

  afterAll(() => {
    sumResult = 0;
    console.log("Executado depois dos testes!");
  });

  //is e test são a mesma coisa o que muda é que it é mais semântico
  it("shold do sum of 3 + 7 must be 10", () => {
    const result = sum(3, 7);

    expect(result).toBe(10);
  });

  test("sum of 2 + 7 muste be 9", () => {
    const result = sum(2, 7);

    expect(result).toBe(9);
  });
});
