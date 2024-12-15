// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false 

// This use the triangle inequality theorem describes the relationship between the three sides of a triangle. According to this theorem, for any triangle, the sum of lengths of two sides is always greater than the third side.


function isTriangle(a,b,c)
{
   return a < b + c && b < a + c && c < a + b
}