function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
		document.getElementById("shownum").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=num;

		document.getElementById("shownum").innerText=num;
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}

//Downn animation






function c() {
	const img = document.getElementById('up');
	img.style.top = `90px`;
}







function moveup7(){
	const img = document.getElementById('up');
	img.style.top = `${img.offsetTop + 7}px`;
}


function moveup8() {
	const img = document.getElementById('up');
	img.style.top = `${img.offsetTop + 8}px`;
}

function moveup6() {
	const img = document.getElementById('up');
	img.style.top = `${img.offsetTop + 6}px`;
}

function moveup9() {
	const img = document.getElementById('up');
	img.style.top = `${img.offsetTop + 9}px`;
}

function moveup5() {
	const img = document.getElementById('up');
	img.style.top = `${img.offsetTop + 5}px`;
}


function moveup4() {
	const img = document.getElementById('up');
	img.style.top = `${img.offsetTop + 4}px`;
}

function moveup3() {
	const img = document.getElementById('up');
	img.style.top = `${img.offsetTop + 3}px`;
}

function moveup2() {
	const img = document.getElementById('up');
	img.style.top = `${img.offsetTop + 2}px`;
}


function moveup1() {
	const img = document.getElementById('up');
	img.style.top = `${img.offsetTop + 1}px`;
}



//end



var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ 
			output=output+this.id;
			printOutput(output);
		}
	});
} 