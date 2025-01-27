


function createTable(rows, cells) {
    const table = document.querySelector('.table')
    for (let r = 0; r < rows; r++) {
        const row = document.createElement('div')
        row.classList.add('tableRow')
        table.appendChild(row)
        for (let c = 0; c < cells; c++) {
            const cell = document.createElement('div')
            cell.classList.add('tableCell')
            cell.id = `${r + 1}.${c + 1}`
            cell.innerHTML = `${r + 1}.${c + 1}`
            cell.onclick = (e) => {
                changeCell(e.target.id)
            }
            row.appendChild(cell)

        }


    }

}

createTable(10, 10)

const changedCells = []


function changeCell(id) {
    const newId = id.split('.').map((el) => Number(el))
    function removeChangedCells() {
        changedCells.pop()
        changedCells.pop()
    }
    if (changedCells.length === 0) {
        changedCells.push(newId)


    } else if (changedCells.length === 1) {
        if ((changedCells[0][0] === newId[0]) && (changedCells[0][1] === newId[1])) {
            changedCells.push(newId)
            const element = document.getElementById(`${changedCells[0][0]}.${changedCells[0][1]}`);

            element.classList.add('changed')
            removeChangedCells()
        } else if ((newId[0] === changedCells[0][0] || newId[1] === changedCells[0][1])) {
            changedCells.push(newId)
            // по горизонталі --------------------------------
            if (changedCells[0][0] === changedCells[1][0]) {
                if (changedCells[0][1] < changedCells[1][1]) {
                    for (let i = changedCells[0][1]; i <= changedCells[1][1]; i++) {
                        const element = document.getElementById(`${changedCells[0][0]}.${i}`);

                        element.classList.add('changed')



                    }
                    removeChangedCells()

                }
                else if (changedCells[0][1] > changedCells[1][1]) {
                    for (let i = changedCells[1][1]; i <= changedCells[0][1]; i++) {
                        const element = document.getElementById(`${changedCells[0][0]}.${i}`);

                        element.classList.add('changed')



                    }
                    removeChangedCells()
                }
            }
            // по вертикалі ---------------------------------------
            else if (changedCells[0][1] === changedCells[1][1]) {
                if (changedCells[0][0] < changedCells[1][0]) {
                    for (let i = changedCells[0][0]; i <= changedCells[1][0]; i++) {
                        const element = document.getElementById(`${i}.${changedCells[0][1]}`);

                        element.classList.add('changed')
                    }
                    removeChangedCells()
                }
                else if (changedCells[0][0] > changedCells[1][0]) {
                    for (let i = changedCells[1][0]; i <= changedCells[0][0]; i++) {
                        const element = document.getElementById(`${i}.${changedCells[0][1]}`);

                        element.classList.add('changed')
                    }
                    removeChangedCells()
                }
            }

        } else {
            const firstCell = document.getElementById(`${changedCells[0][0]}.${changedCells[0][1]}`)
            const secondCell = document.getElementById(id)
            firstCell.classList.add('error')
            secondCell.classList.add('error')

            setTimeout(() => {
                firstCell.classList.remove('error')
                secondCell.classList.remove('error')

            }, 300)
            changedCells.pop()


        }

    } 


}

const allCells = document.getElementsByClassName('tableCell')
function reset () {
    [...allCells].forEach((el)=> {
       
        
        el.classList.remove('changed')
    })
}