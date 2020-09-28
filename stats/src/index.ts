import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();
let manUnitedWins = 0;
//enum: for programmer: know what meaning you are typing
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}
// MatchResult.Draw === 'D'
// const printMatchResult =() =>{
//     if(match[5] === 'H'){
//         return MatchResult.HomeWin
//     }
// }
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}
