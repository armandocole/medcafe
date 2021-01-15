var editor;
function createEditor( languageCode ) {
  editor = CKEDITOR.replace( 'editor1', {
    extraPlugins: 'colorbutton',
  });
  $("form").submit( function(e) {
      var messageLength = CKEDITOR.instances['editor1'].getData().replace(/<[^>]*>/gi, '').length;
      if( messageLength < 100 ) {
          swal("Hata!", "En az 100 karakter içeren bir mesaj yazmalısınız.", "warning");
          e.preventDefault();
      }
  });
}
createEditor( '' );