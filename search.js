pageSize=8;for(var pageCount=$(".resultquery").length/pageSize,i=0;i<pageCount;i++)$("#pagin").append('<li class="page-item"><a class="page-link" href="javascript:void(0);" onclick="return false;">'+(i+1)+"</a></li> ");1>=pageCount&&$("#pager").hide(),$("#pagin li").first().addClass("page-item active"),showPage=function(e){$(".resultquery").hide(),$(".resultquery").each(function(a){a>=pageSize*(e-1)&&a<pageSize*e&&$(this).show()})},showPage(1),$("#pagin li").click(function(){$("#pagin li").removeClass("page-item active"),$(this).addClass("page-item active"),showPage(parseInt($(this).text()))}),pageSizea=8;var pageCounta=$(".resultquery1").length/pageSizea;for(i=0;i<pageCounta;i++)$("#pagin1").append('<li class="page-item"><a class="page-link" href="javascript:void(0);" onclick="return false;">'+(i+1)+"</a></li> ");1>=pageCounta&&$("#pager1").hide(),$("#pagin1 li").first().addClass("page-item active"),showPagea=function(e){$(".resultquery1").hide(),$(".resultquery1").each(function(a){a>=pageSizea*(e-1)&&a<pageSizea*e&&$(this).show()})},showPagea(1),$("#pagin1 li").click(function(){$("#pagin1 li").removeClass("page-item active"),$(this).addClass("page-item active"),showPagea(parseInt($(this).text()))}),pageSizeb=8;var pageCountb=$(".resultquery2").length/pageSizeb;for(i=0;i<pageCountb;i++)$("#pagin2").append('<li class="page-item"><a class="page-link" href="javascript:void(0);" onclick="return false;">'+(i+1)+"</a></li> ");1>=pageCountb&&$("#pager2").hide(),$("#pagin2 li").first().addClass("page-item active"),showPageb=function(e){$(".resultquery2").hide(),$(".resultquery2").each(function(a){a>=pageSizeb*(e-1)&&a<pageSizeb*e&&$(this).show()})},showPageb(1),$("#pagin2 li").click(function(){$("#pagin2 li").removeClass("page-item active"),$(this).addClass("page-item active"),showPageb(parseInt($(this).text()))}),pageSizec=8;var pageCountc=$(".resultquery3").length/pageSizec;for(i=0;i<pageCountc;i++)$("#pagin3").append('<li class="page-item"><a class="page-link" href="javascript:void(0);" onclick="return false;">'+(i+1)+"</a></li> ");1>=pageCountc&&$("#pager3").hide(),$("#pagin3 li").first().addClass("page-item active"),showPagec=function(e){$(".resultquery3").hide(),$(".resultquery3").each(function(a){a>=pageSizec*(e-1)&&a<pageSizec*e&&$(this).show()})},showPagec(1),$("#pagin3 li").click(function(){$("#pagin3 li").removeClass("page-item active"),$(this).addClass("page-item active"),showPagec(parseInt($(this).text()))}),pageSized=8;var pageCountd=$(".resultquery5").length/pageSized;for(i=0;i<pageCountd;i++)$("#pagin5").append('<li class="page-item"><a class="page-link" href="javascript:void(0);" onclick="return false;">'+(i+1)+"</a></li> ");1>=pageCountd&&$("#pager5").hide(),$("#pagin5 li").first().addClass("page-item active"),showPaged=function(e){$(".resultquery5").hide(),$(".resultquery5").each(function(a){a>=pageSized*(e-1)&&a<pageSized*e&&$(this).show()})},showPaged(1),$("#pagin5 li").click(function(){$("#pagin5 li").removeClass("page-item active"),$(this).addClass("page-item active"),showPaged(parseInt($(this).text()))}),$("#mainsearch1").submit(function(e){var a=0;$("#sput1").val().length<=3&&(a=1),a&&(swal("Uyarı!","Aranacak kelime en az 4 karakter içermelidir!","warning"),e.preventDefault())}),$(document).on("click","#today",function(e){$("#sortdating").val(1),$("#sortdate").submit()}),$(document).on("click","#lastweek",function(e){$("#sortdating").val(7),$("#sortdate").submit()}),$(document).on("click","#lastmonth",function(e){$("#sortdating").val(30),$("#sortdate").submit()}),$(document).on("click","#last6month",function(e){$("#sortdating").val(180),$("#sortdate").submit()}),$(document).on("click",".page-item",function(e){$("html,body").animate({scrollTop:$(".content-wrapper").offset().top},"slow")}),$(document).ready(function(){$(".more").each(function(){var e=$(this).html();if(e.length>100){var a=e.substr(0,100)+'<span class="moreellipses">...&nbsp;</span><span class="morecontent"><span>'+e.substr(99,e.length-100)+'</span>&nbsp;&nbsp;<a href="" class="morelink">Daha fazla</a></span>';$(this).html(a)}}),$(".morelink").click(function(){return $(this).hasClass("less")?($(this).removeClass("less"),$(this).html("Daha fazla")):($(this).addClass("less"),$(this).html("Kapat")),$(this).parent().prev().toggle(),$(this).prev().toggle(),!1})});
$(document).on('submit','#mainsearch2',function(e){var n=0;$('#sput2').val().length<=3&&(n=1),n&&(swal("Uyarı!","Aranacak kelime en az 4 karakter içermelidir!","warning"),e.preventDefault())});