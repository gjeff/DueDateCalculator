/* ----------------------------------------------------
 *
 * Global Variables
 *
 *
 --------------------------------------------------------- */
var gestationPeriod = 283;    // Default the gestation period to Cows

function initializeValues() {

	var today = new Date;
	$("#pregCheckDate").val(formatDate(today));
	selectAnimal(gestationPeriod);
	updateDueDate();
}

function updateDueDate() {

	var dueDate = new Date;
	pregCheckDate = new Date($("#pregCheckDate").val());

	dueDate.setDate(pregCheckDate.getDate() + (gestationPeriod - $("#daysBred").val()));

	$("#dueDate").val(formatDate(dueDate));
}

function formatDate(inDate) {
	return (inDate.getMonth() + 1) + '/' + inDate.getDate() + '/' + inDate.getFullYear();
}

function selectAnimal(newNumber) {
	gestationPeriod = newNumber;
	$("#gestationPeriod").val(newNumber);
	$("#gestationPeriodLabel").text("Gestation Period - " + gestationPeriod + " Days");
	updateDueDate();
}

function updateGestationPeriod(){
	selectAnimal($("#gestationPeriod").val());	
}
