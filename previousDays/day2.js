const fs = require('fs').promises;

const assertEqual = (expected, actual) => {
  console.log(expected === actual);
}

const generateInputList = async (txtFile) => {
  try {
    let list = [];
    const data = await fs.readFile(txtFile, 'utf8')
    list = data.split('\r\n')
    return list;
  } catch (err) {
    console.log(err);
    return;
  }
}

const listInput = () => {  
  return generateInputList('./day2.txt');
}

const day2 = async () => {
  const list = await listInput();
  console.log(list);

  let totalScore = 0;
  for (let i = 0; i < list.length; i++) {
    let theirMove = list[i][0];
    let yourMove = list[i][2];
    //14662
    if (yourMove == "X") {
      totalScore += 1;
      if (theirMove == "A") totalScore += 3; // you rock, they rock
      else if (theirMove == "B") totalScore += 0; // you rock, they paper
      else if (theirMove == "C") totalScore += 6; // you rock, they scissors
    } else if (yourMove == "Y") {
      totalScore += 2;
      if (theirMove == "A") totalScore += 6; // you paper, they rock
      else if (theirMove == "B") totalScore += 3; // you paper, they paper
      else if (theirMove == "C") totalScore += 0; // you paper, they scissors
    } else if (yourMove == "Z") {
      totalScore += 3;
      if (theirMove == "A") totalScore += 0; // you scissors, they rock
      else if (theirMove == "B") totalScore += 6; // you scissors, they paper
      else if (theirMove == "C") totalScore += 3; // you scissors, they scissors
    }
  }
  console.log(totalScore);
}

const day2_2 = async () => {
  const list = await listInput();
  console.log(list);

  let totalScore = 0;
  for (let i = 0; i < list.length; i++) {
    let theirMove = list[i][0];
    let yourStrategy = list[i][2];
    //14662
    if (yourStrategy == "X") { // you lose
      totalScore += 0;
      if (theirMove == "A") totalScore += 3 // you lose by picking SCISSORS against their ROCK
      else if (theirMove == "B") totalScore += 1 // you lose by picking ROCK against their PAPER
      else if (theirMove == "C") totalScore += 2 // you lose by picking PAPER against their SCISSORS 
    } else if (yourStrategy == "Y") { // you draw
      totalScore += 3;
      if (theirMove == "A") totalScore += 1 // you draw by picking ROCK against their ROCK
      else if (theirMove == "B") totalScore += 2 // you draw by picking PAPER against their PAPER
      else if (theirMove == "C") totalScore += 3 // you draw by picking SCISSORS against their SCISSORS 
    } else if (yourStrategy == "Z") { // you win
      totalScore += 6;
      if (theirMove == "A") totalScore += 2 // you win by picking PAPER against their ROCK
      else if (theirMove == "B") totalScore += 3 // you win by picking SCISSORS against their PAPER
      else if (theirMove == "C") totalScore += 1 // you win by picking ROCK against their SCISSORS 
    }
  }
  console.log(totalScore);
}


day2_2();
