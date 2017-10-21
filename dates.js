function leapYear(year){
	if(year % 4 === 0){
		if(year % 100 === 0){
			if(year % 400 === 0){
				return true;
			}else{
			   return false;
			}
		}else{
			return true;
		}
	}
}


function getDaysInMonths(year,month){
	if(month == 1 || month  == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
		return 31;
	}else if(month == 2){
		if(leapYear(year) === true){
			return 29;
		}else{
			return 28;
		}
	}else{
		return 30;
	}
}


function dayAfter(year,month,day){
	if(day < getDaysInMonths(year,month)){
		return [year, month, day +1];
	}else{
		if(month < 12){
			return [year, month + 1, 1];
		}else{
			return [year + 1,1,1];
		}
	}
}

function daysBefore(year1,month1,day1,year2,month2,day2){
	if(year1 < year2){
		return true;
	}else if(year1 == year2){
		if(month1 < month2){
			return true;
		}else if(month1 == month2){
			if(day1 < day2){
				return true;
			}else{
				return false;
			}
		}else{
			return false;
		}
	}else{
		return false;
	}
}

function daysInBetweenDates(year1,month1,day1,year2,month2,day2){
	
		var days = 0;
		var arr = [];
		while(daysBefore(year1,month1,day1,year2,month2,day2) === true){
			arr = dayAfter(year1,month1,day1);
			year1 = arr[0];
			month1 = arr[1];
			day1 = arr[2];
			days = days + 1;
		}
		return days;
	
}


function getCurrentDate(){
	var d = new Date();
	var year = d.getFullYear();
	var m = d.getMonth();
	var month = m + 1;
	var day = d.getDate();
	return [year,month,day];
}

function getStartTimeVal(){
	var yearVal1 = document.getElementById("yearBox1").value;
	year = parseInt(yearVal1);
	var mnthVal1 = document.getElementById("mnthBox1").value;
	month = parseInt(mnthVal1);
	var dayVal1 = document.getElementById("dayBox1").value;
	day = parseInt(dayVal1);
	return [year,month,day];
}

function getEndTimeVal(){
	var yrVal = document.getElementById("yearBox2").value;
	year = parseInt(yrVal);
	var mnthVal = document.getElementById("mnthBox2").value;
	month = parseInt(mnthVal);
	var dayVal = document.getElementById("dayBox2").value;
	day = parseInt(dayVal);
	return [year,month,day];
}

function enterBtn(){
	document.getElementById("enterButton").style.backgroundColor = "green";
	document.getElementById("result").innerHTML = "Days: "+ daysInBetweenDates(getStartTimeVal()[0],getStartTimeVal()[1],getStartTimeVal()[2],getEndTimeVal()[0],getEndTimeVal()[1],getEndTimeVal()[2]);
	
}
 

function time(){
	
document.getElementById("timeBox").innerHTML = "Current date: "
+ getCurrentDate()[0] + " " + getCurrentDate()[1] + " " + getCurrentDate()[2];

}

setInterval(time,1000);


