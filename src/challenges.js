// Iteration 1 | Count Repetition
const repeatedWords = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter"
];

const howManyTimes = (arrayOfWords,searchString) =>
  arrayOfWords.filter(word => word === searchString).length



// Iteration 2 | Number Sequence
const createSequence = max => 
  max === 0 ? [] : Array.from(' '.repeat(max+1),(_,index) => index)



// Iteration 3 | Multiply for Each
const numbers = [1, 2, 5, 10, 13, 50];

const multiplyBy = (arrayOfNumbers,multiplicator) => {
  const multipliedArray = [];
  arrayOfNumbers.forEach(element => {
    multipliedArray.push(element * multiplicator)
  });
  return multipliedArray
}




// Iteration 4 | Filter Out
const original = ["cat", "dog", "fish", "bird", "cat", "fish"];
const toRemove = ["cat", "dog"];

const filterOut = (arrayOfStrings, filterItems) => {
  const filtered = arrayOfStrings.filter(element => !filterItems.includes(element))
  return  filtered.length > 0 ? filtered : null
}



// Iteration 5 | Unique Arrays
const duplicateWords = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring"
];

const uniquifyArray = array => {
   const set = new Set()
   array.forEach(element => set.add(element))
   return set.size > 0 ? Array.from(set) : null
  //return array.length > 0 ? array.filter((element,index) => array.indexOf(element) === index ) : null
}



// Bonus: Iteration 6 | Product of Adjacent Numbers
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

const smallMatrix = [ 
  [ 1,  2, 3, 4, 5],
  [ 1, 20, 3, 4, 5],
  [ 1, 20, 3, 4, 5],
  [ 1, 20, 3, 4, 5],
  [ 1,  4, 3, 4, 5]
  ]

  const sixMatrix = [ 
    [ 1,  2, 3, 4, 5, 1],
    [ 1, 20, 3, 4, 5, 1],
    [ 1, 20, 3, 4, 5, 1],
    [ 1, 20, 3, 4, 5, 1],
    [ 1,  4, 3, 4, 5, 1],
    [ 1,  1, 1, 1, 1, 1]
    ]

    const sevenMatrix = [ 
      [ 1,  2, 3, 4, 5, 1, 1],
      [ 1, 20, 3, 4, 5, 1, 1],
      [ 1, 20, 3, 4, 5, 1, 1],
      [ 1, 20, 3, 4, 5, 1, 1],
      [ 1,  4, 3, 4, 5, 1, 1],
      [ 1,  1, 1, 1, 1, 1, 1],
      [ 1,  1, 1, 1, 1, 1, 1]
      ]

function greatestProductOrign(matrix) {
  let greatestProduct = 0;
  let horizontalStartCount = 0;
  let verticalStartCount = 0;
  //start going horizontal
  matrix.forEach((array,index) => {
    //console.log(array)
    for (let i = 0, j = array.length - 3; j > 0; i++,j-- ) {
      //console.log(array[i])
      console.log('row,start:',i , ' ', index)
      horizontalStartCount++
      let product = array.slice(i,i+4).reduce((a,b) => a * b,1)
      //console.log(array.slice(i,i+4))
      if (product > greatestProduct) greatestProduct = product
    }
  })
    //go vertical
    // 1. for each row (= length of an individual array in the matrix)
    // 2. go from pos to next 4 until one will be undefined
    // 3. do for next one

    matrix.forEach((element,index,matrix) => {
      //console.log('row:',index)
      for (let start = 0; start < element.length - 3; start ++) {
        verticalStartCount++
        console.log('row,start:',index , ' ', start)
        //console.log('start position: ', start);
        // console.log('row:',index)
        //  console.log('start position: ', start);
        //  console.log(matrix[start][index])
        //  console.log(matrix[start+1][index])
        //  console.log(matrix[start+2][index])
        //  console.log(matrix[start+3][index])
        //  console.log('\n\n')
        let product = matrix[start][index] * matrix[start+1][index] * matrix[start+2][index] * matrix[start+3][index]

        if (product > greatestProduct) greatestProduct = product
      }
    })

    // go vertical
    matrix.forEach((element,xCoord,matrix) => {
      if (xCoord < matrix.length - 3) {
        for (let yCoord = 0;yCoord < element.length;yCoord++) {
          let foo = 'foo'
        }
      }
    })
  
   console.log('horizontal starts: ',horizontalStartCount)
   console.log('vertical starts: ',verticalStartCount)
  return greatestProduct
}

//console.log(greatestProduct(smallMatrix))
//console.log(greatestProduct(sevenMatrix))
//console.log(greatestProduct(matrix))



//console.log(greatestProduct2(smallMatrix))
//console.log(greatestProduct2(matrix))

const calculatePossibleStarts = (matrixSize,groupSize = 4) => {
  return (2 * (matrixSize * ( matrixSize - (groupSize - 1)))) - (( matrixSize - (groupSize - 1)) * (matrixSize - (groupSize - 1) ))
}

//console.log(calculatePossibleStarts(7,4))





const greatestProduct = (aMatrix) => {
  let possibleStartPositions = calculatePossibleStarts(aMatrix.length)
  console.log(possibleStartPositions)
  //return possibleStartPositions

  let actualLoops = 0

  let biggestProduct = 0

  const product = (...nums) => [...nums].reduce((a,b) => a * b)

  //console.log(product(2,1,2,3,4))
  for (let remainingLoops = aMatrix.length ** 2,row = 0,column = 0,runs = 1, op = false; remainingLoops>0; remainingLoops--,runs++,op = false) {
    if (runs === 1) console.log('remaining loops',remainingLoops)
    console.log('\n\nrun: ', runs)
    
   if (column < aMatrix.length - 3) {
      console.log('could go horizontal\nx,y:',row,column,aMatrix[row][column]);
      actualLoops++
      op = true
      const horizontal = product(aMatrix[row][column],aMatrix[row][column+1],aMatrix[row][column+2],aMatrix[row][column+3])
      console.log('horizontal',horizontal)
      if (horizontal > biggestProduct) biggestProduct = horizontal;
    }
    
    if (row < aMatrix.length - 3) {
      console.log('could go vertical\nx,y:',row,column,aMatrix[row][column]);
      actualLoops++
      op = true
      const vertical = product(aMatrix[row][column],aMatrix[row+1][column],aMatrix[row+2][column],aMatrix[row+3][column])
      console.log('vertical',vertical)
      if (vertical > biggestProduct) biggestProduct = vertical;
    }
    
    if (row >= 3 && column < aMatrix.length - 3) {
      console.log('could go up, right and cross\nx,y:',row,column,aMatrix[row][column]);
      actualLoops++
      op = true
      //console.log('targets',aMatrix[row][column],aMatrix[row-1][column+1],aMatrix[row-2][column+2],aMatrix[row-3][column+3])
      const upAndRight = product(aMatrix[row][column],aMatrix[row-1][column+1],aMatrix[row-2][column+2],aMatrix[row-3][column+3])
      console.log('upAndRight',upAndRight)
      if (upAndRight > biggestProduct) biggestProduct = upAndRight;
    }
    
    if (column < aMatrix.length - 3 && row < aMatrix.length - 3) {
      console.log('could go down, right and cross\nx,y:',row,column,aMatrix[row][column]);
      actualLoops++
      op = true
      //console.log('targets',aMatrix[row][column],aMatrix[row+1][column+1],aMatrix[row+2][column+2],aMatrix[row+3][column+3])
      const downAndRight = product(aMatrix[row][column],aMatrix[row+1][column+1],aMatrix[row+2][column+2],aMatrix[row+3][column+3])
      console.log('downAndRight',downAndRight)
      if (downAndRight > biggestProduct) biggestProduct = downAndRight;
    }
    if (!op) {
      console.log('can do nothing\nx,y:',row,column,aMatrix[row][column]);
    }
    //runs % aMatrix.length === 0 ? console.log('should reset on run',runs,runs % aMatrix.length,'remaining loops',remainingLoops) : console.log('did nothing on run', runs,runs % aMatrix.length)
    if (runs > 1 && runs % aMatrix.length === 0) {
      console.log('\nmodulo on run '+ actualLoops + ' remaining ' + remainingLoops + ' length ' + aMatrix.length)
      row = row + 1;
      column = 0}
    else column = column + 1
  }

  console.log('\nactual loops',actualLoops)

  return biggestProduct
  
}

const nineMatrix = [ 
  [  0,  1,  2,  3,  4,  5,  6,  7,  8], //0
  [ 10, 11, 12, 13, 14, 15, 16, 17, 18], //1
  [ 20, 21, 22, 23, 24, 25, 26, 27, 28], //2
  [ 30, 31, 32, 33, 34, 35, 36, 37, 38], //3
  [ 40, 41, 42, 43, 44, 45, 46, 47, 48], //4
  [ 50, 51, 52, 53, 54, 55, 56, 57, 58], //5
  [ 60, 61, 62, 63, 64, 65, 66, 67, 68], //6
  [ 70, 71, 72, 73, 74, 75, 76, 77, 78], //7
  [ 80, 81, 82, 83, 84, 85, 86, 87, 88]  //8
]

const nineSiglesMatrix = [ 
  [  1,  1,  1,  1,  1,  1,  1,  1,  2], //0
  [  1,  1,  1,  1,  1,  1,  1,  2,  1], //1
  [  1,  1,  1,  1,  1,  1,  1,  1,  1], //2
  [  1,  1,  1,  1,  1,  1,  1,  1,  1], //3
  [  1,  1,  1,  1,  1,  1,  1,  1,  1], //4
  [  1,  1,  1,  1,  1,  1,  1,  1,  1], //5
  [  1,  1,  1,  1,  1,  1,  1,  1,  1], //6
  [  1,  2,  1,  1,  1,  1,  1,  1,  1], //7
  [  1,  1,  1,  1,  1,  1,  1,  1,  1]  //8
]
 //console.log(greatestProduct(nineMatrix))
//console.log(greatestProduct2(nineSiglesMatrix))