$.fn.dataTable.ext.errMode="throw",$(document).one("click","#movieeditload",function(){$("#movieeditloadcontent").append('<div class="card-header mb-0 pb-0"> <h5 class="card-title" id="heading-multiple-icons">Film Bağlantılarım</h5> <div class="d-inline d-md-none"> <br> <select class="form-control" id="quality1"><option value="">Kalite</option><option value="watch">İzleme Linkleri</option><option value="download">İndirme Linkleri</option><optgroup label="İndirme"><option>BluRay</option><option>BDRip</option><option>CAM</option><option>CAMRip</option><option>DVDRip</option><option>HDRip</option><option>HDTS</option><option>HDTV</option><option>WEBRip</option><option>DVD-R</option><option>TVRip</option></optgroup><optgroup label="İzleme"><option>HD</option><option>720p</option><option>1080p</option><option>HDRip</option><option>TS</option></optgroup></select> <a class="dropdown-toggle success float-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ft-plus"></i></a> <div class="dropdown-menu"> <a class="dropdown-item p-1 info" id="sdate">Tarihe göre</a> <a class="dropdown-item p-1 info" id="sview">İzlenmeye göre</a> <a class="dropdown-item p-1 info" id="sreport">Raporlular</a> </div> <br> </div> <hr> <div class="heading-elements" id="rightelements"> <a href="javascript:void(0)" class="dubtr" id="tr"> <i class="ft-volume-2" data-toggle="tooltip" data-original-title="Dublajlı Filmler" data-trigger="hover"></i> <font class="d-none d-md-inline"> Dublajlı</font> </a> <a href="javascript:void(0)" class="dubalt" id="tr"> <i class="ft-list" data-toggle="tooltip" data-original-title="Altyazılı" data-trigger="hover"></i> <font class="d-none d-md-inline"> Altyazılı</font> </a> <a href="javascript:void(0)" class="reset" id="reset"> <i class="ft-refresh-cw" data-toggle="tooltip" data-original-title="Tabloyu resetle" data-trigger="hover"></i> <font class="d-none d-md-inline"> Resetle</font> </a> <a href="javascript:void(0)" data-dismiss="modal" aria-label="Close"><i class="ft-x"></i><font class="d-none d-md-inline"> Çıkış</font></a> </div> </div> <div class="card-content"> <table class="table dt-responsive table-striped table-bordered data-table" id="adminRoles" width="100%"> <thead> <tr> <th id="datatablemin">Film Künyesi</th> <th>Rapor Durumu</th> <th>Eklenme Tarihi</th> <th>Görüntüleme</th> </tr> </thead> <tbody> </tbody> </table><br> </div>');var a=$(".ajaxinfomovies").attr("id"),e=$(".ajaxinfomovies").attr("name"),t=$(".data-table").DataTable({dom:'<"qualities">frtip',initComplete:function(){var a=this.api();$("#adminRoles_filter input").off(".DT").on("keyup.DT",function(e){13==e.keyCode&&a.search(this.value).draw()})},language:{infoFiltered:"",processing:"<i class='ft-refresh-cw spinner'></i>"},processing:!0,serverSide:!0,ajax:{url:a,data:{id:e}},columnDefs:[{"orderSequence":["desc","asc"],"targets":'_all'}],columns:[{data:"name",name:"name"},{data:"reportstatus",name:"error"},{data:"lastdate",name:"created_at"},{data:"edit",name:"views"},{data:"quality",name:"quality",searchable:!0,visible:!1},{data:"movie_url",name:"movie_url",searchable:!0,visible:!1},{data:"dubbing",name:"dubbing",searchable:!0,visible:!1},{data:"type",name:"type",searchable:!0,visible:!1}],order:[[1,"desc"]],responsive:!0});$("div.qualities").html('<select class="form-control" id="quality"><option value="">Kalite</option><option value="watch">İzleme Linkleri</option><option value="download">İndirme Linkleri</option><optgroup label="İndirme"><option>BluRay</option><option>BDRip</option><option>CAM</option><option>CAMRip</option><option>DVDRip</option><option>HDRip</option><option>HDTS</option><option>HDTV</option><option>WEBRip</option><option>DVD-R</option><option>TVRip</option></optgroup><optgroup label="İzleme"><option>HD</option><option>720p</option><option>1080p</option><option>HDRip</option><option>TS</option></optgroup></select>'),$(".qualities").addClass("d-none d-md-inline"),$(".dubtr").click(function(){t.columns(6).search($(this).attr("id")).draw()}),$(".dubalt").click(function(){t.column(6).search("^(?!.*tr).*$",!0).draw()}),$(document).on("change","[id=quality]",function(){"download"==$(this).val()&&t.columns(7).search("download").draw(),"watch"==$(this).val()&&t.column(7).search("watch").draw(),"watch"!=$(this).val()&&"download"!=$(this).val()&&t.columns(4).search($(this).val()).draw()}),$(document).on("change","[id=quality1]",function(){"download"==$(this).val()&&t.columns(7).search("download").draw(),"watch"==$(this).val()&&t.column(7).search("watch").draw(),"watch"!=$(this).val()&&"download"!=$(this).val()&&t.columns(4).search($(this).val()).draw()}),$("#sdate").click(function(){$("#adminRoles").DataTable().order([2,"desc"]).draw()}),$("#sreport").click(function(){t.columns(1).search("yes").draw()}),$("#sview").click(function(){$("#adminRoles").DataTable().order([3,"desc"]).draw()}),$(".reset").click(function(){$("#quality").val(""),$("#quality1").val(""),t.search("").columns().search("").draw()}),$(document).on("click",".removemoviereport",function(a){swal({title:"Doğrulama",text:"Silmek istediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(e=>{if(e){a.preventDefault(),$(this).closest("tr").hide(),num=parseInt($("#refresh2").text());var i=$(this).attr("id");$.ajax({type:"POST",url:"",data:{removemreport:i},success:function(a){a.warning&&swal("Hata oluştu!",a.warning,"warning"),a.success&&(swal("Başarılı!",a.success,"success"),$("#refresh2").text(num-1),t.search("").columns().search("").draw())}})}else swal("İptal Edildi","Silme işlemi iptal edildi","error")})})}),$(document).one("click","#tvserieeditload",function(){$("#tvserieeditloadcontent").append('<div class="card-header mb-0 pb-0"> <h5 class="card-title" id="heading-multiple-icons">Dizi Bağlantılarım</h5> <div class="d-inline d-md-none"> <br> <select class="form-control" id="quality11"><option value="">Kalite</option><option value="watch">İzleme Linkleri</option><option value="download">İndirme Linkleri</option><optgroup label="İndirme"><option>BluRay</option><option>BDRip</option><option>CAM</option><option>CAMRip</option><option>DVDRip</option><option>HDRip</option><option>HDTS</option><option>HDTV</option><option>WEBRip</option><option>DVD-R</option><option>TVRip</option></optgroup><optgroup label="İzleme"><option>HD</option><option>720p</option><option>1080p</option><option>HDRip</option><option>TS</option></optgroup></select> <a class="dropdown-toggle success float-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ft-plus"></i></a> <div class="dropdown-menu"> <a class="dropdown-item p-1 info" id="sdate11">Tarihe göre</a> <a class="dropdown-item p-1 info" id="sview11">İzlenmeye göre</a> <a class="dropdown-item p-1 info" id="sreport11">Raporlular</a> </div> <br> </div> <hr> <div class="heading-elements" id="rightelements"> <a href="javascript:void(0)" class="dubtr11" id="tr"> <i class="ft-volume-2" data-toggle="tooltip" data-original-title="Dublajlı Filmler" data-trigger="hover"></i> <font class="d-none d-md-inline"> Dublajlı</font> </a> <a href="javascript:void(0)" class="dubalt11" id="tr"> <i class="ft-list" data-toggle="tooltip" data-original-title="Altyazılı" data-trigger="hover"></i> <font class="d-none d-md-inline"> Altyazılı</font> </a> <a href="javascript:void(0)" class="reset11" id="reset11"> <i class="ft-refresh-cw" data-toggle="tooltip" data-original-title="Tabloyu resetle" data-trigger="hover"></i> <font class="d-none d-md-inline"> Resetle</font> </a> <a href="javascript:void(0)" data-dismiss="modal" aria-label="Close"><i class="ft-x"></i><font class="d-none d-md-inline"> Çıkış</font></a> </div> </div> <div class="card-content"> <table class="table dt-responsive table-striped table-bordered data-table11" id="adminRoles11" width="100%"> <thead> <tr> <th id="datatablemin">Dizi Künyesi</th> <th>Rapor Durumu</th> <th>Eklenme Tarihi</th> <th>Görüntüleme</th> </tr> </thead> <tbody> </tbody> </table><br> </div>');var a=$(".ajaxinfotvseries").attr("id"),e=$(".ajaxinfotvseries").attr("name"),t=$(".data-table11").DataTable({dom:'<"qualities11">frtip',initComplete:function(){var a=this.api();$("#adminRoles11_filter input").off(".DT").on("keyup.DT",function(e){13==e.keyCode&&a.search(this.value).draw()})},language:{infoFiltered:"",processing:"<i class='ft-refresh-cw spinner'></i>"},processing:!0,serverSide:!0,ajax:{url:a,data:{id:e}},columnDefs:[{"orderSequence":["desc","asc"],"targets":'_all'}],columns:[{data:"name",name:"name"},{data:"reportstatus",name:"error"},{data:"lastdate",name:"created_at"},{data:"edit",name:"views"},{data:"quality",name:"quality",searchable:!0,visible:!1},{data:"tvserie_url",name:"tvserie_url",searchable:!0,visible:!1},{data:"dubbing",name:"dubbing",searchable:!0,visible:!1},{data:"type",name:"type",searchable:!0,visible:!1}],order:[[1,"desc"]],responsive:!0});$("div.qualities11").html('<select class="form-control" id="quality12"><option value="">Kalite</option><option value="watch">İzleme Linkleri</option><option value="download">İndirme Linkleri</option><optgroup label="İndirme"><option>BluRay</option><option>BDRip</option><option>CAM</option><option>CAMRip</option><option>DVDRip</option><option>HDRip</option><option>HDTS</option><option>HDTV</option><option>WEBRip</option><option>DVD-R</option><option>TVRip</option></optgroup><optgroup label="İzleme"><option>HD</option><option>720p</option><option>1080p</option><option>HDRip</option><option>TS</option></optgroup></select>'),$(".qualities11").addClass("d-none d-md-inline"),$(".dubtr11").click(function(){t.columns(6).search($(this).attr("id")).draw()}),$(".dubalt11").click(function(){t.column(6).search("^(?!.*tr).*$",!0).draw()}),$(document).on("change","#quality11",function(){"download"==$(this).val()&&t.columns(7).search("download").draw(),"watch"==$(this).val()&&t.column(7).search("watch").draw(),"watch"!=$(this).val()&&"download"!=$(this).val()&&t.columns(4).search($(this).val()).draw()}),$(document).on("change","#quality12",function(){"download"==$(this).val()&&t.columns(7).search("download").draw(),"watch"==$(this).val()&&t.column(7).search("watch").draw(),"watch"!=$(this).val()&&"download"!=$(this).val()&&t.columns(4).search($(this).val()).draw()}),$("#sdate11").click(function(){$("#adminRoles11").DataTable().order([2,"desc"]).draw()}),$("#sreport11").click(function(){t.columns(1).search("yes").draw()}),$("#sview11").click(function(){$("#adminRoles11").DataTable().order([3,"desc"]).draw()}),$(".reset11").click(function(){$("#quality11").val(""),$("#quality12").val(""),t.search("").columns().search("").draw()}),$(document).on("click",".removetvseriereport",function(a){swal({title:"Doğrulama",text:"Silmek istediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(e=>{if(e){a.preventDefault(),$(this).closest("tr").hide(),num=parseInt($("#refresh12").text());var i=$(this).attr("id");$.ajax({type:"POST",url:"",data:{removetvreport:i},success:function(a){a.warning&&swal("Hata oluştu!",a.warning,"warning"),a.success&&(swal("Başarılı!",a.success,"success"),$("#refresh12").text(num-1),t.search("").columns().search("").draw())}})}else swal("İptal Edildi","Silme işlemi iptal edildi","error")})})}),$(document).one("click","#gameeditload",function(){$("#gameeditloadcontent").append('<div class="card-header mb-0 pb-0"> <h5 class="card-title" id="heading-multiple-icons">Oyun Linklerim</h5> <div class="d-inline d-md-none"> <br> <select class="form-control" id="type"><option value="">Platform</option><option>PC</option><option>Playstation</option><option>Xbox</option><option>Ninento</option><option>Mobile</option></select> <a class="dropdown-toggle success float-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ft-plus"></i></a> <div class="dropdown-menu"> <a class="dropdown-item p-1 info" id="sdate1">Tarihe göre</a> <a class="dropdown-item p-1 info" id="sdownload">İndirmeye göre</a> <a class="dropdown-item p-1 info" id="sreport1">Raporlular</a> </div> <br> </div> <hr> <div class="heading-elements" id="rightelements"> <a href="javascript:void(0)" class="addon" id="addon"> <i class="ft-share-2" data-toggle="tooltip" data-original-title="Addons" data-trigger="hover"></i> <font class="d-none d-md-inline"> Addon</font> </a> <a href="javascript:void(0)" class="reset1" id="reset1"> <i class="ft-refresh-cw" data-toggle="tooltip" data-original-title="Tabloyu resetle" data-trigger="hover"></i> <font class="d-none d-md-inline"> Resetle</font> </a> <a href="javascript:void(0)" data-dismiss="modal" aria-label="Close"><i class="ft-x"></i><font class="d-none d-md-inline"> Çıkış</font></a> </div> </div> <div class="card-content"> <table class="table dt-responsive table-striped table-bordered data-table1" id="adminRoles1" width="100%"> <thead> <tr> <th id="datatablemin">Oyun Künyesi</th> <th>Rapor Durumu</th> <th>Eklenme Tarihi</th> <th>Görüntüleme</th> </tr> </thead> <tbody> </tbody> </table><br> </div>');var a=$(".ajaxinfogames").attr("id"),e=$(".ajaxinfogames").attr("name"),t=$(".data-table1").DataTable({dom:'<"platform">frtip',initComplete:function(){var a=this.api();$("#adminRoles1_filter input").off(".DT").on("keyup.DT",function(e){13==e.keyCode&&a.search(this.value).draw()})},language:{infoFiltered:"",processing:"<i class='ft-refresh-cw spinner'></i>"},processing:!0,serverSide:!0,ajax:{url:a,data:{id:e}},columnDefs:[{"orderSequence":["desc","asc"],"targets":'_all'}],columns:[{data:"name",name:"name"},{data:"reportstatus",name:"error"},{data:"lastdate",name:"created_at"},{data:"edit",name:"views"},{data:"game_url",name:"game_url",searchable:!0,visible:!1},{data:"platform",name:"platform",searchable:!0,visible:!1},{data:"type",name:"type",searchable:!0,visible:!1}],order:[[1,"desc"]],responsive:!0});$("div.platform").html('<select class="form-control" id="type1"><option value="">Tüm platformlar</option><option>PC</option><option>Playstation</option><option>Xbox</option><option>Ninento</option><option>Mobile</option></select>'),$(".platform").addClass("d-none d-md-inline"),$("#type").change(function(){t.columns(5).search($(this).val()).draw()}),$("#type1").change(function(){t.columns(5).search($(this).val()).draw()}),$(".reset1").click(function(){$("#type").val(""),$("#type1").val(""),t.search("").columns().search("").draw()}),$("#sdownload").click(function(){$("#adminRoles1").DataTable().order([3,"desc"]).draw()}),$("#sdate1").click(function(){$("#adminRoles1").DataTable().order([2,"desc"]).draw()}),$("#sreport1").click(function(){t.columns(1).search("yes").draw()}),$(".addon").click(function(){t.columns(6).search("addon").draw()}),$(document).on("click",".removegamereport",function(a){swal({title:"Doğrulama",text:"Silmek istediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(e=>{if(e){a.preventDefault(),num=parseInt($("#refresh3").text()),$(this).closest("tr").hide();var i=$(this).attr("id");$.ajax({type:"POST",url:"",data:{removegreport:i},success:function(a){a.warning&&swal("Hata oluştu!",a.warning,"warning"),a.success&&(swal("Başarılı!",a.success,"success"),$("#refresh3").text(num-1),t.search("").columns().search("").draw())}})}else swal("İptal Edildi","Silme işlemi iptal edildi","error")})})}),$(document).one("click","#topicshareload",function(){$("#topicshareloadcontent").append('<div class="card-header mb-0 pb-0"> <h5 class="card-title" id="heading-multiple-icons">Konularım</h5> <div class="d-inline d-md-none"> <br> <select class="form-control" id="topictype1"><option value="">Tümü</option><option value="listtopic">Kullanıcı Listeleri</option><option value="generaltopic">Genel Paylaşımlar</option></select> <a class="dropdown-toggle success float-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ft-plus"></i></a> <div class="dropdown-menu"> <a class="dropdown-item p-1 info" id="sdate2">Tarihe göre</a> <a class="dropdown-item p-1 info" id="scomment">Yanıta göre</a> <a class="dropdown-item p-1 info" id="sreport2">Raporlular</a> </div> <br> </div> <hr> <div class="heading-elements" id="rightelements"> <a href="javascript:void(0)" class="reset2" id="reset2"> <i class="ft-refresh-cw" data-toggle="tooltip" data-original-title="Tabloyu resetle" data-trigger="hover"></i> <font class="d-none d-md-inline"> Resetle</font> </a> <a href="javascript:void(0)" data-dismiss="modal" aria-label="Close"><i class="ft-x"></i><font class="d-none d-md-inline"> Çıkış</font></a> </div> </div> <div class="card-content"> <table class="table dt-responsive table-striped table-bordered data-table2" id="adminRoles2" width="100%"> <thead> <tr> <th id="datatablemin">Konu Başlığı</th> <th>Rapor Durumu</th> <th>Yanıt Sayısı</th> <th>Eklenme Tarihi</th> </tr> </thead> <tbody> </tbody> </table><br> </div>');var a=$(".ajaxinfotopics").attr("id"),e=$(".ajaxinfotopics").attr("name"),t=$(".data-table2").DataTable({dom:'<"toolbar">frtip',initComplete:function(){var a=this.api();$("#adminRoles2_filter input").off(".DT").on("keyup.DT",function(e){13==e.keyCode&&a.search(this.value).draw()})},language:{infoFiltered:"",processing:"<i class='ft-refresh-cw spinner'></i>"},processing:!0,serverSide:!0,ajax:{url:a,data:{id:e}},columnDefs:[{"orderSequence":["desc","asc"],"targets":'_all'}],columns:[{data:"name",name:"name"},{data:"reportstatus",name:"error"},{data:"answer",name:"answer"},{data:"lastdate",name:"created_at"},{data:"title",name:"title",searchable:!0,visible:!1},{data:"type",name:"type",visible:!1}],order:[[1,"desc"]],responsive:!0});$("div.toolbar").html('<select class="form-control" id="topictype"><option value="">Tüm konular</option><option value="listtopic">Kullanıcı Listeleri</option><option value="generaltopic">Genel Paylaşımlar</option></select>'),$(".toolbar").addClass("d-none d-md-inline"),$(document).on("change","#topictype",function(){t.columns(5).search($(this).val()).draw()}),$(document).on("change","#topictype1",function(){t.columns(5).search($(this).val()).draw()}),$(".reset2").click(function(){$("#topictype").val(""),$("#topictype1").val(""),t.search("").columns().search("").draw()}),$("#scomment").click(function(){$("#adminRoles2").DataTable().order([2,"desc"]).draw()}),$("#sdate2").click(function(){$("#adminRoles2").DataTable().order([3,"desc"]).draw()}),$("#sreport2").click(function(){t.columns(1).search("yes").draw()}),$(document).on("click",".removetopicreport",function(a){swal({title:"Doğrulama",text:"Silmek istediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(e=>{if(e){a.preventDefault(),$(this).closest("tr").hide(),num=parseInt($("#refresh4").text());var i=$(this).attr("id");$.ajax({type:"POST",url:"",data:{deletetrshare:i},success:function(a){a.warning&&swal("Hata oluştu!",a.warning,"warning"),a.success&&(swal("Başarılı!",a.success,"success"),$("#refresh4").text(num-1),t.search("").columns().search("").draw())}})}else swal("İptal Edildi","Silme işlemi iptal edildi","error")})})}),$("#movieedit").on("shown.bs.modal",function(){$("#adminRoles").DataTable().columns.adjust().responsive.recalc()}),$("#gameedit").on("shown.bs.modal",function(){$("#adminRoles1").DataTable().columns.adjust().responsive.recalc()}),$("#topicshare").on("shown.bs.modal",function(){$("#adminRoles2").DataTable().columns.adjust().responsive.recalc()}),$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$(document).on("click",".deletemovieshare",function(a){swal({title:"Doğrulama",text:"Silmek istediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(e=>{if(e){a.preventDefault(),$(this).closest("tr").hide(),num=parseInt($("#refresh").text());var t=$(this).attr("id");$.ajax({type:"POST",url:"",data:{deletemshare:t},success:function(a){a.warning&&swal("Hata oluştu!",a.warning,"warning"),a.success&&(swal("Başarılı!",a.success,"success"),$("#refresh").text(num-1))}})}else swal("İptal Edildi","Silme işlemi iptal edildi","error")})}),$(document).on("click",".deletetvserieshare",function(a){swal({title:"Doğrulama",text:"Silmek istediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(e=>{if(e){a.preventDefault(),$(this).closest("tr").hide(),num=parseInt($("#refresh11").text());var t=$(this).attr("id");$.ajax({type:"POST",url:"",data:{deletetvshare:t},success:function(a){a.warning&&swal("Hata oluştu!",a.warning,"warning"),a.success&&(swal("Başarılı!",a.success,"success"),$("#refresh11").text(num-1))}})}else swal("İptal Edildi","Silme işlemi iptal edildi","error")})}),$(document).on("click",".deletegameshare",function(a){swal({title:"Doğrulama",text:"Silmek istediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(e=>{if(e){a.preventDefault(),$(this).closest("tr").hide(),num=parseInt($("#refresh1").text());var t=$(this).attr("id");$.ajax({type:"POST",url:"",data:{deletegshare:t},success:function(a){a.warning&&swal("Hata oluştu!",a.warning,"warning"),a.success&&(swal("Başarılı!",a.success,"success"),$("#refresh1").text(num-1))}})}else swal("İptal Edildi","Silme işlemi iptal edildi","error")})}),$(document).popover({selector:"#baba",html:!0,trigger:"hover",placement:"right",content:function(){return'<img width="200" src="'+$(this).data("img")+'" />'}});