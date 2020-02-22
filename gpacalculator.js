var today = new Date();
    var time = today.getHours();
    var greet;
    var courseCounter=0;
    var courseName=[""];
    var credits=[""];
    var grades=[""];
    var list="Courses Entered So far:\n";
    var letterGrade="";
    

    if (time < 12) {
        greet = 'Good Morning!';
    } else if (time < 17) {
        greet = 'Good Afternoon!';
    } else {
        greet = 'Good Evening!';
    }
    document.getElementById('greeting').innerHTML = greet;


function addClasses(){
    courseName[courseCounter]=document.getElementById('cName').value;
    credits[courseCounter]=document.getElementById('credits').value;
    grades[courseCounter]=document.getElementById('grades').value;
    
    switch(grades[courseCounter]){
            case '4':
                letterGrade ="A";
                break;
            case '3':
                letterGrade ="B"
                break;
            case '2':
                letterGrade ="C";
                break;
            case '1':
                letterGrade ="D";
                break;
            case '0':
                letterGrade ="F";
                break;
            
    }
    
    list +="Course Name: "+courseName[courseCounter]+"     credits: "+credits[courseCounter]+"    Grade: "+letterGrade+"\n";
    document.getElementById('list').innerHTML = list;
    courseCounter++;
}

function reset(){
        window.location.reload();

}

function display(){
    var totalcredits=0;
    var totalpoints=0;
    
    for(var i=0; i<credits.length; i++){
        totalpoints= totalpoints+(parseFloat(grades[i])*parseFloat(credits[i]));
        totalcredits= totalcredits+parseFloat(credits[i]);
    }
    var gpa=totalpoints/totalcredits;


    var GPA_Cal="Congratulations for completing your classes! Your GPA is: "+gpa.toFixed(2);
    var crdLeft ="You have " + (120-totalcredits)+" credits left until graduation";
    
    alert(GPA_Cal+"\n"+crdLeft+"\n"+Date());
    
}
