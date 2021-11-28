// Your code here
class Polygon {
    constructor(array) {
        this.sides = array; 
    }
    get countSides() {
        return this.sides.length;
    }
    get perimeter() {
        return this.sides.reduce( (a,b) => a+b, 0); 
    }
}

class Triangle extends Polygon {
    get isValid() {
        let a = this.sides[0];
        let b = this.sides[1]; 
        let c = this.sides[2]; 
        if (this.sides.length != 3 || a + b <= c || a + c <= b || b + c <= a)
            return false
        return true;
    }
}

class Square extends Polygon {
    get isValid() {
        let a = this.sides[0];
        let b = this.sides[1]; 
        let c = this.sides[2];
        let d = this.sides[3];
        if (this.sides.length != 4 || a != b || a != c || a != d)
            return false;
        return true; 
    }
    get area() {
        if (this.isValid) {
            return this.sides[0] * this.sides[0]; 
        }
        return 'Not a valid square'; 
    }
}