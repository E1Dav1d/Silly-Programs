var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage=0;
var HP = 4;
while(slaying){
  if (youHit){
		console.log("You hit the dragon!");
		totalDamage += damageThisRound;
		console.log("Dealed " + damageThisRound + " damage!");
		HP = 4 - totalDamage;
		if(HP>0){
		console.log(HP + " HP remaining!");
		youHit = Math.floor(Math.random() * 2);
		}
		else{
		console.log("You defeated the dragon!");
		slaying = false;
		}
	}
	else{
		console.log("You missed, the dragon defeated you!");
		slaying = false;
	}
}
