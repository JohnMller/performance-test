"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MAX_NUMBERS = 5;
var NumbersService = (function () {
    function NumbersService() {
        this.numbers = [[], [], [], [], [], [], [], [], [], []];
        this.randomNumbers = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
            51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
            61, 62, 63, 64, 65, 66, 67, 68, 69, 70
        ];
    }
    NumbersService.prototype.containsNumber = function (number, slide) {
        return this.numbers[slide].indexOf(number) >= 0;
    };
    NumbersService.prototype.addNumber = function (number, slide) {
        if (this.numbers[slide].length < MAX_NUMBERS && !this.containsNumber(number, slide)) {
            this.numbers[slide].push(number);
            this.numbers[slide].sort(function (a, b) { return a - b; });
        }
    };
    NumbersService.prototype.removeNumber = function (number, slide) {
        var index = this.numbers[slide].indexOf(number);
        if (index >= 0) {
            this.numbers[slide].splice(index, 1);
        }
    };
    NumbersService.prototype.clearNumbers = function (slide) {
        this.numbers[slide].length = 0;
    };
    NumbersService.prototype.generateRandomNumbers = function (slide) {
        // Shuffle random numbers array
        for (var i = this.randomNumbers.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.randomNumbers[i];
            this.randomNumbers[i] = this.randomNumbers[j];
            this.randomNumbers[j] = temp;
        }
        this.clearNumbers(slide);
        for (var i = 0; i < MAX_NUMBERS; i++) {
            this.addNumber(this.randomNumbers[i], slide);
        }
    };
    NumbersService.prototype.log = function () {
        console.log(JSON.stringify(this.numbers));
    };
    return NumbersService;
}());
NumbersService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], NumbersService);
exports.NumbersService = NumbersService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibnVtYmVycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLElBQU0sV0FBVyxHQUFXLENBQUMsQ0FBQztBQUc5QixJQUFhLGNBQWM7SUFLdkI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGFBQWEsR0FBRztZQUNqQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzdCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDdEMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUN0QyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO1lBQ3RDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDdEMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFB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QUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUwscUJBQUM7QUFBRCxDQUFDLEFBNURELElBNERDO0FBNURZLGNBQWM7SUFEMUIsaUJBQVUsRUFBRTs7R0FDQSxjQUFjLENBNEQxQjtBQTVEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuY29uc3QgTUFYX05VTUJFUlM6IG51bWJlciA9IDU7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOdW1iZXJzU2VydmljZSB7XG5cbiAgICBwcml2YXRlIG51bWJlcnM6IEFycmF5PEFycmF5PG51bWJlcj4+O1xuICAgIHByaXZhdGUgcmFuZG9tTnVtYmVyczogQXJyYXk8bnVtYmVyPjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5udW1iZXJzID0gW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXTtcbiAgICAgICAgdGhpcy5yYW5kb21OdW1iZXJzID0gW1xuICAgICAgICAgICAgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsXG4gICAgICAgICAgICAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMCxcbiAgICAgICAgICAgIDIxLCAyMiwgMjMsIDI0LCAyNSwgMjYsIDI3LCAyOCwgMjksIDMwLFxuICAgICAgICAgICAgMzEsIDMyLCAzMywgMzQsIDM1LCAzNiwgMzcsIDM4LCAzOSwgNDAsXG4gICAgICAgICAgICA0MSwgNDIsIDQzLCA0NCwgNDUsIDQ2LCA0NywgNDgsIDQ5LCA1MCxcbiAgICAgICAgICAgIDUxLCA1MiwgNTMsIDU0LCA1NSwgNTYsIDU3LCA1OCwgNTksIDYwLFxuICAgICAgICAgICAgNjEsIDYyLCA2MywgNjQsIDY1LCA2NiwgNjcsIDY4LCA2OSwgNzBcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29udGFpbnNOdW1iZXIobnVtYmVyOiBudW1iZXIsIHNsaWRlOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyc1tzbGlkZV0uaW5kZXhPZihudW1iZXIpID49IDA7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZE51bWJlcihudW1iZXI6IG51bWJlciwgc2xpZGU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5udW1iZXJzW3NsaWRlXS5sZW5ndGggPCBNQVhfTlVNQkVSUyAmJiAhdGhpcy5jb250YWluc051bWJlcihudW1iZXIsIHNsaWRlKSkge1xuICAgICAgICAgICAgdGhpcy5udW1iZXJzW3NsaWRlXS5wdXNoKG51bWJlcik7XG4gICAgICAgICAgICB0aGlzLm51bWJlcnNbc2xpZGVdLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVOdW1iZXIobnVtYmVyOiBudW1iZXIsIHNsaWRlOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5udW1iZXJzW3NsaWRlXS5pbmRleE9mKG51bWJlcik7XG5cbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHRoaXMubnVtYmVyc1tzbGlkZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhck51bWJlcnMoc2xpZGU6IG51bWJlcikge1xuICAgICAgICB0aGlzLm51bWJlcnNbc2xpZGVdLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgcHVibGljIGdlbmVyYXRlUmFuZG9tTnVtYmVycyhzbGlkZTogbnVtYmVyKSB7XG4gICAgICAgIC8vIFNodWZmbGUgcmFuZG9tIG51bWJlcnMgYXJyYXlcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMucmFuZG9tTnVtYmVycy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICAgICAgbGV0IHRlbXAgPSB0aGlzLnJhbmRvbU51bWJlcnNbaV07XG4gICAgICAgICAgICB0aGlzLnJhbmRvbU51bWJlcnNbaV0gPSB0aGlzLnJhbmRvbU51bWJlcnNbal07XG4gICAgICAgICAgICB0aGlzLnJhbmRvbU51bWJlcnNbal0gPSB0ZW1wO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jbGVhck51bWJlcnMoc2xpZGUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1BWF9OVU1CRVJTOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYWRkTnVtYmVyKHRoaXMucmFuZG9tTnVtYmVyc1tpXSwgc2xpZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGxvZygpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5udW1iZXJzKSk7XG4gICAgfVxuXG59Il19