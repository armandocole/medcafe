function loadlink(){$("#refresh").load(location.href+" #refresh")}$(document).ready(function(){$("#iconLeft4").on("keyup",function(){var t=$(this).val().toLowerCase();$("#users-list a").filter(function(){$(this).toggle($(this).text().toLowerCase().indexOf(t)>-1)})})}),$(document).ready(function(){$("#iconLeft5").on("keyup",function(){var t=$(this).val().toLowerCase();$("#users-list1 a").filter(function(){$(this).toggle($(this).text().toLowerCase().indexOf(t)>-1)})})}),loadlink(),setInterval(function(){loadlink()},3e4);var objDiv=document.getElementById("scrolldown");function handleInput(t){"Enter"==t.key&&(t.shiftKey?t.target.style.height=t.target.offsetHeight+20+"px":t.target.form.submit())}if(objDiv.scrollTop=objDiv.scrollHeight,$(document).on("click","#rignhref",function(t){$("#rign").submit(),$(".app-content").css("filter","blur(4px)"),$(".app-content").css("pointer-events","none")}),$(document).on("click","#ignhref",function(t){$("#ign").submit(),$(".app-content").css("filter","blur(4px)"),$(".app-content").css("pointer-events","none")}),$(document).on("click","#delhref",function(t){$("#del").submit(),$(".app-content").css("filter","blur(4px)"),$(".app-content").css("pointer-events","none")}),$(".correcterror").length>0){var geterror=$(".correcterror").attr("id");$(".app-content").css("filter","blur(0px)"),$(".app-content").css("pointer-events","auto"),swal("Başarılı!",geterror,"success")}if($(".wrongerror").length>0){geterror=$(".correcterror").attr("id");$(".app-content").css("filter","blur(0px)"),$(".app-content").css("pointer-events","auto"),swal("Hata oluştu!",geterror,"warning")}