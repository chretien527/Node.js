function add(a:number, b:number): number {
    return a + b;
}

function greet(name: string): string {
    return `Hello, ${name}!`;
}       

function calculateArea(radius: number): number {
    return Math.PI * radius * radius;
}   

export { add, greet, calculateArea };