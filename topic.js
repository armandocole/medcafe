function popitup(t){var e=Number(screen.width/2-320),a=Number(screen.height/2-240);return newwindow=window.open(t,"name","height=480,width=640,directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no, top="+a+", left="+e),window.focus&&newwindow.focus(),!1}if($.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$(document).ready(function(){$("#mainsend").attr("disabled",!0),$("#mainreply").on("keyup",function(){var t=$("#mainreply").val();""!=t&&t.length>="10"?$("#mainsend").attr("disabled",!1):$("#mainsend").attr("disabled",!0)})}),$(document).on("keyup","#subreply",function(){var t=$("#subreply").val();""!=t&&t.length>="10"?$("#subsend").attr("disabled",!1):$("#subsend").attr("disabled",!0)}),$(document).on("click",".like",function(t){t.preventDefault(),num=parseInt($(this).siblings("#commentlike").text()),$(this).attr("class","dislike"),$(this).siblings("#commentlike").text(num+1);var e=$(this).attr("id"),a=$(this).attr("name");$.ajax({type:"POST",url:"",data:{commentid:e,commentlike:"commentlike",typed:a},success:function(t){t.warning&&swal("Hata oluştu!",t.warning,"warning"),t.success&&swal("Başarılı!",t.success,"success")}})}),$(document).on("click",".dislike",function(t){t.preventDefault(),num=parseInt($(this).siblings("#commentlike").text()),$(this).attr("class","like"),$(this).siblings("#commentlike").text(num-1);var e=$(this).attr("id"),a=$(this).attr("name");$.ajax({type:"POST",url:"",data:{commentid:e,commentdislike:"commentdislike",typed:a},success:function(t){t.warning&&swal("Hata oluştu!",t.warning,"warning"),t.success&&swal("Başarılı!",t.success,"success")}})}),$("#mainreply").focus(function(){$("#commentbutton").show()}),$("#close").click(function(){$("#commentbutton").hide(),$("#mainreply").val("")}),$(document).on("click","#closereply",function(){$("#yourreply").remove()}),$(document).on("click",".deletecommentsub",function(t){swal({title:"Doğrulama",text:"Silmek istediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(e=>{if(e){t.preventDefault();var a=$(this).attr("id");$.ajax({type:"POST",url:"",data:{name:a,subcommentid:"subcommentid"},success:function(t){t.warning&&swal("Hata oluştu!",t.warning,"warning"),t.success&&(swal("Başarılı!",t.success,"success"),$("#commentsub"+a).hide())}})}else swal("İptal Edildi","Silme işlemi iptal edildi","error")})}),$(document).on("click",".deletecomment",function(t){swal({title:"Doğrulama",text:"Silmek istediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(e=>{if(e){t.preventDefault();var a=$(this).attr("id");$.ajax({type:"POST",url:"",data:{name:a,commentid:"commentid"},success:function(t){t.warning&&swal("Hata oluştu!",t.warning,"warning"),t.success&&(swal("Başarılı!",t.success,"success"),$("#comment"+a).hide())}})}else swal("İptal Edildi","Silme işlemi iptal edildi","error")})}),$(document).on("click","#eraselink",function(t){swal({title:"Doğrulama",text:"Silmek istediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(e=>{if(e){t.preventDefault();var a=$(this).attr("class");$.ajax({type:"POST",url:"",data:{name:a,watchlistid:"watchlistid"},success:function(t){t.warning&&swal("Hata oluştu!",t.warning,"warning"),t.success&&(swal("Başarılı!",t.success,"success"),$("#"+a).hide())}})}else swal("İptal Edildi","Silme işlemi iptal edildi","error")})}),$("#type-success5").click(function(t){t.preventDefault();num=parseInt($("#refreshcount").text()),$.ajax({type:"POST",url:"",data:{name:"favoritemovie"},success:function(t){t.warning&&swal("Hata oluştu!",t.warning,"warning"),t.success&&(swal("Başarılı!",t.success,"success"),$(".favory").hide(),$("#refreshcount").text(num+1),$("#myfavor").append('<button type="button" class="btn btn-square btn-outline-danger mr-1"><i class="ft-heart"></i> Favoriniz</button>'))}})}),$(document).on("click","#type-success1",function(t){t.preventDefault();$.ajax({type:"POST",url:"",data:{name:"watchlist"},success:function(t){t.warning&&swal("Hata oluştu!",t.warning,"warning"),t.success&&(swal("Başarılı!",t.success,"success"),$(".watchlist").hide())}})}),$("#type-success2").click(function(t){t.preventDefault();$.ajax({type:"POST",url:"",data:{name:"follow"},success:function(t){t.warning&&swal("Hata oluştu!",t.warning,"warning"),t.success&&(swal("Başarılı!",t.success,"success"),$(".follow").hide())}})}),$(document).on("click","#type-success3",function(t){t.preventDefault();num=parseInt($("#refreshcount1").text()),$.ajax({type:"POST",url:"",data:{name:"watched"},success:function(t){t.warning&&swal("Hata oluştu!",t.warning,"warning"),t.success&&(swal("Başarılı!",t.success,"success"),$(".watched").hide(),$("#refreshcount1").text(num+1),$("#mywatched").append('<button type="button" class="btn btn-square btn-outline-primary mr-1"><i class="ft-check-square"></i> İzlendi</button>'))}})}),$(document).on("click","#type-success6",function(t){t.preventDefault();num=parseInt($("#refreshcount1").text()),$.ajax({type:"POST",url:"",data:{name:"watched"},success:function(t){t.warning&&swal("Hata oluştu!",t.warning,"warning"),t.success&&(swal("Başarılı!",t.success,"success"),$(".watched").hide(),$("#refreshcount1").text(num+1),$("#mywatched").append('<button type="button" class="btn btn-square btn-outline-primary mr-1"><i class="ft-check-square"></i> Oynandı!</button>'))}})}),$(document).on("click","#sfacebook",function(){window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(location.href),"facebook-share-dialog","width=626,height=436")}),$(document).on("click","#stwitter",function(){var t=$(".sharetext").attr("id");window.open("http://twitter.com/share?url="+encodeURIComponent(location.href)+"&text="+encodeURIComponent(t),"","left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0")}),$(document).on("click","#slinkedin",function(){window.open("http://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(location.href),"","left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0")}),$(document).ready(function(){$("#mainreply").css("height","30px")}),$(document).on("click",".mainreplytext #close",function(t){$("#mainreply").css("height","30px")}),$(document).ready(function(){$(".more").each(function(){var t=$(this).html();if(t.length>600){var e=t.substr(0,600)+'<span class="moreellipses">...&nbsp;</span><span class="morecontent"><span>'+t.substr(599,t.length-600)+'</span>&nbsp;&nbsp;<a href="" class="morelink">Daha fazla</a></span>';$(this).html(e)}}),$(".morelink").click(function(){return $(this).hasClass("less")?($(this).removeClass("less"),$(this).html("Daha fazla")):($(this).addClass("less"),$(this).html("Kapat")),$(this).parent().prev().toggle(),$(this).prev().toggle(),!1})}),$(".kam1").css("overflow","visible"),$(".kam1").css("min-height","300px"),$(".kam2").css("overflow","visible"),$(".kam2").css("min-height","300px"),$(document).on("click",".followtopic",function(){bc=parseInt($(".topicfollowcount").text()),$(".topicfollowcount").text(bc+1),$(this).attr("class","unfollowtopic pr-1"),$(this).contents().last().replaceWith("");$.ajax({type:"POST",url:"",data:{name:"follow"},success:function(t){t.warning&&swal("Hata oluştu!",t.warning,"warning"),t.success&&swal("Başarılı!",t.success,"success")}})}),$(document).on("click",".unfollowtopic",function(){swal({title:"Doğrulama",text:"Takibi kaldırmak istediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(t=>{if(t){db=parseInt($(".topicfollowcount").text()),$(".topicfollowcount").text(db-1),$(this).attr("class","followtopic pr-1"),$(this).contents().last().replaceWith(" Takip Et");var e=$(this).attr("id");$.ajax({type:"POST",url:"",data:{deletefollow:e},success:function(t){swal("Başarılı!","Takip kaldırılmıştır","success")}})}else swal("İptal Edildi","Takip kaldırma işlemi iptal edildi","error")})}),$(document).on("click",".liketopic",function(){bc=parseInt($(".topiclikecount").text()),$(".topiclikecount").text(bc+1),$(this).attr("class","unliketopic"),$(this).contents().last().replaceWith("");$.ajax({type:"POST",url:"",data:{name:"like"},success:function(t){t.warning&&swal("Hata oluştu!",t.warning,"warning"),t.success&&swal("Başarılı!",t.success,"success")}})}),$(document).on("click",".unliketopic",function(){swal({title:"Doğrulama",text:"Beğeniyi kaldırmak istediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(t=>{if(t){db=parseInt($(".topiclikecount").text()),$(".topiclikecount").text(db-1),$(this).attr("class","liketopic"),$(this).contents().last().replaceWith(" Beğen");var e=$(this).attr("id");$.ajax({type:"POST",url:"",data:{deletelike:e},success:function(t){swal("Başarılı!","Beğeni kaldırılmıştır","success")}})}else swal("İptal Edildi","Beğeni Kaldırma işlemi iptal edildi","error")})}),$(document).on("click",".locked",function(){swal({title:"Doğrulama",text:"Yoruma kapatmak istediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(t=>{if(t){var e=$(this).attr("id");$.ajax({type:"POST",url:"",data:{locktopic:e},success:function(t){t.warning&&swal("Hata oluştu!",t.warning,"warning"),t.success&&(swal("Başarılı!",t.success,"success"),setTimeout(function(){location.reload()},1e3))}})}else swal("İptal Edildi","Yoruma Kapama işlemi iptal edildi","error")})}),$(document).on("click",".unlocked",function(){swal({title:"Doğrulama",text:"Yoruma açmak istediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(t=>{if(t){var e=$(this).attr("id");$.ajax({type:"POST",url:"",data:{unlocktopic:e},success:function(t){t.warning&&swal("Hata oluştu!",t.warning,"warning"),t.success&&(swal("Başarılı!",t.success,"success"),setTimeout(function(){location.reload()},1e3))}})}else swal("İptal Edildi","Yoruma Açma işlemi iptal edildi","error")})}),$(document).on("click",".removetopic",function(){swal({title:"Doğrulama",text:"Konuyu kaldırmak istediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(t=>{if(t){var e=$(this).attr("title"),a=$(this).attr("id");$.ajax({type:"POST",url:"",data:{deletetopic:a},success:function(t){t.warning&&swal("Hata oluştu!",t.warning,"warning"),t.success&&(window.location.href=e)}})}else swal("İptal Edildi","Silme işlemi iptal edildi","error")})}),$(document).on("click",".removetopic1",function(){swal({title:"Doğrulama",text:"Konuyu kaldırmak istediğinizden eminmisiniz?",icon:"warning",buttons:{cancel:{text:"Hayır",value:null,visible:!0,className:"",closeModal:!1},confirm:{text:"Devam Et",value:!0,visible:!0,className:"",closeModal:!1}}}).then(t=>{if(t){var e=$(this).attr("title"),a=$(this).attr("id");$.ajax({type:"POST",url:"",data:{deletetopic:a},success:function(t){t.warning&&swal("Hata oluştu!",t.warning,"warning"),t.success&&(window.location.href=e)}})}else swal("İptal Edildi","Silme işlemi iptal edildi","error")})}),autosize(document.querySelectorAll("textarea")),$("#watchiframe").length>0&&$(document).on("click","#watchiframe",function(){var t=$(this).attr("data-video"),e=document.querySelectorAll(".pswp")[0],a=new PhotoSwipe(e,PhotoSwipeUI_Default,[{html:t}],{history:!1,focus:!1,closeOnScroll:!1,showAnimationDuration:0,hideAnimationDuration:0});a.listen("close",function(){$(".pswp__video").each(function(){$(this).attr("src",$(this).attr("src"))})}),a.init()}),$(".correcterror").length>0){var geterror=$(".correcterror").attr("id");swal("Başarılı!",geterror,"success"),$(".app-content").css("filter","blur(0px)"),$(".app-content").css("pointer-events","auto")}if($(".wrongerror").length>0){geterror=$(".wrongerror").attr("id");swal("Hata oluştu!",geterror,"warning")}$(".correcterrorcomments").length>0&&$("html,body").animate({scrollTop:$("#commentlist").offset().top},"slow"),$(".correcterrorlinks").length>0&&$("html,body").animate({scrollTop:$("#watchtab").offset().top},"slow"),$(".guestsubcomment").length>0&&$(".replyit").click(function(){var t='<div id="yourreply"><div class="media mb-2 pl-3"><div class="media-left mr-1"><a href="#"><span class="avatar avatar-online"><img src="'+$(".guestsubcomment").attr("name")+'" alt="avatar"></span></a></div><div class="media-body"><form method="POST" action="" novalidate><input name="subid" type="hidden" value=""><textarea name="comment" id="subreply" class="form-control" placeholder="Sizde yorum yazın..." minlength="10"></textarea><div class="float-right"><font class="btn btn-danger btn-md square mt-1" data-trigger="hover" id="closereply" style="margin-right:4px;">İptal</font><a href="'+$(".guestsubcomment").attr("id")+'" class="btn btn-primary btn-md square mt-1" data-trigger="hover" id="subsend" disabled="disabled">Cevapla</button></div></div></div></div>';$("#yourreply").length||$(t).insertAfter($(this).closest(".media"))}),$(".authreplyit").length>0&&$(".replyit").click(function(){var t=$(".authreplyit").attr("name"),e=$(this).attr("id"),a='<div id="yourreply"><div class="media mb-2 pl-3"><div class="media-left mr-1"><a href="#"><span class="avatar avatar-online"><img src="'+t+'" alt="avatar"></span></a></div><div class="media-body"><form method="POST" action="" novalidate>'+$(".authreplyit").attr("id")+'<input name="subid" type="hidden" value="'+e+'"><textarea name="comment" id="subreply" class="form-control" placeholder="Sizde yorum yazın..." minlength="10"></textarea><div class="float-right"><font class="btn btn-danger btn-md square mt-1" data-trigger="hover" id="closereply">İptal</font><button type="submit" class="btn btn-primary btn-md square mt-1" data-trigger="hover" id="subsend" disabled="disabled">Cevapla</button></div></div></div></div>';$("#yourreply").length||$(a).insertAfter($(this).closest(".media"))});
$(document).on("click","#refresh",function(){$('#commentlist > div[title="allcomment"]').sort(function(t,e){var i=t.getAttribute("class"),o=e.getAttribute("class");return i<o?1:i>o?-1:0}).appendTo("#commentlist")}),$(document).on("click","#bydate",function(){$('#commentlist > div[title="allcomment"]').sort(function(t,e){var i=t.getAttribute("name"),o=e.getAttribute("name");return i<o?1:i>o?-1:0}).appendTo("#commentlist")}),$(".moremore").on("click",function(){$(".lesssummary").hide(),$(".hidesummary").show()}),$(".lessless").on("click",function(){$(".lesssummary").show(),$(".hidesummary").hide()}),$("#watchiframe3").length>0&&$(document).on("click","#watchiframe3",function(t){t.preventDefault();var e=$(this).attr("data-video"),i=$(this).attr("data-imdb");$.ajax({type:"POST",url:"",data:{imdbid:i,videourl:e},success:function(t){if(t.warning&&swal("Fragmana ulaşılamadı! Youtube linkine göz atın."),t.success){var e=document.querySelectorAll(".pswp")[0],i=[{html:'<div class="wrapper" id="yoket"><div class="video-wrapper"><video style="width: 100%;height: auto;" controls><source src="'+t.success+'" type="video/mp4"></video></div></div>'}],o=new PhotoSwipe(e,PhotoSwipeUI_Default,i,{history:!1,focus:!1,closeOnScroll:!1,showAnimationDuration:0,hideAnimationDuration:0});o.listen("close",function(){$(".pswp__video").remove(),$("#yoket").remove()}),o.init()}}})}),$("div[title='allcomment']").each(function(t){var e=$(this).attr("id");n=$("#"+e+" .suby").length,n>3&&($("#"+e+" .suby").hide(),$("#"+e+" .showsuby").show())}),$(document).on("click",".showsuby",function(t){t.preventDefault();var e=$(this).attr("id");$(this).find("span").attr("class"),$(this).find("span").toggleClass("ft-arrow-down ft-arrow-up"),$("#"+e+" .suby").toggle()});