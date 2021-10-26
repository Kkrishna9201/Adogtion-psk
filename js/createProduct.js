var image_base64
function encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        image_base64 = reader.result
    }
    reader.readAsDataURL(file);
}

const createproduct = async () => {
    let myForm = document.getElementById('myForm');
    let formData = new FormData(myForm);
    
    var orgzn_name = formData.get("orgzn_name")
    var location = formData.get("location")
    var email = formData.get("email")
    var contact = formData.get("contact")
    var breed = formData.get("breed")
    var image = document.getElementById("image").files[0]
    var final_image
    var file_name
    if(image.type=="image/jpeg"){
        final_image = image_base64.substring(23)
        
        file_name = `public/MyListing1${Date.now()}.jpeg`
    }
    else if(image.type == "image/png"){
        final_image = image_base64.substring(22)
        
        file_name = `public/MyListing1${Date.now()}.png`
    }
    else{
        alert("This type is not supported try uploading JPEG or PNG formatted file")
        return;
    }    
    
    
    await axios({
        method: "POST",
        url: "https://tr3ybcvhtd.execute-api.us-east-1.amazonaws.com/Dev/gets3url",
        headers: {
            "content-type": "application/json",
        },
        data:{
            "ImageName": file_name,
            "img64": final_image
        }
    }).then(res =>{
        
        uploadDB(orgzn_name,location,email,contact,breed,file_name);
    })
    .catch(err => {
        
    })

}

const uploadDB = async (orgzn_name,location,email,contact,breed,file_name) => {
    var image = `https://test-22292.s3.amazonaws.com/${file_name}`
    await axios({
            method: "POST",
            url: "https://jkyq6u0lf8.execute-api.us-east-1.amazonaws.com/dev/psk-orgzn-resource",
            headers: {
                "content-type": "application/json",
            },
            data: {
                "orgzn_name": orgzn_name,
                "location": location,
                "email": email,
                "contact": contact,
                "breed": breed,
                "image": image,
                "token": localStorage.getItem('IdToken')
            }
        })
        .then(function (response) {
            
            alert("Submitted Successfully")
            window.location.href="thanks1.html";
        })
        .catch(function (error) {
            
        });
}
