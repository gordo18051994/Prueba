var init = function() {

  // 	// $('#listaElementos').on('click','.tarea',function(evnt){

  // 	// 	jQuery.post( "api/tareas/borrar",{id:evnt.target.id.substring(6)} , function(tarea){

  // 	// 			$(evnt.target).remove();
  // 	// 	})

  // 	// })
  
  
  // $("#registrar_usuario").on("click", function() {
  //   var d_form = {
  //     nombre: $("#nombre").val(),
  //     apellido1: $("#apellido1").val(),
  //     apellido2: $("#apellido2").val(),
  //     telefono: $("#telefono").val(),
  //     DNI: $("#DNI").val(),
  //     direccion: $("#direccion").val(),
  //     email: $("#email_reg").val(),
  //     provincia: $("#provincia").val(),
  //     localidad: $("#localidad").val(),
  //     password: $("#password_reg").val()
  //   };
  //   jQuery.post("/Signup", d_form, function(results) {
  //     console.log(" jquery", d_form);
  //   });
  // });

  $("#registrar_empresa").on("click", function() {
    var form_empresa = {
      nombre: $("#nombre_empresa").val(),
      telefono: $("#telefono_empresa").val(),
      direccion: $("#direccion_empresa").val(),
      email: $("#email_empresa").val(),
      provincia: $("#provincia_empresa").val(),
      localidad: $("#localidad_empresa").val(),
      password: $("#password_empresa").val()
    };
    jQuery.post("/Empresa", form_empresa, function(results) {
      console.log(" jquery", form_empresa);
    });
  });


  $("#Signin").on('click', function() {
    var email = $("#email").val();
    var password = $("#password").val();
    $.ajax({
      method: 'POST',
      url: '/login',
      data: {email: email, password: password}
    })
    // $.post("/login", {email: email, password: password}, function(results){
    //   debugger
    //   console.log(results);
    //   debugger
    // })
    
  })

  

  $("#Logout").on('click', function() {
    $.get("/Logout", function(){
      console.log("LogOut con Éxito")
    })
  })
  // 	// jQuery.post( "api/tareas/crear",{nombre:$("#newTarea").val()} , function(tarea){

  // 	// 			$('#listaElementos').
  // 	// 		append($('<li class="tarea" id="tarea_' + tarea.id + '">' + tarea.nombre +'</li>'));
  // 	// 		$('#newTarea').val('');

  // 	// } )

  // })


  $(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});


};

$().ready(init);
