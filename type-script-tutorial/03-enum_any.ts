export {};
/*
///// Working with ENUMS

enum Color {
    Red = 3, // Now we have set Red at the index 3 
    Blue = Red * 2, // Blue is now at Red = 3 * 2 => it is now at the index 6, so Green is 7 now 
    Green
}

let x: Color = Color.Green;

console.log(x);

enum PayLog {
    mon = 125.50,
    tues = 95.66, 
    wed = 0, 
    thurs = 110.33,
    fri = 150.88
}

let paycheck: number = PayLog.mon + PayLog.tues + PayLog.wed + PayLog.thurs + PayLog.fri;

console.log(paycheck);
*/

//// The type ANY
// let x: any;

// x = 'Hello';
// x = 12;
// x = true;

let x: any[]; // Declaring array of type ANY
let y: Array<any>;

x = [1, 2, 3];
y = ["Hello", "World", 12];

console.log(y);
