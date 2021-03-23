import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'refinitiv';

  _input: any;
  selectedOption = 'isPrime';
  result: boolean;

  calculateResult() {
    if (this._input) {
      let num = this._input;
      if (num === '-') {
        return this._input = 1;
      } else if (num % 1 !== 0) {
        num = Math.round(num);
      // } else if (num < 0) {
      //   num = 1;
      };
      this._input = num;

      if (this.selectedOption === 'isPrime') {
        for (let i = 2; i < num; i++) {
          if (num % i === 0) {
            return this.result = false;
          };
        };
        return this.result = num > 1;
      } else {
        num = +num;
        if (num === 0) return this.result = true;
        let fibSeq = [0, 1], fibSeqL: number;
        for (let i = 1; i <= num; i = (fibSeq[fibSeqL - 1] + fibSeq[fibSeqL])) {
          fibSeq.push(i);
          fibSeqL = fibSeq.length - 1;
        }
        return this.result = fibSeq[fibSeqL] === num;
      };
    } else return this.result = false;
  };

};
