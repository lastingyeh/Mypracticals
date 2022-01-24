var num = 50;

function logNumber() {
	console.log(num);
	var num = 100;

    // why undefined ?
    // var num;
    // console.log(num);
    // num = 100;
}

logNumber();
