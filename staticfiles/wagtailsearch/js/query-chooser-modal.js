QUERY_CHOOSER_MODAL_ONLOAD_HANDLERS={chooser:function(t,r){function n(t){$(".listing a.choose-query",t).on("click",o),$(".pagination a",t).on("click",(function(){return t=this.getAttribute("data-page"),r=$("#id_q").val().length?{q:$("#id_q").val(),p:t}:{p:t},u=$.ajax({url:e,data:r,success:function(t,r){u=null,$("#query-results").html(t),n($("#query-results"))},error:function(){u=null}}),!1;var t,r}))}var u,e=$("form.query-search",t.body).attr("action");function a(){return u=$.ajax({url:e,data:{q:$("#id_q").val()},success:function(t,r){u=null,$("#query-results").html(t),n($("#query-results"))},error:function(){u=null}}),!1}function o(){return t.respond("queryChosen",$(this).data()),t.close(),!1}n(t.body),$("form.query-search",t.body).on("submit",a),$("#id_q").on("input",(function(){u&&u.abort(),clearTimeout($.data(this,"timer"));var t=setTimeout(a,200);$(this).data("timer",t)}))}};
