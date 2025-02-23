
const classifyTriangle = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions', () => {
    /*
    Input Conditions:
    - C1: 1 ≤ a ≤ 200
    - C2: 1 ≤ b ≤ 200
    - C3: 1 ≤ c ≤ 200
    - C4: a < b + c
    - C5: b < a + c
    - C6: c < a + b
    
    Classification:
    - Equilateral: a == b == c
    - Isosceles: Two sides are equal
    - Scalene: All sides are different
    - Not a Triangle: If C4, C5, or C6 fails
    */
    
    // 1. Equivalence Class Partitioning (ECP) Test - Valid Equilateral Triangle
    test('1. should classify an Equilateral triangle', () => {
        expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
    });

    // 2. Boundary Value Testing (BVT) - Invalid input (0 side length)
    test('2. should return error for invalid inputs', () => {
        expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    // 3. Equivalence Class Partitioning (ECP) Test - Not a Triangle condition
    test('3. should return "Not a Triangle" for invalid triangle sides', () => {
        expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
    });

    // Additional Tests

    // 4. BVT - Upper boundary values
    test('4. should return error for side length exceeding 200', () => {
        expect(classifyTriangle(201, 100, 100)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    // 5. BVT - Lower boundary values
    test('5. should return error for side length below 1', () => {
        expect(classifyTriangle(-1, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    // 6. ECP - Valid Isosceles Triangle
    test('6. should classify an Isosceles triangle', () => {
        expect(classifyTriangle(10, 10, 5)).toBe('Isosceles');
    });

    // 7. ECP - Valid Scalene Triangle
    test('7. should classify a Scalene triangle', () => {
        expect(classifyTriangle(7, 9, 11)).toBe('Scalene');
    });

    // 8. BVT - Minimum valid triangle (1, 1, 1)
    test('8. should classify the smallest valid Equilateral triangle', () => {
        expect(classifyTriangle(1, 1, 1)).toBe('Equilateral');
    });

    // 9. ECP - Nearly degenerate triangle
    test('9. should return "Not a Triangle" when one side equals the sum of the other two', () => {
        expect(classifyTriangle(5, 10, 15)).toBe('Not a Triangle');
    });

    // 10. BVT - Edge case where sides sum up to almost forming a triangle
    test('10. should classify a barely valid Scalene triangle', () => {
        expect(classifyTriangle(8, 9, 16)).toBe('Not a Triangle');
    });

    // 11. BVT - Large valid triangle
    test('11. should classify a large Scalene triangle', () => {
        expect(classifyTriangle(100, 120, 150)).toBe('Scalene');
    });

    // 12. BVT - Large Equilateral triangle
    test('12. should classify a large Equilateral triangle', () => {
        expect(classifyTriangle(200, 200, 200)).toBe('Equilateral');
    });

    // 13. BVT - Maximum allowed Isosceles triangle
    test('13. should classify a maximum size Isosceles triangle', () => {
        expect(classifyTriangle(200, 200, 199)).toBe('Isosceles');
    });

    // 14. ECP - Random valid triangle
    test('14. should classify a general Scalene triangle', () => {
        expect(classifyTriangle(13, 14, 15)).toBe('Scalene');
    });

    // 15. ECP - Random Isosceles triangle
    test('15. should classify a general Isosceles triangle', () => {
        expect(classifyTriangle(25, 25, 40)).toBe('Isosceles');
    });

    // 16. BVT - Just above the invalid triangle case
    test('16. should classify a near-degenerate triangle', () => {
        expect(classifyTriangle(10, 10, 19)).toBe('Isosceles');
    });

    // 17. BVT - Maximum boundary invalid case
    test('17. should return error for an invalid high boundary input', () => {
        expect(classifyTriangle(201, 201, 201)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    // 18. ECP - Extreme triangle sides
    test('18. should classify an extreme Scalene triangle', () => {
        expect(classifyTriangle(199, 150, 100)).toBe('Scalene');
    });

    // 19. BVT - Nearly valid triangle
    test('19. should return "Not a Triangle" for almost valid input', () => {
        expect(classifyTriangle(10, 20, 30)).toBe('Not a Triangle');
    });

    // 20. BVT - Large invalid triangle
    test('20. should return "Not a Triangle" for large invalid input', () => {
        expect(classifyTriangle(150, 200, 50)).toBe('Not a Triangle');
    });

    // 21. ECP - Large near-equilateral triangle
    test('21. should classify a nearly Equilateral triangle', () => {
        expect(classifyTriangle(199, 199, 198)).toBe('Isosceles');
    });

    // 22. ECP - Smallest Isosceles triangle
    test('22. should classify the smallest possible Isosceles triangle', () => {
        expect(classifyTriangle(2, 2, 1)).toBe('Isosceles');
    });
});

  