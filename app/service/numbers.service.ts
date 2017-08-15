import {Injectable} from "@angular/core";

const MAX_NUMBERS: number = 5;

@Injectable()
export class NumbersService {

    private numbers: Array<Array<number>>;
    private randomNumbers: Array<number>;

    public constructor() {
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

    public containsNumber(number: number, slide: number) {
        return this.numbers[slide].indexOf(number) >= 0;
    }

    public addNumber(number: number, slide: number) {
        if (this.numbers[slide].length < MAX_NUMBERS && !this.containsNumber(number, slide)) {
            this.numbers[slide].push(number);
            this.numbers[slide].sort((a, b) => a - b);
        }
    }

    public removeNumber(number: number, slide: number) {
        let index = this.numbers[slide].indexOf(number);

        if (index >= 0) {
            this.numbers[slide].splice(index, 1);
        }
    }

    public clearNumbers(slide: number) {
        this.numbers[slide].length = 0;
    }

    public generateRandomNumbers(slide: number) {
        // Shuffle random numbers array
        for (let i = this.randomNumbers.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.randomNumbers[i];
            this.randomNumbers[i] = this.randomNumbers[j];
            this.randomNumbers[j] = temp;
        }

        this.clearNumbers(slide);
        for (let i = 0; i < MAX_NUMBERS; i++) {
            this.addNumber(this.randomNumbers[i], slide);
        }
    }

    public log() {
        console.log(JSON.stringify(this.numbers));
    }

}