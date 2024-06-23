let person = {
    addess: {
        cord: {
            lat: 56.908,
            lang: 98.09
        }
    },
    time: new Date(2024, 6, 22),
    name: 'Arafat'

}

let todo = new Object();
 todo.id =1 ;
 todo.date = 'Today';
 todo.first = 'wake up';


 let obj1 = {a:1, b:2, c:3};
 let obj2 = {d:4, e:5, f:6};
 let obj3 = {...obj1, ...obj2};
 console.log(obj3)

 console.log(todo)
 
console.log(person)