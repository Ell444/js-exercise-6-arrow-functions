//Esercizio 2: Crea un oggetto chiamato 'studente'.
//Dovrebbe avere proprietà per 'nome' e 'età'.
//Dovrebbe anche avere un metodo che usa la parola chiave 'this' per stampare
//il nome e l'età dello studente e un metodo per incrementare l'età.

const student = {
    name: "Selene",
    age: 2,
    screamName: function(){
        return this.name.toUpperCase()
    },
    grow: function(years){
        this.age += years;
    }
}
student.grow(4)
console.log (student.age);
console.log (student.screamName());