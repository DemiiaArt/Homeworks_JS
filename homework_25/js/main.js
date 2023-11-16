const container = document.querySelector('#root');
const borderStyle = '1px solid black';

function createTable (rows, cols) {
    const grandTable = document.createElement('table');

    for (let i = 1; i <= rows; i++) {
        const tableRow = document.createElement('tr');

        for (let a = 1; a <= cols; a++) {
            const tableData = document.createElement('td');
            const pasteNumber = (i - 1) * cols + a;
            tableData.textContent = `${pasteNumber}`;
            tableData.style.border = borderStyle
            tableRow.appendChild(tableData);
        }
        
        grandTable.appendChild(tableRow)
        grandTable.style.border = borderStyle;
        grandTable.style.borderCollapse = 'collapse';
    }
    
    return grandTable
}

container.appendChild(createTable(10, 10))
