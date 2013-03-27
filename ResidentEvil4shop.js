var user = prompt ("What are ya buyin? Bullets, Guns or Upgrades?").toLowerCase();
switch (user){
  case "bullets":
		var age = prompt ("How old are you?").toLowerCase();
		var license = prompt ("You got a license? yes or no").toLowerCase();
		if (age>=18 || license === 'yes'){
		console.log("I got armor piercing, hollow points and shredders.");
		}
		else{
			console.log("Sorry can't sell to ya.");
		}
		break;
	case "guns":
		var age = prompt ("How old are you?").toLowerCase();
		var license = prompt ("You got a license? yes or no").toLowerCase();
		if (age>=21 && license === 'yes'){
		console.log("I got pistols, assault rifles and RPGs.");
		}
		else{
			console.log("Sorry can't sell to ya.");
		}
		break;
	case "upgrades":
		var age = prompt ("How old are you?").toLowerCase();
		var license = prompt ("You got a license? yes or no").toLowerCase();
		if (age>=16 || license === 'yes'){
		console.log("Looking to make stuff better huh?");
		}
		else{
			console.log("Sorry can't sell to ya.");
		}
		break;
	default:
		console.log("Sorry don't got that.");
		break;
}
