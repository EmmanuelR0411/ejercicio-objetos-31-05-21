function person(firstname, lastname, age){
    let people = {
        firstname,
        lastname,
        age,
        hi: function() {
            console.log('Hola, mi nombre es', this.firstname, this.lastname, 'un placer conocerte.');
        },
        old: function() {
            console.log('Tengo', this.age, 'años');
        }
    };
    return people;
};


var Name = person('Luis','Hernandez',22);
Name.hi();
Name.old();