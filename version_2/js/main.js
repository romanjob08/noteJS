import {PHONE_NUMBER} from './notes_data'

document.querySelector('.content').innerHTML += `<div class="note-header">
<table>
    <tr>
        <th></th>
        <th>Name</th>
        <th>Created</th>
        <th>Category</th>
        <th>Content</th>
        <th>Dates</th>
        <th><i class="fa fa-archive"></i><i class="fa fa-trash"></i></th>
    </tr>
    <tr>
    <td><i class="fa fa-shopping-cart"></i></td>
    <td>Shopping list</td>
    <td>April 20,2021</td>
    <td>Task</td>
    <td>Tomatoes,bread</td>
    <td></td>
    <td>
    <button class="note-btn"><i class="fa fa-pencil"></i></button>
    <button class="note-btn"><i class="fa fa-archive"></i></button>
    <button class="note-btn"><i class="fa fa-trash"></i></button>
    </td>
    </tr>
</table>
</div>`

document.querySelector('.status').innerHTML += `<div class="note-header">
<table>
    <tr>
        <th></th>
        <th>Note Category</th>
        <th>Active</th>
        <th>Archived</th>
    </tr>
    <tr>
    <td><i class="fa fa-shopping-cart"></i></td>
    <td>Task</td>
    <td>14</td>
    <td>7</td>
    </tr>
</table>
</div>`
for ((key) in PHONE_NUMBER) {
    let row = document.createElement('tr')
    row.innerHTML = `<td >${key}</td>`
    document.querySelector('.phone').appendChild(row)
    // for (let i = 0; i < PHONE_NUMBER[key].length; i++) {
    //     let row = document.createElement('tr')
    //     row.innerHTML = `
    //         <td>${PHONE_NUMBER[key][i][0]}</td>
    //         <td>${PHONE_NUMBER[key][i][1]}</td>
    //     `
    //     document.querySelector('.phone').appendChild(row)
    // }
}

// document.querySelector('.container1').innerHTML += `<div class="notes button"></div>`
