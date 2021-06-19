let people = {
    firstname: 'Juan',
    lastname: 'Hernandez',
    age: 22,
    hi: function() {
        console.log('Hola, mi nombre es', this.firstname, this.lastname, 'un placer conocerte.');
    },
    old: function() {
        console.log('Tengo', this.age, 'años');
    }
}

people.hi();
people.old();









































/* var persona = {
    nombre: ["Bob","Smith"],
    edad: 32,
    genero: "Masculino",
    intereses: ["Música", "Esqui"],
    bio: function () {
        alert(this.nombre[0] + " " + this.nombre[1] + " Tiene " 
        + this.edad + " años. Le gusta "+ this.interes[0] + " y "+
        this.intereses[1] + ".");
    },
    saludo: function(){
        alert("Hola, soy" + this.nombre[0] + ". ");
    }
 */