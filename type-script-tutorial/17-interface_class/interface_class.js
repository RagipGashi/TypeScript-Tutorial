// Implementing that interface in a class and use its properties
var Time = /** @class */ (function () {
    function Time() {
    }
    Time.prototype.setTime = function (d) {
        this.current = d;
    };
    Time.prototype.getTime = function () {
        console.log(this.current);
        return this.current;
    };
    return Time;
}());
// Instantiate the class
var clock = new Time();
clock.setTime(new Date);
clock.getTime();
