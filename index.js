// Add your code here

const form =document.querySelector("#form-to-submit")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    const form = event.target
})

 fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
            body: JSON.stringify({
                'name': name,
                'email': email
                
            })

    })        .then(response => response.json())
    .then(submitData => document.body.append(submitData.id))
    .catch(error => document.body.append(error))
