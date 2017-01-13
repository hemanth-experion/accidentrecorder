$("document").ready(function () {
   
    
    $("#formIdReferenceNumber").tooltip();
   

    $("#formIdAccidentDate").datepicker(
        {
            dateFormat: 'dd-mm-yy',
            maxDate: 0
        });

    $("#saveButton").click(function () {    //works on button click of save
        sendData();
    });

    $("#cancelButton").click(function () {  //works on button click of cancel
        clearAll();
    });

    //automatically convert time
    $("#formIdAccidentTime").change(function (){
        var timeString = $("#formIdAccidentTime").val();
        if(!timeString.includes(":")){
          var pattern =  /^(0[0-9]|1[0-9]|2[0-3])([0-5][0-9])$/;
        }
        else{
          var pattern = /^^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/;
        }
        var timeFormat = timeString.replace(pattern, '$1:$2');
        if(!timeFormat.includes(":")){
            $("#formIdAccidentTime").val("");
        }
        else{
            $("#formIdAccidentTime").val(timeFormat);
        }
    });


    function clearAll() {
        //hide all the error messages
        $('#idError').hide();
        $('#empNameError').hide();
        $('#dobError').hide();
        //reset the form
        $("#empform").trigger('reset');
    }
    //automatically convert date
    $("#formIdAccidentDate").change(function () {

        var dateString = $("#formIdAccidentDate").val();
        dateString = dateString.replace(/-/g,"/");
        var d = new Date(dateString);
        if(d != "Invalid Date"){
            return;
        }
        dateString = dateString.slice(0, 8);
        dateStringTemp = dateString;
        var pattern = /^(\d{2})(\d{2})(\d{4})/;
        var dateYearFirst = dateStringTemp.replace(pattern, '$1/$2/$3');
        d = new Date(dateYearFirst);
        if (d != "Invalid Date") {
            dateString = dateString.replace(/\//g,"-");
            $("#formIdAccidentDate").val(dateString);
        }
        else {
            $("#formIdAccidentDate").val("");
        }

    });

    //works when submit button pressed
    function sendData(){
        var formIdReferenceNumber = $("#formIdReferenceNumber").val();
        var formIdAccidentDate = $("#formIdAccidentDate").val();
        var formIdAccidentTime = $("#formIdAccidentTime").val();
        var formIdAccidentType = $("#formIdAccidentType").val();
        var formIdCity = $("#formIdCity").val();
        var formIdDistrict = $("#formIdDistrict").val();
        var formIdNumberOfVehicles = $("#formIdNumberOfVehicles").val();
        var formIdNumberOfCasualties = $("#formIdNumberOfCasualties").val();
        var formIdReportingOfficer = $("#formIdReportingOfficer").val();
             

        //defining JSON object
        var accidentDetailsJson = { "formIdReferenceNumber": formIdReferenceNumber, "formIdAccidentDate": formIdAccidentDate, "formIdAccidentTime": formIdAccidentTime, "formIdAccidentType": formIdAccidentType , "formIdCity": formIdCity, "formIdDistrict":formIdDistrict, "formIdNumberOfVehicles": formIdNumberOfVehicles , "formIdNumberOfCasualties": formIdNumberOfCasualties, "formIdReportingOfficer": formIdReportingOfficer, "formIdAccidentImages":formIdAccidentImages};
        //convert JSON to string for storing in localStorage
        var  accidentDetailsString= JSON.stringify(accidentDetailsJson);
        //store in local storage
        localStorage.setItem("accidentDetailsStringLocal", accidentDetailsString);
    }
  /*  
        //file upload function
    $("#formIdAccidentImages").change(function () {
        var photo = document.getElementById("formIdAccidentImages");
        // the file is the first element in the files property
        var file = photo.files[0];

        console.log("File name: " + file.fileName);
        console.log("File size: " + file.fileSize);
        });
    */

});
