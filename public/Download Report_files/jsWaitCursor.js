function ClientSideClick() {
    // Client side validation
    if (typeof (Page_ClientValidate) == 'function') {
        if (Page_ClientValidate() == false)
        { return false; }
    }
    document.getElementById("graybackground1-div").style.display = "block";
    document.getElementById("message1-div").style.display = "block";
    return true;
}


function ClientSideClick1() {
    // Client side validation
    if (typeof (Page_ClientValidate) == 'function') {
        if (Page_ClientValidate() == false)
        { return false; }
    }

    //make sure the button is not of type "submit" but "button"
    if (myButton.getAttribute('type') == 'button') {
        // disable the button
        myButton.disabled = true;
        myButton.className = "btn-inactive";
        myButton.value = "processing...";

        //display gray background and message
        document.getElementById("graybackground-div").style.display = "block";
        document.getElementById("message-div").style.display = "block";
    }
    return true;
}


function Cancelpatient() {
    // Client side validation
    if (typeof (Page_ClientValidate) == 'function') {
        if (Page_ClientValidate() == false)
        { return false; }
    }
    //document.getElementById("graybackgroundCancel-div").style.display = "block";
    document.getElementById("messageCancel-div").style.display = "block";
    return true;
}

function showmsg() {
    if (confirm("Are you sure you want to delete this record?")) {
        return true;
    }
    else {
        return false;
    }




    function colorChanged(sender) {
        sender.get_element().style.color = "#" + sender.get_selectedColor();
    }

    function AlphaNumeric(evt) {
        if (window.event && ((window.event.keyCode >= 48 && window.event.keyCode <= 57) ||
    (window.event.keyCode == 46) || (window.event.keyCode == 32) ||
    (window.event.keyCode == 188) || (window.event.keyCode.OemMinus == 189))) {
            window.event.cancelBubble = true;
            window.event.returnValue = true;
        }
        else {
            window.event.cancelBubble = false;
            window.event.returnValue = false;
            return false;
        }
    }

    var DatePicker;
    var DatePicker1;
    function GetDatePicker() {
        DatePicker = document.getElementById('DatePicker');
        DatePicker.style.display = 'block';
        DatePicker1 = document.getElementById('DatePicker1');
        DatePicker1.style.display = 'none';
    }
    function GetDatePicker1() {
        DatePicker1 = document.getElementById('DatePicker1');
        DatePicker1.style.display = 'block';
        DatePicker = document.getElementById('DatePicker');
        DatePicker.style.display = 'none';
    }

    function btnClick() {
        //  var R;
        //  R=window.open(,"_blank","location=yes,fullscreen=no,resizable=yes,status=yes,titlebar=yes,menubar=yes",false);
    }

    function CheckPlugin() {
        var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
        function findPlugin(ext) {
            var thisExt, findExt;
            for (var n = 0; n < navigator.plugins.length; n++) {
                //alert("n value"+ navigator.plugins.length);
                for (var m = 0; m < navigator.plugins[n].length; m++) {
                    //alert("m length:"+navigator.plugins[n].length);
                    thisExt = navigator.plugins[n][m].description.toLowerCase();
                    // alert("this exten"+thisExt);
                    findExt = thisExt.substring(0, thisExt.indexOf(" "));
                    //alert("findexes"+findExt);
                    if (findExt == ext)
                        return (true);
                }
            }
            return (false);
        }

        if (is_chrome == true) {
            //alert("chrome browser");
            if (findPlugin("acrobat")) {
                //alert("Adobe Acrobat pdf viewer");
                return true;
            }
            else {

                alert("please disable the chrome pdf viewer and enable the Adobe Acrobat PDF viewer \n Please follow the steps:\n 1.Open the new tab 'chrome://plugins/' type the Address. \n 2. Click the Enable link in 'Adobe Acrobat' field. \n 3. click the Disable link in 'Chrome PDF Viewer'. \n 4. Close the tab and you can open the PDf files in chrome browser.");
                return false;
            }
        }
        else {
            //alert("not chrome");
        }
    }
}