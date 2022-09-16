function readURL(input) {
if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
    $('#profileImage').attr('src', e.target.result).width(150).height(auto);
    };

    reader.readAsDataURL(input.files[0]);
}
}


//multiple selection
let interest= document.getElementById('interest');
function change_to_mail(){
    interest.type ="email"
}
function return_to_text(){
    interest.type = "text"
}


function get_profile_details(e){
    
    let profile_photo = document.getElementById("profilePhoto").value;
    let address = document.getElementById("address").value;
    let country = document.getElementById("country").value;
    let city =document.getElementById("city").value;
    let github_link =document.getElementById("githubLink").value;
    let all_interests = document.getElementById("interest").value;

    

    let interests = all_interests.split(",");
    let profile_details ={
        profile_photo:profile_photo,
        address:address,
        country:country,
        city:city,
        github_link:github_link,
        interests:interests

    };
    

    let my_dat=JSON.stringify(profile_details);
    fetch(`http://127.0.0.1:8000/setup`,{
        method:'POST',
        credentials:"include",
        body: my_dat,
        cache:'no-cache',
        headers: new Headers({
        'content-type':'application/json'
    })                                  
})
e.preventDefault()
   
}