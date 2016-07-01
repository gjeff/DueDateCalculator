/* ----------------------------------------------------
 *
 * Global Variables
 *
 *
 --------------------------------------------------------- */
var gestationPeriod = 283;    // Default the gestation period to Cows


$(document).ready(function () {

    $('#conceptionDate').on('hide', function(){
    	debugger;
        $('#conceptionDateDiv').hide();
    });

});

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


