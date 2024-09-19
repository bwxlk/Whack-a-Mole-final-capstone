/* function randNum(min,max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}

} */

/* function setDelay(difficulty) {
    // TODO: Write your code here.
    let timeDelay;
    if(difficulty === 'easy'){
      timeDelay = 1500;
    }else if (difficulty === 'normal'){
      timeDelay = 1000;
    }else if (difficulty === 'hard'){
      const randNum = Math.floor(Math.random()* (1200 - 600 + 1)) + 600;
      timeDelay = randNum;
    }else{
      console.log("error: difficulty not set");
    }
    return timeDelay;
  } */

  
/*   // generates a random number from 0-8
    const index = Math.floor(Math.random() * (8 - 0 + 1));
//   initializes value of last hole
  let lastHole = 0;
    function chooseHole(holes){
        // gets a hole at index of random number
        const hole = holes[index];
        if (hole === lastHole){
            return chooseHole(holes);
        }
        lastHole = hole;
        return hole;
    }
 */
  
  
  
    function main(){
    // const test1 = randNum(1,100);

    // const test2 = setDelay('hard');

    const test3 = chooseHole();

    return {
        // test1
        // test2
        test3
    }
  }
console.log(main());
console.log('holes:',holes);