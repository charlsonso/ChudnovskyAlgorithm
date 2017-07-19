function fac(n){
	var r = 1;
	for (i=2; i<=n; i++){
		r=r*i;
	}
	return r;
}

function calcPi(n){

	var digits_per_iteration = 14.1816474627254776555;	
	var iterations = (n/digits_per_iteration)+1;

	var a = 13591409;
	var b = 545140134;
	var c = -640320;
	var numerator, denominator;
	var sum = 0;

	for(k=0;k<iterations;k++){

		// (6k)! * (13591409 + 545140134k)
		numerator = fac(6*k)*(a+(b*k));

		// (3k)! * (k!)^3 * -640320^(3k)
		denominator = fac(3*k)
		denominator = denominator * Math.pow(fac(k),3);
		denominator = denominator * Math.pow(c,(3*k));
		sum +=(numerator/denominator);
		// pi = ( sqrt(10005) * 426880 ) / sum
		
	}
	return (Math.sqrt(10005)*426880/sum).toFixed(n);
}

function showPi(){
	var output = document.getElementById('output');
	var start = Date.now();
	var j = calcPi(document.getElementById('input').value);
	var timeTake = Date.now() - start;
	console.log(timeTake);
	output.innerHTML = j
}