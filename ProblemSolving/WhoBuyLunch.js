let array= ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function buyLunch(){
    let nameLength = array.length;
    let randomPerson = Math.floor(Math.random()*nameLength);
    let buyluchperson = array[randomPerson];

    console.log(`${buyluchperson} is buying the lunch`); 
}
buyLunch();