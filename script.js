//generate board
let gameboardModule = (function () {
    let gameboard = [
        {value: '1'},
        {value: '2'},
        {value: '3'},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        ];
    
    function updateArray(index) {
        return gameboard[index];
    }
    
    function updateGameboard() {
        // update indivdual div
        console.log(gameboard);
    }
    return {
        updateGameboard: updateGameboard,
        updateArray: updateArray, 
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
        console.log(e.target.getAttribute('data-cell'));
        e.target.textContent.length === 0? e.target.textContent = "X" : alert("pick a different cell!")
    })
});

