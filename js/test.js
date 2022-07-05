
document.querySelector('#knopka').onclick = function(){
	const name1 = document.getElementById('input1').value;
	const name2 = document.getElementById('input2').value;
	if ( (name1.toLowerCase() == 'влад' && name2.toLowerCase() == 'яна') || (name2.toLowerCase() == 'влад' && name1.toLowerCase() == 'яна') ) {
		document.querySelector('.output').innerHTML = `У Влада та Яни сумісність: 100%.`;
	}
	else if (name1 == '' || name2 == '') document.querySelector('.output').innerHTML = `Спробуйте ще раз.`;
	else if((name1.toLowerCase() == 'даня' && name2.toLowerCase() == 'яна') || (name2.toLowerCase() == 'даня' && name1.toLowerCase() == 'яна') ) {
		document.querySelector('.output').innerHTML = `У Дані та Яни сумісність: 50%.`;
	}
	else{
		let result = Math.floor(1 + Math.random() * (100 - 1 + 1));
		document.querySelector('.output').innerHTML = `У ${name1} та ${name2} сумісність: ${result}%.`;
	}
	document.getElementById('input1').value = '';
	document.getElementById('input2').value = '';
}





























