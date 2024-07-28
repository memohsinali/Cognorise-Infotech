


let ticket = document.querySelector(".ticket .text h3");



const taglines = [
    "Innovative Tech Solutions for a Modern World",
    "Where Creativity Meets Technical Excellence",
    "Building the Future, One Line of Code at a Time",
    "Transforming Ideas into Digital Masterpieces",
    "Your Go-To Innovator for Tech and Design",
    "Crafting Seamless Experiences Through Technology",
    "Empowering Ideas with Cutting-Edge Solutions",
    "Turning Visions into Reality with Expert Precision"
];

let index=0;
const len=taglines.length;

setInterval(function(){
        ticket.innerHTML=taglines[index];
        index=(index+1)%len;
},2000);
