    var today = new Date();
    var time = today.getHours();
    var greet;

    if (time < 12) {
        greet = 'Good Morning!';
    } else if (time < 17) {
        greet = 'Good Afternoon!';
    } else {
        greet = 'Good Evening!';
    }
    document.getElementById('greeting').innerHTML = greet;
    
    function calculate() {
        var items;
        var i;
        var totalcredits = 0;
        for (i = 0; i < items.length; i++) {
        var credits = items.i;
        totalcredits+=totalcredits;
        i++;
        var grade = items.i;
        if (grade = "A") {
        Gpa+=4.0*credits;
        } else if (grade = "B") {
        GPA +=3.0*credits;
        } else if (grade = "C") {
        GPA +=2.0*credits;
        }  else if (grade = "D") {
        GPA +=1.0*credits;
        } else {
        GPA +=0;
        }
        GPA = GPA/count;
        }
    }

    $(document).ready(function () {
        $("#add-more").click(function(e){
           $(".insertionpoint").after("<label class='sr-only' for='inlineFormInputName2'>Name</label><input type='text' class='form-control mb-2 mr-sm-2' id='inlineFormInputName2' placeholder='Class Name'><select class='form-control'><option name='oneCred'>1 Credit</option><option name='twoCred'>2 Credits</option><option name='threeCred'>3 Credits</option><option name='fourCred'>4 Credits</option><option name='fiveCred'>5 Credits</option><option name='sixCred'>6 Credits</option></select><select class='form-control'><option name='A'>A</option><option name='Aminus'>A-</option><option name='Bplus'>B+</option><option name='B'>B</option><option name='Bminus'>B-</option><option name='Cplus'>C+</option><option name='C'>C</option><option name='Cminus'>C-</option><option name='Dplus'>D+</option><option name='D'>D</option><option name='Dminus'>D-</option><option name='F'>F</option></select>");
        });
    });