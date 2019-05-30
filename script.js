/*

	TODO: make it so that the user can select other and it will allow you to type in your own percentage in a new input box that pops up only when other is selected
	*/

	function getTip() {
	//get the text from the billamount
	var billAmount = document.getElementById('billAmountID').value;
	//get the text from the number of people
	var numOfPeople = document.getElementById('numOfPeopleID').value;
	//equate for tip per person - (total bill * tip percent as decimal) / number of people - switch case with select element (%)
		//select the percent from dropdown - outstanding, great, average, subpar
		var e = document.getElementById('percentTipSelector');
		var tipPercent = e.options[e.selectedIndex].value;
		//if the user has other selected, take the percentage out of the new input box
		if (tipPercent == "other") {

			var otherPercent = document.getElementById('otherPercentID').value;

			document.getElementsByClassName('tipPerPerson')[0].innerHTML = ((billAmount * (otherPercent/100))/numOfPeople).toFixed(2);

			document.getElementsByClassName('totalPerPerson')[0].innerHTML = ((billAmount * (1+(otherPercent/100)))/numOfPeople).toFixed(2);

		}
		else
		{
			//switch case depending on selection
			switch (tipPercent) {
				case "outstanding":
				document.getElementsByClassName('tipPerPerson')[0].innerHTML = ((billAmount * .25)/numOfPeople).toFixed(2);
				break;
				case "great":
				document.getElementsByClassName('tipPerPerson')[0].innerHTML = ((billAmount * .20)/numOfPeople).toFixed(2);
				break;
				case "average":
				document.getElementsByClassName('tipPerPerson')[0].innerHTML = ((billAmount * .15)/numOfPeople).toFixed(2);
				break;
				case "subpar":
				document.getElementsByClassName('tipPerPerson')[0].innerHTML = ((billAmount * .10)/numOfPeople).toFixed(2);
				break;
			}
	//equate for total bill per person - (total bill * 1.tip percent as decimal) / number of people - switch case with select element (%)

	switch (tipPercent) {
		case "outstanding":
		document.getElementsByClassName('totalPerPerson')[0].innerHTML = ((billAmount * 1.25)/numOfPeople).toFixed(2);
		break;
		case "great":
		document.getElementsByClassName('totalPerPerson')[0].innerHTML = ((billAmount * 1.20)/numOfPeople).toFixed(2);
		break;
		case "average":
		document.getElementsByClassName('totalPerPerson')[0].innerHTML = ((billAmount * 1.15)/numOfPeople).toFixed(2);
		break;
		case "subpar":
		document.getElementsByClassName('totalPerPerson')[0].innerHTML = ((billAmount * 1.10)/numOfPeople).toFixed(2);
		break;
	}
}

}

function isEmpty() {

	//get the text from the billamount
	var billAmount = document.getElementById('billAmountID').value;
	//get the text from the number of people
	var numOfPeople = document.getElementById('numOfPeopleID').value;

	//if neither of these are blank, return true - else return red text in text boxs saying you need to input specific text/number

	if((billAmount === "" || billAmount === "0") || (numOfPeople === "" || numOfPeople == "0"))
	{

		//if the bill amount is blank, put text in the red bill amount asking for input
		if (billAmount === "0" || billAmount === "")
		{
			document.getElementById('noBillError').innerHTML = "*Please Insert Bill Amount";

			//if the person amount is blank, put text in the red person amount asking for input
			if (numOfPeople === "0" || numOfPeople === "")
			{
				document.getElementById('noPeopleError').innerHTML = "*Please Insert Number Of People";
			}
			else
			{
				document.getElementById('noPeopleError').innerHTML = "";
			}
		}
		else
		{
			//make no bill error blank
			document.getElementById('noBillError').innerHTML = "";

			//if the person amount is blank, put text in the red person amount asking for input
			if (numOfPeople === "0" || numOfPeople === "")
			{
				document.getElementById('noPeopleError').innerHTML = "*Please Insert Number Of People";
			}
			else
			{
				return false;
			}
		}


	}
	else
	{
		document.getElementById('noBillError').innerHTML = "";
		document.getElementById('noPeopleError').innerHTML = "";
	}

}

function otherSelect() {
	//if other is selected, add a new input box

	var e = document.getElementById('percentTipSelector');
	var tipPercent = e.options[e.selectedIndex].value;

	if(tipPercent === "other") {
		document.getElementById('otherPercentID').style.display = "block";
	}
	else
	{
		document.getElementById('otherPercentID').style.display = "none";
		
	}
}







