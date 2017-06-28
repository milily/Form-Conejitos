$(document).ready(function() {
	$("button").click(function(e){
		e.preventDefault();
		var name = $("#nombre").val();
		var mensaje = $("#mensaje").val();
		if(name == "" && mensaje == ""){
			alert("Debes escribir tu nombre y el mensaje");
		}else{
			$('#comentarios').append('<div><span class="center-align">' + name + '</span><p class="center-align">' + mensaje + '</p></div>');
		}
	});
});
