    var today = new Date();
    var time = today.getHours();
    var greet;

    classTaken=[];
    percent = [];
    chr = [];
    tpoints=[];

    if (time < 12) {
        greet = 'Good Morning!';
    } else if (time < 17) {
        greet = 'Good Afternoon!';
    } else {
        greet = 'Good Evening!';
    }
    document.getElementById('greeting').innerHTML = greet;

function gradeConvert(gpercent){

    g = ""
    point = 0
    if(gpercent<60){
        g ="F";
        point=0;
		}
    else
    if(gpercent<=63){
        g="D";
        point=1;
		}
    else
    if(gpercent<=66){
        g="D+";
        point=1.5;
		}
    else
    if(gpercent<=70){
		g="C-";
    point=2;
	}
    else
    if(gpercent<=73){
        g="C";
        point=2.2;
		}
    else
    if(gpercent<=76){
        g="C+";
        point=2.5;
		}
    else
    if(gpercent<=79){
        g="B-";
        point=2.8;
		}
    else
    if(gpercent<=84) {
        g="B";
        point=3;}
    else
    if(gpercent<=89){
        g="B+";
        point=3.5;
		}
    else
    if(gpercent<=90) {
        g="A-";
        point=3.7;
		}
    else
    if(gpercent<=100){
        g="A+";
        point=4;
		}

	gp=[];
	gp[0]=g;
	gp[1]=point;

    return gp;
}
 function validation(){
        gpercent=parseInt(document.getElementById("gradePercent").value);
        courseCredit = parseInt(document.getElementById("cr").value);
        clName = document.getElementById('cName').value;

        if(gpercent<100 && courseCredit>=0 && courseCredit>0){

           document.getElementById("error").innerText = "";
            return (true);
        }else{

           document.getElementById("error").innerText = "Please fill in the empty field!";
}
    }
function addClasses(){

    if(validation()==true){

        crd = document.getElementById("cr").value;
        p = document.getElementById("gradePercent").value;
        ct = document.getElementById("cName").value;
        classTaken[classTaken.length] = ct;
        percent[percent.length]=p;
        chr[chr.length]=crd;

    }

}
function refreshElement(){
    classTaken=[];
    percent=[];
    chr=[];
    tpoints = [];
    display();
    location.reload();
}

function display(){
    totalcredits = 0;
    totalpoints = 0;

    takenClasses="";
    gpoints = "";
    c = "";

    for(i=0; i<classTaken.length; i++){

    tpoints[i] = (chr[i] * gradeConvert(percent[i])[1]).toFixed(2);

    takenClasses += classTaken[i] + "\n";
    gpoints += gradeConvert(percent[i][1]) + "\n";
    c += chr[i]+"\n";

    totalcredits += parseInt(chr[i]);
    totalpoints += parseFloat(tpoints[i]);

    }

document.getElementById("GPA").innerText = "Congratulations on completing your classes! Your GPA is: "+(totalpoints/totalcredits).toFixed(2);
document.getElementById('creditsLeft').innerText = "You still have " +(120-totalcredits)+" credits left";
document.getElementById('Time').innerText = Date();

}

