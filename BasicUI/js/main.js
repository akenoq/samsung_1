function fun1(){
	var elem = document.getElementById('my1');
	var s = '';
	
	var flagElem = document.getElementById('flag1');
	var flag = parseInt(flagElem.innerHTML);
	
	if (flag === 0){
		s += '<img src="./images/tizen_32.png" alt="img">';
		flagElem.innerHTML = 1;
	}
	else {
		s = '';
		flagElem.innerHTML = 0;
	}
	
	elem.innerHTML = s;
}

function fun2(){
	var elem = document.getElementById('my2');
	var s = '';
	
	var flagElem = document.getElementById('flag2');
	var flag = parseInt(flagElem.innerHTML);
	
	if (flag === 0){
		s += 'Разрешение экрана: <b>'+screen.width+'×'+screen.height+'px.</b>';
		flagElem.innerHTML = 1;
	}
	else {
		s = '';
		flagElem.innerHTML = 0;
	}
	
	elem.innerHTML = s;
}