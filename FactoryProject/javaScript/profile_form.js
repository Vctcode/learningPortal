function readURL(input) {
if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
    $('#profileImage').attr('src', e.target.result).width(150).height(auto);
    };

    reader.readAsDataURL(input.files[0]);
}
}
