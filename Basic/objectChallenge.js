let library = [
   {
    title: 'Himu',
    author: 'Humayan Ahmed',
    status: {
        own : true,
        reading: false,
        read: false
    }
   },
   {
    title: 'Nila',
    author: 'Humayan ahmed',
    status: {
        own : true,
        reading: false,
        read: false
    }
   },
   {
    title: 'Misir ali',
    author: 'HUmayan Ahmed',
    status: {
        own : true,
        reading: false,
        read: false
    }
   }

];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

let {title:firstBook} = library[0];

console.log(firstBook);


//

let jsonLibraby = JSON.stringify(library);
console.log(jsonLibraby)