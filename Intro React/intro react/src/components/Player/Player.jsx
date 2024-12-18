const score = 70;

export function Player() {
    let result = "";
    if(score > 50){
        result = "vainqueur : " + score 
    }
    else{
        result = "perdant : " + score
    }
    return (
      <>
        <h3>{result}</h3>
      </>
    )
  }