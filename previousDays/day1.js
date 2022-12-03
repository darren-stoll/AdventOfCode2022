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
  return generateInputList('./day1.txt');
}

const day1 = async () => {
  const list = await listInput();
  console.log(list);
  let biggest = 0;
  let sumCals = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] == '') {
      if (sumCals > biggest) biggest = sumCals;
      sumCals = 0;
      continue;
    }
    let cals = parseInt(list[i]);
    sumCals += cals;
  }
  console.log(biggest);
}

const day1_2 = async () => {
  const list = await listInput();
  console.log(list);
  let sumList = [];
  let sumCals = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] == '') {
      sumList.push(sumCals);
      sumCals = 0;
      continue;
    }
    let cals = parseInt(list[i]);
    sumCals += cals;
  }
  sumList.sort((a,b) => (a > b ? -1 : 1));
  console.log(sumList);
  console.log(sumList[0]+sumList[1]+sumList[2])
}

day1_2()
