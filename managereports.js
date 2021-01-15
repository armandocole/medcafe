$.fn.dataTable.ext.errMode="throw",$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$(".ajaxinforeportmovie").length>0&&($(document).one("click","#movieeditload",function(){$("#movieeditloadcontent").append('<div class="card-header mb-0 pb-0"> <h5 class="card-title" id="heading-multiple-icons">Film Bağlantıları</h5><hr> <div class="heading-elements" id="rightelements"> <a href="javascript:void(0)" class="reset" id="reset"> <i class="ft-refresh-cw" data-toggle="tooltip" data-original-title="Tabloyu resetle" data-trigger="hover"></i> <font class="d-none d-md-inline"> Resetle</font> </a> <a href="javascript:void(0)" data-dismiss="modal" aria-label="Close"><i class="ft-x"></i><font class="d-none d-md-inline"> Çıkış</font></a> </div> </div> <div class="card-content"> <table class="table dt-responsive table-striped table-bordered data-table" id="adminRoles" width="100%"> <thead> <tr> <th id="datatablemin">Film Künyesi</th> <th>Rapor Durumu</th> <th>Rapor Tarihi</th> </tr> </thead> <tbody> </tbody> </table><br> </div>');var e=$(".ajaxinforeportmovie").attr("id"),a=$(".ajaxinforeportmovie").attr("name"),t=$(".data-table").DataTable({initComplete:function(){var e=this.api();$("#adminRoles_filter input").off(".DT").on("keyup.DT",function(a){13==a.keyCode&&e.search(this.value).draw()})},language:{infoFiltered:"",processing:"<i class='ft-refresh-cw spinner'></i>"},processing:!0,serverSide:!0,ajax:{url:e,data:{id:a}},columnDefs:[{"orderSequence":["desc","asc"],"targets":'_all'}],columns:[{data:"name",name:"movie_url"},{data:"reportstatus",name:"reportstatus"},{data:"lastdate",name:"updated_at"}],order:[[2,"desc"]],responsive:!0});$(".reset").click(function(){t.search("").columns().search("").draw()}),$("#movieedit").on("shown.bs.modal",function(){$("#adminRoles").DataTable().columns.adjust().responsive.recalc()}),$(document).on("click",".removemoviereport",function(e){swal({title:"Doğrulama",text:"Silmek İstediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(a=>{if(a){e.preventDefault(),num=parseInt($("#refresh").text()),numrep=parseInt($("#reptotal").text()),$(this).closest("tr").hide();var i=$(this).attr("id");$.ajax({type:"POST",url:"",data:{removemreport:i},success:function(e){e.warning&&swal("Hata oluştu!",e.warning,"warning"),e.success&&(swal("Başarılı!",e.success,"success"),numrep-1==0?$("#reptotal").hide():$("#reptotal").text(num-1),$("#refresh").text(num-1),t.search("").columns().search("").draw())}})}else swal("İptal Edildi","Silme işlemi iptal edildi","error")})})}),$(document).on("click",".deletemovieshare",function(e){swal({title:"Doğrulama",text:"Silmek İstediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(a=>{if(a){e.preventDefault(),numrep=parseInt($("#reptotal").text()),num=parseInt($("#refresh").text()),$(this).closest("tr").hide();var t=$(this).attr("id");$.ajax({type:"POST",url:"",data:{deletemshare:t},success:function(e){e.warning&&swal("Hata oluştu!",e.warning,"warning"),e.success&&(swal("Başarılı!",e.success,"success"),numrep-1==0?$("#reptotal").hide():$("#reptotal").text(num-1),$("#refresh").text(num-1))}})}else swal("İptal Edildi","Silme işlemi iptal edildi","error")})})),$(".ajaxinforeporttvserie").length>0&&($(document).one("click","#tvserieeditload",function(){$("#tvserieeditloadcontent").append('<div class="card-header mb-0 pb-0"> <h5 class="card-title" id="heading-multiple-icons">Dizi Bağlantıları</h5><hr> <div class="heading-elements" id="rightelements"> <a href="javascript:void(0)" class="reset11" id="reset11"> <i class="ft-refresh-cw" data-toggle="tooltip" data-original-title="Tabloyu resetle" data-trigger="hover"></i> <font class="d-none d-md-inline"> Resetle</font> </a> <a href="javascript:void(0)" data-dismiss="modal" aria-label="Close"><i class="ft-x"></i><font class="d-none d-md-inline"> Çıkış</font></a> </div> </div> <div class="card-content"> <table class="table dt-responsive table-striped table-bordered data-table11" id="adminRoles11" width="100%"> <thead> <tr> <th id="datatablemin">Dizi Künyesi</th> <th>Rapor Durumu</th> <th>Rapor Tarihi</th> </tr> </thead> <tbody> </tbody> </table><br> </div>');var e=$(".ajaxinforeporttvserie").attr("id"),a=$(".ajaxinforeporttvserie").attr("name"),t=$(".data-table11").DataTable({initComplete:function(){var e=this.api();$("#adminRoles11_filter input").off(".DT").on("keyup.DT",function(a){13==a.keyCode&&e.search(this.value).draw()})},language:{infoFiltered:"",processing:"<i class='ft-refresh-cw spinner'></i>"},processing:!0,serverSide:!0,ajax:{url:e,data:{id:a}},columnDefs:[{"orderSequence":["desc","asc"],"targets":'_all'}],columns:[{data:"name",name:"tvserie_url"},{data:"reportstatus",name:"reportstatus"},{data:"lastdate",name:"updated_at"}],order:[[2,"desc"]],responsive:!0});$(".reset11").click(function(){t.search("").columns().search("").draw()}),$("#tvserieedit").on("shown.bs.modal",function(){$("#adminRoles11").DataTable().columns.adjust().responsive.recalc()}),$(document).on("click",".removetvseriereport",function(e){swal({title:"Doğrulama",text:"Silmek İstediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(a=>{if(a){e.preventDefault(),num=parseInt($("#refresh11").text()),numrep=parseInt($("#reptotal").text()),$(this).closest("tr").hide();var i=$(this).attr("id");$.ajax({type:"POST",url:"",data:{removetvreport:i},success:function(e){e.warning&&swal("Hata oluştu!",e.warning,"warning"),e.success&&(swal("Başarılı!",e.success,"success"),numrep-1==0?$("#reptotal").hide():$("#reptotal").text(num-1),$("#refresh11").text(num-1),t.search("").columns().search("").draw())}})}else swal("İptal Edildi","Silme işlemi iptal edildi","error")})})}),$(document).on("click",".deletetvserieshare",function(e){swal({title:"Doğrulama",text:"Silmek İstediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(a=>{if(a){e.preventDefault(),numrep=parseInt($("#reptotal").text()),num=parseInt($("#refresh11").text()),$(this).closest("tr").hide();var t=$(this).attr("id");$.ajax({type:"POST",url:"",data:{deletetvshare:t},success:function(e){e.warning&&swal("Hata oluştu!",e.warning,"warning"),e.success&&(swal("Başarılı!",e.success,"success"),numrep-1==0?$("#reptotal").hide():$("#reptotal").text(num-1),$("#refresh11").text(num-1))}})}else swal("İptal Edildi","Silme işlemi iptal edildi","error")})})),$(".ajaxinforeportgame").length>0&&($(document).one("click","#gameeditload",function(){$("#gameeditloadcontent").append('<div class="card-header mb-0 pb-0"> <h5 class="card-title" id="heading-multiple-icons">Oyun Linkleri</h5><hr> <div class="heading-elements" id="rightelements"> <a href="javascript:void(0)" class="reset1" id="reset1"> <i class="ft-refresh-cw" data-toggle="tooltip" data-original-title="Tabloyu resetle" data-trigger="hover"></i> <font class="d-none d-md-inline"> Resetle</font> </a> <a href="javascript:void(0)" data-dismiss="modal" aria-label="Close"><i class="ft-x"></i><font class="d-none d-md-inline"> Çıkış</font></a> </div> </div> <div class="card-content"> <table class="table dt-responsive table-striped table-bordered data-table1" id="adminRoles1" width="100%"> <thead> <tr> <th id="datatablemin">Oyun Künyesi</th> <th>Rapor Durumu</th> <th>Rapor Tarihi</th> </tr> </thead> <tbody> </tbody> </table><br> </div>');var e=$(".ajaxinforeportgame").attr("id"),a=$(".ajaxinforeportgame").attr("name"),t=$(".data-table1").DataTable({initComplete:function(){var e=this.api();$("#adminRoles1_filter input").off(".DT").on("keyup.DT",function(a){13==a.keyCode&&e.search(this.value).draw()})},language:{infoFiltered:"",processing:"<i class='ft-refresh-cw spinner'></i>"},processing:!0,serverSide:!0,ajax:{url:e,data:{id:a}},columnDefs:[{"orderSequence":["desc","asc"],"targets":'_all'}],columns:[{data:"name",name:"game_url"},{data:"reportstatus",name:"reportstatus"},{data:"lastdate",name:"updated_at"}],order:[[2,"desc"]],responsive:!0});$(".reset1").click(function(){t.search("").columns().search("").draw()}),$("#gameedit").on("shown.bs.modal",function(){$("#adminRoles1").DataTable().columns.adjust().responsive.recalc()}),$(document).on("click",".removegamereport",function(e){swal({title:"Doğrulama",text:"Silmek İstediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(a=>{if(a){e.preventDefault(),$(this).closest("tr").hide(),num=parseInt($("#refresh1").text()),numrep=parseInt($("#reptotal").text());var i=$(this).attr("id");$.ajax({type:"POST",url:"",data:{rgamereport:i},success:function(e){e.warning&&swal("Hata oluştu!",e.warning,"warning"),e.success&&(swal("Başarılı!",e.success,"success"),numrep-1==0?$("#reptotal").hide():$("#reptotal").text(num-1),$("#refresh1").text(num-1),t.search("").columns().search("").draw())}})}else swal("İptal Edildi","Silme işlemi iptal edildi","error")})})}),$(document).on("click",".deletegameshare",function(e){swal({title:"Doğrulama",text:"Silmek İstediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(a=>{if(a){e.preventDefault(),$(this).closest("tr").hide();var t=$(this).attr("id");num=parseInt($("#refresh1").text()),numrep=parseInt($("#reptotal").text()),$.ajax({type:"POST",url:"",data:{deletegshare:t},success:function(e){e.warning&&swal("Hata oluştu!",e.warning,"warning"),e.success&&(swal("Başarılı!",e.success,"success"),numrep-1==0?$("#reptotal").hide():$("#reptotal").text(num-1),$("#refresh1").text(num-1))}})}else swal("İptal Edildi","Silme işlemi iptal edildi","error")})})),$(".ajaxinforeportcomment").length>0&&($(document).one("click","#commenteditload",function(){$("#commenteditloadcontent").append('<div class="card-header mb-0 pb-0"> <h5 class="card-title" id="heading-multiple-icons">Raporlu Yorumlar</h5><hr> <div class="heading-elements" id="rightelements"> <a href="javascript:void(0)" class="reset2" id="reset2"> <i class="ft-refresh-cw" data-toggle="tooltip" data-original-title="Tabloyu resetle" data-trigger="hover"></i> <font class="d-none d-md-inline"> Resetle</font> </a> <a href="javascript:void(0)" data-dismiss="modal" aria-label="Close"><i class="ft-x"></i><font class="d-none d-md-inline"> Çıkış</font></a> </div> </div> <div class="card-content"> <table class="table dt-responsive table-striped table-bordered data-table2" id="adminRoles2" width="100%"> <thead> <tr> <th id="datatablemin">Başlık</th> <th>Rapor Durumu</th> <th>Rapor Tarihi</th> </tr> </thead> <tbody> </tbody> </table><br> </div>');var e=$(".ajaxinforeportcomment").attr("id"),a=$(".ajaxinforeportcomment").attr("name"),t=$(".data-table2").DataTable({initComplete:function(){var e=this.api();$("#adminRoles2_filter input").off(".DT").on("keyup.DT",function(a){13==a.keyCode&&e.search(this.value).draw()})},language:{infoFiltered:"",processing:"<i class='ft-refresh-cw spinner'></i>"},processing:!0,serverSide:!0,ajax:{url:e,data:{id:a}},columnDefs:[{"orderSequence":["desc","asc"],"targets":'_all'}],columns:[{data:"name",name:"url"},{data:"reportstatus",name:"reportstatus"},{data:"lastdate",name:"updated_at"}],order:[[2,"desc"]],responsive:!0});$(".reset2").click(function(){t.search("").columns().search("").draw()}),$("#commentedit").on("shown.bs.modal",function(){$("#adminRoles2").DataTable().columns.adjust().responsive.recalc()}),$(document).on("click",".removecommentreport",function(e){swal({title:"Doğrulama",text:"Silmek İstediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(a=>{if(a){e.preventDefault(),$(this).closest("tr").hide();var i=$(this).attr("id");num=parseInt($("#refresh2").text()),numrep=parseInt($("#reptotal").text()),$.ajax({type:"POST",url:"",data:{rcommentreport:i},success:function(e){e.warning&&swal("Hata oluştu!",e.warning,"warning"),e.success&&(swal("Başarılı!",e.success,"success"),numrep-1==0?$("#reptotal").hide():$("#reptotal").text(num-1),$("#refresh2").text(num-1),t.search("").columns().search("").draw())}})}else swal("İptal Edildi","Silme işlemi iptal edildi","error")})})}),$(document).on("click",".deletecommentshare",function(e){swal({title:"Doğrulama",text:"Silmek İstediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(a=>{if(a){e.preventDefault(),$(this).closest("tr").hide();var t=$(this).attr("id");num=parseInt($("#refresh2").text()),numrep=parseInt($("#reptotal").text()),$.ajax({type:"POST",url:"",data:{rrcomment:t},success:function(e){e.warning&&swal("Hata oluştu!",e.warning,"warning"),e.success&&(swal("Başarılı!",e.success,"success"),numrep-1==0?$("#reptotal").hide():$("#reptotal").text(num-1),$("#refresh2").text(num-1))}})}else swal("İptal Edildi","Silme işlemi iptal edildi","error")})})),$(".ajaxinforeportgeneral").length>0&&$(document).one("click","#generaleditload",function(){$("#generaleditloadcontent").append('<div class="card-header mb-0 pb-0"> <h5 class="card-title" id="heading-multiple-icons">Genel Paylaşımlar</h5><hr> <div class="heading-elements" id="rightelements"> <a href="javascript:void(0)" class="reset3" id="reset3"> <i class="ft-refresh-cw" data-toggle="tooltip" data-original-title="Tabloyu resetle" data-trigger="hover"></i> <font class="d-none d-md-inline"> Resetle</font> </a> <a href="javascript:void(0)" data-dismiss="modal" aria-label="Close"><i class="ft-x"></i><font class="d-none d-md-inline"> Çıkış</font></a> </div> </div> <div class="card-content"> <table class="table dt-responsive table-striped table-bordered data-table3" id="adminRoles3" width="100%"> <thead> <tr> <th id="datatablemin">Konu Başlığı</th> <th>Rapor Durumu</th> <th>Rapor Tarihi</th> </tr> </thead> <tbody> </tbody> </table><br> </div>');var e=$(".ajaxinforeportgeneral").attr("id"),a=$(".ajaxinforeportgeneral").attr("name"),t=$(".data-table3").DataTable({initComplete:function(){var e=this.api();$("#adminRoles3_filter input").off(".DT").on("keyup.DT",function(a){13==a.keyCode&&e.search(this.value).draw()})},language:{infoFiltered:"",processing:"<i class='ft-refresh-cw spinner'></i>"},processing:!0,serverSide:!0,ajax:{url:e,data:{id:a}},columnDefs:[{"orderSequence":["desc","asc"],"targets":'_all'}],columns:[{data:"name",name:"title"},{data:"reportstatus",name:"reportstatus"},{data:"lastdate",name:"updated_at"}],order:[[2,"desc"]],responsive:!0});$(".reset3").click(function(){t.search("").columns().search("").draw()}),$("#generaledit").on("shown.bs.modal",function(){$("#adminRoles3").DataTable().columns.adjust().responsive.recalc()}),$(document).on("click",".removegeneralreport",function(e){swal({title:"Doğrulama",text:"Silmek İstediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(a=>{if(a){e.preventDefault(),num=parseInt($("#refresh3").text()),$(this).closest("tr").hide(),numrep=parseInt($("#reptotal").text());var i=$(this).attr("id");$.ajax({type:"POST",url:"",data:{removegeneralreport:i},success:function(e){e.warning&&swal("Hata oluştu!",e.warning,"warning"),e.success&&(swal("Başarılı!",e.success,"success"),numrep-1==0?$("#reptotal").hide():$("#reptotal").text(num-1),$("#refresh3").text(num-1),t.search("").columns().search("").draw())}})}else swal("İptal Edildi","Silme işlemi iptal edildi","error")})})}),$(".ajaxinforeportlist").length>0&&$(document).one("click","#listeditload",function(){$("#listeditloadcontent").append('<div class="card-header mb-0 pb-0"> <h5 class="card-title" id="heading-multiple-icons">Kullanıcı Listeleri</h5><hr> <div class="heading-elements" id="rightelements"> <a href="javascript:void(0)" class="reset4" id="reset4"> <i class="ft-refresh-cw" data-toggle="tooltip" data-original-title="Tabloyu resetle" data-trigger="hover"></i> <font class="d-none d-md-inline"> Resetle</font> </a> <a href="javascript:void(0)" data-dismiss="modal" aria-label="Close"><i class="ft-x"></i><font class="d-none d-md-inline"> Çıkış</font></a> </div> </div> <div class="card-content"> <table class="table dt-responsive table-striped table-bordered data-table4" id="adminRoles4" width="100%"> <thead> <tr> <th id="datatablemin">Konu Başlığı</th> <th>Rapor Durumu</th> <th>Rapor Tarihi</th> </tr> </thead> <tbody> </tbody> </table><br> </div>');var e=$(".ajaxinforeportlist").attr("id"),a=$(".ajaxinforeportlist").attr("name"),t=$(".data-table4").DataTable({initComplete:function(){var e=this.api();$("#adminRoles4_filter input").off(".DT").on("keyup.DT",function(a){13==a.keyCode&&e.search(this.value).draw()})},language:{infoFiltered:"",processing:"<i class='ft-refresh-cw spinner'></i>"},processing:!0,serverSide:!0,ajax:{url:e,data:{id:a}},columnDefs:[{"orderSequence":["desc","asc"],"targets":'_all'}],columns:[{data:"name",name:"title"},{data:"reportstatus",name:"reportstatus"},{data:"lastdate",name:"updated_at"}],order:[[2,"desc"]],responsive:!0});$(".reset4").click(function(){t.search("").columns().search("").draw()}),$("#listedit").on("shown.bs.modal",function(){$("#adminRoles4").DataTable().columns.adjust().responsive.recalc()}),$(document).on("click",".removelistreport",function(e){swal({title:"Doğrulama",text:"Silmek İstediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(a=>{if(a){e.preventDefault(),$(this).closest("tr").hide(),num=parseInt($("#refresh4").text()),numrep=parseInt($("#reptotal").text());var t=$(this).attr("id");$.ajax({type:"POST",url:"",data:{removelistreport:t},success:function(e){e.warning&&swal("Hata oluştu!",e.warning,"warning"),e.success&&(swal("Başarılı!",e.success,"success"),numrep-1==0?$("#reptotal").hide():$("#reptotal").text(num-1),$("#refresh4").text(num-1))}})}else swal("İptal Edildi","Silme işlemi iptal edildi","error")})})}),$(".ajaxinforeporttcomment").length>0&&($(document).one("click","#rtcommenteditload",function(){$("#rtcommenteditloadcontent").append('<div class="card-header mb-0 pb-0"> <h5 class="card-title" id="heading-multiple-icons">Raporlu Yorumlar</h5><hr> <div class="heading-elements" id="rightelements"> <a href="javascript:void(0)" class="reset5" id="reset5"> <i class="ft-refresh-cw" data-toggle="tooltip" data-original-title="Tabloyu resetle" data-trigger="hover"></i> <font class="d-none d-md-inline"> Resetle</font> </a> <a href="javascript:void(0)" data-dismiss="modal" aria-label="Close"><i class="ft-x"></i><font class="d-none d-md-inline"> Çıkış</font></a> </div> </div> <div class="card-content"> <table class="table dt-responsive table-striped table-bordered data-table5" id="adminRoles5" width="100%"> <thead> <tr> <th id="datatablemin">Konu Başlığı</th> <th>Rapor Durumu</th> <th>Rapor Tarihi</th> </tr> </thead> <tbody> </tbody> </table><br> </div>');var e=$(".ajaxinforeporttcomment").attr("id"),a=$(".ajaxinforeporttcomment").attr("name"),t=$(".data-table5").DataTable({initComplete:function(){var e=this.api();$("#adminRoles5_filter input").off(".DT").on("keyup.DT",function(a){13==a.keyCode&&e.search(this.value).draw()})},language:{infoFiltered:"",processing:"<i class='ft-refresh-cw spinner'></i>"},processing:!0,serverSide:!0,ajax:{url:e,data:{id:a}},columnDefs:[{"orderSequence":["desc","asc"],"targets":'_all'}],columns:[{data:"name",name:"url"},{data:"reportstatus",name:"reportstatus"},{data:"lastdate",name:"updated_at"}],order:[[2,"desc"]],responsive:!0});$(".reset5").click(function(){t.search("").columns().search("").draw()}),$("#rtcommentedit").on("shown.bs.modal",function(){$("#adminRoles5").DataTable().columns.adjust().responsive.recalc()}),$(document).on("click",".removetcommentreport",function(e){swal({title:"Doğrulama",text:"Silmek İstediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(a=>{if(a){e.preventDefault(),$(this).closest("tr").hide(),num=parseInt($("#refresh5").text()),numrep=parseInt($("#reptotal").text());var i=$(this).attr("id");$.ajax({type:"POST",url:"",data:{rtopiccommentreport:i},success:function(e){e.warning&&swal("Hata oluştu!",e.warning,"warning"),e.success&&(swal("Başarılı!",e.success,"success"),numrep-1==0?$("#reptotal").hide():$("#reptotal").text(num-1),$("#refresh5").text(num-1),t.search("").columns().search("").draw())}})}else swal("İptal Edildi","Silme işlemi iptal edildi","error")})})}),$(document).on("click",".deletetcommentshare",function(e){swal({title:"Doğrulama",text:"Silmek İstediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(a=>{if(a){e.preventDefault(),$(this).closest("tr").hide();var t=$(this).attr("id");num=parseInt($("#refresh5").text()),numrep=parseInt($("#reptotal").text()),$.ajax({type:"POST",url:"",data:{rrtopiccomment:t},success:function(e){e.warning&&swal("Hata oluştu!",e.warning,"warning"),e.success&&(swal("Başarılı!",e.success,"success"),numrep-1==0?$("#reptotal").hide():$("#reptotal").text(num-1),$("#refresh5").text(num-1))}})}else swal("İptal Edildi","Silme işlemi iptal edildi","error")})})),$(document).popover({selector:"#baba",html:!0,trigger:"hover",placement:"right"});