$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});
function readURL(input) {

  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $('#blah').attr('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  }
}

$("#avatarfile").change(function() {

  readURL(this);

});

if($(".correcterror").length > 0) { 

  var geterror = $(".correcterror").attr("id");

  swal("Başarılı!", geterror, "success");

}

if($(".wrongerror").length > 0) { 

  var geterror = $(".wrongerror").attr("id");

  swal("Hata oluştu!", geterror, "warning");

}