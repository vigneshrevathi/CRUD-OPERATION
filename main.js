// getting input from the user
const submitbtn = () => {
    let enteredFname = document.getElementById("inputFname").value
    let enteredLname = document.getElementById("inputLname").value
    let enteredEmail = document.getElementById("inputEmail").value
    let enteredPhone = document.getElementById("inputPhoneno").value
    console.log(enteredFname, enteredLname, enteredEmail, enteredPhone)
// assigning object
    let newData = {
        fname:enteredFname,
        lname:enteredLname,
        email:enteredEmail,
        phone:enteredPhone
    }
    
    console.log(newData)
// pushing new object to the empty array 
    userList.push(newData)
    console.log(userList)

    displayTable()
}
// creating the reset button
const resetbtn = () => {
    document.getElementById("inputFname").value = ''
    document.getElementById("inputLname").value = ''
    document.getElementById("inputEmail").value = ''
    document.getElementById("inputPhoneno").value = ''
}

// to define the delete button and make function as possible to delete user records
const handleDelete = (index) => {
    userList.splice(index,1)
    displayTable()
}

// actual empty list

let userList = [
  
]

// to display the table content of the user records that was pushed from the empty array 
const displayTable = () =>{


    document.getElementById("userDetails").innerHTML = userList.map((data, index) => {
        return `<tr>
                    <th scope="row">${index+1}</th>
                    <td>${data.fname}</td>
                    <td>${data.lname}</td>
                    <td>${data.email}</td>
                    <td>${data.phone}</td>
                    <td><button type="button" class="btn btn-danger" onclick="handleDelete(${index})">delete</button></td>
                </tr>`
    }).join(" ")


}

// function calling

displayTable()




