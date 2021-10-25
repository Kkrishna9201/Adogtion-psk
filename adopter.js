const createOrder = async () => {
    let myForm = document.getElementById('myForm');
    let formData = new FormData(myForm);
    
    var dogid = formData.get("dogid")
    var fname = formData.get("fname")
    var lname = formData.get("lname")
    var mobile = formData.get("mobile")
    var email = formData.get("email")
    var location = formData.get("location")
    var amount = formData.get("amount")
    
    await axios({
            method: "POST",
            url: 'https://jkyq6u0lf8.execute-api.us-east-1.amazonaws.com/dev/psk-adopter-resource',
            headers: {
                "content-type": "application/json",
            },
            data: {
                "dogid": dogid,
                "fname": fname,
                "lname": lname,
                "mobile": mobile,
                "email": email,
                "location": location,
                "amount": amount
            }
        })
        .then(function (response) {
            
            alert("Adoption request submitted.")
            window.location.reload();
        })
        .catch(function (error) {
            
        });
}
