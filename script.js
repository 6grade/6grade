function calculateAverage() {
    let sixthGrade = parseFloat(document.getElementById("sixthGrade").value);
    let fourthGrade = parseFloat(document.getElementById("fourthGrade").value);
    let fifthGrade = parseFloat(document.getElementById("fifthGrade").value);

    let finalAverage = (sixthGrade * 0.8) + (fourthGrade * 0.1) + (fifthGrade * 0.1);

    document.getElementById("result").innerHTML = "المعدل النهائي: " + finalAverage;
}
