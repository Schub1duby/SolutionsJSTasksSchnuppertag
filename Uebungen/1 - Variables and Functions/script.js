console.log('Start');
/*
 *   Aufgabe 1: Ausgabe
 *   -----------------------------------
 *   1. Gib deinen Namen, Alter und Geburtsdatum aus
 *   2. Gib eine Info aus
 *   3. Gib eine Warunung aus
 *   4. Gib einen Fehler aus
 */
console.log('Gaia, 13, 30.12.2009')
console.info('Info')
console.warn('Achtung')
console.error('Fehler')

/*   Aufgabe 2: Variabeln 1.0
 *   -----------------------------------
 *   Deklariere Variabeln für deinen Vornamen, Nachnamen, Geburtstag und Alter und gib diese aus
 */
var vorname = 'Gaia'
var nachname = 'Flaman'
var geburtstag = '30.12.2009'
var alter = 13

console.log(geburtstag)
/*   Aufgabe 3: Variabeln 2.0
 *   -----------------------------------
 *   Deklariere einen Array mit den Namen deiner Familienmitglieder
 *   Deklariere einen Boolean, ob du männlich bist oder nicht
 */
var family = ['Gaia', 'Carola', 'Jakob', 'Newton']
console.log(family[2])

/*   Aufgabe 4: Functions 1.0
 *   -----------------------------------
 *   Erstelle eine Funktion, die 2 + 3 zusammenrechnet und ausgibt (nicht als Parameter übergeben)
 */
function addiere() {
    var ergebnis = 2 + 3
    console.log(ergebnis)
}
addiere()
/*   Aufgabe 6: Rechner 1.0
 *   -------odulo----------------------------
 *   Erstelle vier Functions (Addition, Subtraktion, Division, Multiplikation)
 *   Gib zwei Zahlen mit und verrechne sie entsprechend der Operation
 */
function addiere(summand1, summand2) {
    var ergebnis = summand1 + summand2
    console.log(ergebnis)

}
addiere()
function subtrahiere(minuend1,subtrahend2) {
    var ergebnis = minuend1 - subtrahend2 
    console.log(ergebnis)

}
subtrahiere()
function dividiere(dividend1, divisor2) {
    var ergebnis = 1/
    console.log(ergebnis)
}
dividiere()
function multiplizere(multiplikator1, multiplikand2) {
    var ergebnis = multiplikator1 * multiplikand2
    console.log(ergebnis)

}
multiplizere()
/*   Aufgabe 4: Functions 2.0
 *   -----------------------------------
 *   Erstelle eine Funktion, die den Rest der Division ausgibt.
 */
function modulo() {
    let dividend = 10;
    let divisor = 3;
    let result = dividend % divisor;
    console.log(result); // returns 1  
}


modulo()


/*   Aufgabe 5: Functions 3.0
 *   -----------------------------------
 *   Erstelle eine Funktion, die den Rest einer Division zurück gibt
 */
let dividend = 10;
let divisor = 3;
let result = dividend % divisor;
