console.log('Campo minato');

const playDomElement = document.getElementById('play');

const containerDomElement = document.querySelector('.container');

const resetDomElement = document.getElementById('reset');

resetDomElement.addEventListener('click',function(){
    containerDomElement.innerHTML = "";
})

playDomElement.addEventListener('click', function(){

    let dificultyDomElement = document.getElementById('dificulty').value;

    let cellElement;
    let gridElement ;

    if(dificultyDomElement == '1'){
        console.log('difficile');
        containerDomElement.classList.add('dif1');
        cellElement = 10;
        gridElement = cellElement ** 2;
        //console.log(gridElement)
    }else if(dificultyDomElement == '2'){
        console.log('medio');
        containerDomElement.classList.add('dif2');
        cellElement = 9;
        gridElement = cellElement ** 2;
       // console.log(gridElement)
    }else{
        console.log('facile');
        containerDomElement.classList.add('dif3');
        cellElement = 7;
        gridElement = cellElement ** 2;
        //console.log(gridElement)
    }

    

    for(let i = 0; i < gridElement; i++){
       let numCell = i + 1;
        //console.log(i)
        let cellDomElement = document.createElement('div');
        cellDomElement.classList.add('cell');
        cellDomElement.innerHTML =`${numCell}`;
        containerDomElement.append(cellDomElement);
        cellDomElement.addEventListener('click', function(){
            cellDomElement.classList.toggle('bg-azure');
            console.log('click sulla casella :', numCell);
        })
    }

    

})

