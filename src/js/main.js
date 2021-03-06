/* ----------------------------------------------------
 *
 * Global Variables
 *
 *
 --------------------------------------------------------- */
var gestationPeriod = 283;    // Default the gestation period to Cows


$(document).ready(function () {


});

function initializeValues() {

	var today = new Date;
	$("#pregCheckDate").val(formatDate(today));
	selectAnimal(gestationPeriod);
	updateDueDate();
}

function updateDueDate() {

	var dueDate = new Date;
	var conceptionDate = new Date;
	pregCheckDate = new Date($("#pregCheckDate").val());

	dueDate.setTime(pregCheckDate.getTime() + ((gestationPeriod - $("#daysBred").val())*(24*60*60*1000) ));
	conceptionDate.setTime(pregCheckDate.getTime() - ($("#daysBred").val()*(24*60*60*1000)));

	$("#dueDate").val(formatDate(dueDate));
	$("#conceptionDate").val(formatDate(conceptionDate));
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

function openConceptionDate(){

	$('#conceptionDate').datepicker()
    .on("hide", function(e) {
    	debugger;
        $("#conceptionDateDiv").hide();
    });

	$("#conceptionDateDiv").show();
	$('#conceptionDate').datepicker("show");
}

function setConceptionDate(){
	var _MS_PER_DAY = 1000 * 60 * 60 * 24;
	var conceptionDate = new Date($("#conceptionDate").val());
	var pregCheckDate = new Date($("#pregCheckDate").val());

    var daysBred = Math.floor((pregCheckDate - conceptionDate) / _MS_PER_DAY); 
    $("#daysBred").val(daysBred);
    updateDueDate();
	
	$('#conceptionDate').datepicker("hide");
	$("#conceptionDateDiv").hide();
}


