
function Primeornot(num){
    let factor=0;
    for(let i=1;i<=n/4; i++){
      if(num%i==0){
        factor++;
      }
    }
    if(factor==1){
          console.log("Prime");
          } else {
          console.log("Not a Prime");
          }
   }
     Primeornot(19);