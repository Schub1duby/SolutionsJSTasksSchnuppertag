console.log('Start');

/*   Aufgabe 1:  While-Schleife
 *   -----------------------------------
 *   While-Schleife erstellen, welche Werte von 1-10 und ausgeben
 */
var counter = 100
while (counter < 11) {
    console.log(counter)
    counter= counter+1
}

/*   Aufgabe 2: Do...While-Schleife
 *   -----------------------------------
 *   Do-While Schleife erstellen, welche Werte von 1-10 und ausgeben
 */
counter=100
do {
    console.log(counter)
    counter++
} while (counter<11)
/*
 *   Aufgabe 3: For-Schliefe
 *   -----------------------------------
 *   Erstelle eine For-Schleife, welche das folgende Ausgibt
 *
 *   3
 *   9
 *   27
 *   81
 *   243
 *   729
 */
for(var zaehler=3;zaehler<=729; zaehler= zaehler*3){
    console.log(zaehler)
}

/*   Aufgabe 4: Durchschnittsberechnung
 *   -----------------------------------
 *   Man erhält ein Array aus Zahlen und soll den Durchschnitt berechnen
 *
 * 
 *   Vorgehen:
 *       1. For-Schleife erstellen
 *       2. Zahl zum Durchschnitt hinzufügen und Schleifenvariable um 1 erhöhen
 *       3. Durchschnitt berechnen
 */
var zahlenarray = [3,5,7,20,60] 
var zaehler = 0
var Summe = 0
while (zaehler<zahlenarray.length){
    console.log (zahlenarray[zaehler])
    Summe= Summe+zahlenarray[zaehler]
    zaehler= zaehler+1

   
}
console.log(Summe)
console.log(Summe/zahlenarray.length)



/*





function ArrayAvg(myArray){
    var i= 0,summ = 0, ArrayLen =myArray.length;
    while(i<ArrayLen){
        summ= summ+myArray[i++]
    }
    return summ / ArrayLen;
}
var myArray = [1,5,2,3,7];
var a = ArrayAvg(myArray);
console.log(a)








/*   Aufgabe 5: Summe aller positiven Zahlen
 *   -----------------------------------
 *   Du erhälst ein Zahlen Array und gibst die Summe aller positiven Zahlen zurück
 *
 *   Bsp: [1,-4,7,12] => 1 + 7 + 12 = 20
 *
 *   Vorgehen:
 *       1. For-Schleife erstellen
 *       2. Ist die Zahl grösser als 0?
 *           2.1 Zahl zum Resultat hinzufügen
 */