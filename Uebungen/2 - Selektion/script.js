console.log('Start');

/*   Aufgabe 1: Selektion 1.0
 *   -----------------------------------
 *   Wenn Zahl grösser als 0 gebe aus: die Zahl ist postiv
 *   Falls Zahl Kleiner als 0 ist gebe aus: die Zahl ist negativ
 */

let x = 90
/* if (x > 0) {
    console.log('true')
} // true
if (x == 0) {
    console.log('0=0')
} */

/*   Aufgabe 2: Selektion 2.0
 *   -----------------------------------
 *   Wenn Zahl grösser als 0 und kleiner als 10: die Zahl liegt dazwischen
 *   Ansonsten gebe aus: die Zahl liegt nicht im gültigen Rahmen
 */
x = 90

if (x > 0) {
    if (x < 10) {
        console.log('dazwischen')
    }
}

if (x > 0 && x < 10) {
    console.log('dazwischen')
} else (
    console.log('ungültig')
)

/* if (x<0){
    console.log('false')
}
if ( x>10) {
    console.log('false')
} */


/*   Aufgabe 3: Noten Function
 *   -----------------------------------
 *   Bei Noten unter 4: ungenügende Note
 *   Bei Noten über 4: genügende Note
 */
function notenrechner(note) {
    if (note < 4) {
        console.log('ungenügende note')
    } else (
        console.log('genügende note')
    )
}


function addiere(a, b) {
    console.log(a + b)
}

/*   Aufgabe 4: Trinkspiel
 *   -----------------------------------
 *   Erstelle eine Funktion, welche je nach Alter folgendes zurück gibt:
 *   bei Alter unter 18 : nichts da!
 *   zwischen 18 und 45: zwei Birchen gehen
 *   zwischen 50 und 80: ein Whiskey
 *   An den Rest: Her mit dem Whiskey!
 */
function Trinkspiel(alter) {
    if (alter < 18) {
        console.log('nichts da!')
    }
    if (alter > 18 && alter < 45) {
        console.log('zwei Birchen gehen')
    }
    if (alter > 50 && alter < 80) {
        console.log('ein Whiskey')
    }
    else (
        console.log('Her mit dem Whiskey')
    )




}
/* 
(x > 18 && x < 45) {
    console.log('zwei Birchen gehen')
}
else if (x > 50 && x < 80) {
    console.log('ein Whiskey')
}
else {
    console.log('her mit dem whiskey')
} */

/*
 *   Aufgabe 5: BMI
 *   -----------------------------------
 *   Schreibe eine Funktion, die den "body mass index" berechnet. (bmi = weight[kg] / height[m] ^ 2).
 *   if bmi <= 18.5 return "Underweight"
 *   if bmi <= 25.0 return "Normal"
 *   if bmi <= 30.0 return "Overweight"
 *   if bmi > 30 return "Obese"
 */
function BMI(gewicht, groesse) {
    var bmi = gewicht / (groesse * groesse)
    console.log(bmi);
    if (bmi <= 18.5) { console.log('Underweight') }
    else if (bmi <= 25.0) { console.log('Normal') }
    else if (bmi <= 30.0) { console.log('Overweight') }
    else { console.log('Obese') }
}



/*   Aufgabe 6: Switch-Case (Freiwillig wenn genügend Zeit)
 *   -----------------------------------
 *   Erstelle ein Switch-Case Statement für die Aufgabe 5
 */