console.log('Campo minato')

const playDomElement = document.getElementById('play');


playDomElement.addEventListener('click', function(){

    let dificultyDomElement = document.getElementById('dificulty').value;

    let cellElement;
    let gridElement ;

    if(dificultyDomElement == '1'){
        console.log('difficile')
        cellElement = 10;
        gridElement = cellElement ** 2;
        //console.log(gridElement)
    }else if(dificultyDomElement == '2'){
        console.log('medio')
        cellElement = 9;
        gridElement = cellElement ** 2;
       // console.log(gridElement)
    }else{
        console.log('facile')
        cellElement = 7;
        gridElement = cellElement ** 2;
        //console.log(gridElement)
    }

    

    for(let i = 0; i<gridElement; i++){
        console.log(i)
    }

})