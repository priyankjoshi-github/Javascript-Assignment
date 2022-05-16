function coinFlip() {
      return(Math.random() < 0.7) ? 'Heads' : 'Tails';
 }
 var howManyTimes=500;
  var countHeads=0;
  for (var i=0; i<howManyTimes;i++){
      if (coinFlip()==='Heads'){
        countHeads++;
      }
    }
    

  alert("Heads appear "+(countHeads/howManyTimes) +"% of the time");