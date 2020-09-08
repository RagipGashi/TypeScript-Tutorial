export {};
// Using an interface to get the date and time
interface TimeInterface {
  current: Date;
  setTime(d: Date);
  getTime();
}

// Implementing that interface in a class and use its properties
class Time implements TimeInterface {
  current: Date;

  setTime(d: Date) {
    this.current = d;
  }

  getTime() {
    console.log(this.current);
    return this.current;
  }

  constructor() {}
}

// Instantiate the class
const clock = new Time();
clock.setTime(new Date());
clock.getTime();
