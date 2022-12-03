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
  return generateInputList('./day3.txt');
}

const day3 = async () => {
  const list = await listInput();
  console.log(list);
  // Find common character between two compartments
  let priorityValueSum = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] == '') continue;
    let rucksackLength = list[i].length;
    let firstCompartment = list[i].substring(0,(rucksackLength/2));
    let secondCompartment = list[i].substring((rucksackLength / 2),rucksackLength + 1);
    let commonChar = '';
    for (let j = 0; j < firstCompartment.length; j++) {
      if (secondCompartment.indexOf(firstCompartment[j]) != -1) {
        commonChar = firstCompartment[j];
        break;
      }
    }
    
    // Convert character between two compartments into priority value
    if (commonChar == commonChar.toLowerCase()) {
      priorityValueSum += commonChar.charCodeAt(0) - 96;
    } else if (commonChar == commonChar.toUpperCase()) {
      priorityValueSum += commonChar.charCodeAt(0) - 38;
    }
  }
  
  console.log(priorityValueSum)
}

const day3_2 = async () => {
  const list = await listInput();
  console.log(list);
  // Find common character between two compartments
  let priorityValueSum = 0;
  for (let i = 0; i < list.length; i += 3) {
    if (list[i] == '') continue;
    oneList = list[i];
    twoList = list[i+1];
    threeList = list[i+2];
    let commonChar = '';

    for (let j = 0; j < oneList.length; j++) {
      if (twoList.indexOf(oneList[j]) != -1 && threeList.indexOf(oneList[j]) != -1) {
        commonChar = oneList[j];
        break;
      }
    }
    
    // Convert character between two compartments into priority value
    if (commonChar == commonChar.toLowerCase()) {
      priorityValueSum += commonChar.charCodeAt(0) - 96;
    } else if (commonChar == commonChar.toUpperCase()) {
      priorityValueSum += commonChar.charCodeAt(0) - 38;
    }
  }
  
  console.log(priorityValueSum)
}

day3_2();
