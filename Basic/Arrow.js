let num = (n)=>{ console.log(n**2);}
num(10);

///arrow function with this keyword
let JavaScript = {
    call : 'JavaScript',
    work: 'Build Application',
    libraries: ['React', 'Angular', 'Vue'],
    printLibrary: function(){
        this.libraries.forEach((a)=>console.log(`${this.call} lovers ${a}`))
    }
};
JavaScript.printLibrary();

