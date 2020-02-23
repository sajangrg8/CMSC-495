    var today = new Date();
    var time = today.getHours();
    var greet;
    var classesTaken = new Array();
    var totalcredits;
    var GPA;

    function calculate() {
        totalcredits = 0;
        GPA = 0;
        for (var i = 0; i < classesTaken.length; i++) {
            var credits = classesTaken[i];
            totalcredits=totalcredits + credits;
            i++;
            var grade = classesTaken[i];
            GPA += grade*credits;
            }

        GPA = GPA/totalcredits;
        var congratsMessage = "";

        if (GPA == 4.0) {
            congratsMessage = "Amazing work! You have a perfect grade!"
        } else if (GPA > 3.5) {
            congratsMessage = "Keep up the great grades! You've got this"
        } else if (GPA > 3.0) {
            congratsMessage = "You're doing very well!"
        } else if (GPA > 2.0) {
            congratsMessage = "Keep working and you'll graduate in no time!"
        } else if (GPA > 1.0) {
            congratsMessage = "Your grades need improvement, but I have faith in you!"
        } else {
            congratsMessage = "Your grades need drastic improvement, but it's never too late."
        }
        var n = GPA.toFixed(2);
        return congratsMessage + " Your GPA is: " + n; 
    }

    function creditsLeft() {
        var creditsLeft = 120 - totalcredits;
        if (totalcredits <= 0) {
            return "Great job! Credit Requirement for Degree has been Met!";
        } else {
            return "Congratulations! There are " + creditsLeft + " Credits Left in Your Degree.";
        }
    }

    $(document).ready(function () {
        if (time < 12) {
            greet = 'Good Morning!';
        } else if (time < 17) {
            greet = 'Good Afternoon!';
        } else {
            greet = 'Good Evening!';
        }
        document.getElementById('greeting').innerHTML = greet;

        $( "#add-more" ).click(function(e){
            e.preventDefault();
           $("#newField").before("<div><label class='sr-only' for='inlineFormInputName2'>Name</label><input type='text' class='form-control mb-2 mr-sm-2' id='inlineFormInputName2' placeholder='Class Name'><select class='form-control' name='classInputs'><option value='1'>1 Credit</option><option value='2'>2 Credits</option><option value='3'>3 Credits</option><option value='4'>4 Credits</option><option value='5'>5 Credits</option><option value='6'>6 Credits</option></select><select class='form-control' name='classInputs'><option value='4.0'>A</option><option value='3.7'>A-</option><option value='3.3'>B+</option><option value='3.0'>B</option><option value='2.7'>B-</option><option value='2.3'>C+</option><option value='2.0'>C</option><option value='1.7'>C-</option><option value='1.3'>D+</option><option value='1.0'>D</option><option value='0.0'>F</option></select></div><br>");
        });

        $( "#calcButton" ).click(function(e){
            e.preventDefault();
            var takenClasses = new Array();
            takenClasses = [];
            classesTaken = [];
            takenClasses = document.getElementsByName("classInputs");
            for(var value of takenClasses.values()) {
                value = value.value;
                classesTaken.push(+value);
            }
            //alert(classesTaken);
            //alert(calculate());
            $("#calculatedGPA").html(calculate());
            $("#creditsleft").html(creditsLeft());
            //alert(creditsLeft());
            
        });
    });
