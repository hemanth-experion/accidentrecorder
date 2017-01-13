$("document").ready(function () {

    //initializing dialog box
    $("#dialog").dialog({autoOpen: false,});
    //parse data from json
    var accidentDetailsString = localStorage.getItem("accidentDetailsStringLocal");
    var accidentDetailsJson  = JSON.parse(accidentDetailsString);
    $("#formLabelReferenceNumber").append(" "+accidentDetailsJson.formIdReferenceNumber);
    $("#formLabelAccidentDate").append(" "+accidentDetailsJson.formIdAccidentDate);
    $("#formLabelAccidentTime").append(" "+accidentDetailsJson.formIdAccidentTime);
    $("#formLabelAccidentType").append(" "+accidentDetailsJson.formIdAccidentType);
    $("#formLabelCity").append(" "+accidentDetailsJson.formIdCity);
    $("#formLabelDistrict").append(" "+accidentDetailsJson.formIdDistrict);
    $("#formLabelNumberOfVehicles").append(" "+accidentDetailsJson.formIdNumberOfVehicles);
    $("#formLabelNumberOfCasualties").append(" "+accidentDetailsJson.formIdNumberOfCasualties);
    $("#formLabelReportingOfficer").append(" "+accidentDetailsJson.formIdReportingOfficer);
    console.log(accidentDetailsJson.formIdAccidentImages);
    $("#editButton").click(function () {    //works on button click of edit
        goBack();
    });
    $("#confirmButton").click(function () {    //works on button click of confirm
       $("#dialog").dialog("open");
    });

    

    
    function goBack(){
        window.history.back();
    }
});
