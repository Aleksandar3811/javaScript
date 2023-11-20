function employees(input){
    input.forEach(employee=>{
        const name=employee;
        const number=name.length;
        console.log(`Name: ${name} -- Personal Number: ${number}`);
    });


}
employees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ]);