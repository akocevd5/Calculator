function inflationCalculator(){
	let inflationRate = document.querySelector('#inflationRate');
	inflationRate = parseFloat(inflationRate.value);
	let money = document.querySelector("#money");
	money = parseFloat(money.value);
	let years = document.querySelector("#years");
	years = parseInt(years.value);

	
		 rezult = money+ (money*(inflationRate / 100));
		 for (i = 0; i < years; i++){
		 	rezult+=rezult*(inflationRate/100);

		 }


	let newElement = document.createElement("div");
	newElement.innerHTML = "За " + years + " години вредноста ќе биде " + rezult.toFixed(2) + " евра";
	let body = document.querySelector(".container");
	body.appendChild(newElement);
}
