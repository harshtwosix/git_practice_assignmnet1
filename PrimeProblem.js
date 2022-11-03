
function Primeornot(number){
    let factor=0;
    for(let i=1;i<=number/4; i++){
      if(number%i==0){
        factor++;
      }
    }
    if(factor==1){
          console.log("It is Prime");
          } else {
          console.log("Not a Prime");
          }
   }
     Primeornot(19);