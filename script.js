const gameboardModule = (function () {
    let gameboard = [
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        ];
    
    let player = 1;
    function toggleMarker() {        
        if (player == 1) {
            player = 2;
            return "X";
        } else {
            player = 1;
            return "O";
        }                
    }

    function updateArray(index) {
        gameboard[index].value = "X"
    }
    
    function updateGameboard() {
        // update indivdual div
        console.table(gameboard);
    }


    return {
        updateGameboard: updateGameboard,
        updateArray: updateArray,
        toggleMarker: toggleMarker,
    };
})();

//place marker on board upon click, check win

//rotate marker

/*win logic
1 2 3
4 5 6 
7 8 9

// win if marker:
1 = 2 = 3
4 = 5 = 6
7 = 8 = 9

1 = 4 = 7
2 = 5 = 8
3 = 6 = 9

1 = 5 = 9
3 = 5 = 7
*/

// need toggle X/O logic
let cells = document.querySelectorAll('[data-cell]');
cells.forEach((cell) => {
    cell.addEventListener('click', (e) => {
        e.target.textContent.length === 0? e.target.textContent = gameboardModule.toggleMarker() : alert("pick a different cell!");
        gameboardModule.updateArray((e.target.getAttribute('data-cell')) - 1);
        gameboardModule.updateGameboard();
    })
});

