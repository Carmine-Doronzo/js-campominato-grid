console.log('Campo minato')

const playDomElement = document.getElementById('play');

const containerDomElement = document.querySelector('.container');

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

    

    for(let i = 0; i < gridElement; i++){
       let numCell = i + 1;
        //console.log(i)
        let cellDomElement = document.createElement('div')
        cellDomElement.classList.add('cell')
        cellDomElement.innerHTML =`${numCell}`
        containerDomElement.append(cellDomElement);
        cellDomElement.addEventListener('click', function(){
            cellDomElement.classList.add('bg-azure')
            console.log('click sulla casella :', numCell)
        })
    }

})