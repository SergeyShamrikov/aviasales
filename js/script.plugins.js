;(function($){

	$(document).ready(function(){

		/* ------------------------------------------------
				arcticmodal
		------------------------------------------------ */

			$('.modal_btn').on('click', function(){

				var $this = $(this),
					modal = $this.attr('data-modal');

				$(modal).arcticmodal({
					
					afterOpen: function(){

						if($('#terms_conditions').length){

							modalHeight();

							$(window).on('resize',modalHeight);
							
							function modalHeight(){

								var wHeight = $(window).height();

								$('#terms_conditions').css({
									'height': wHeight*0.75
								});
							
							}
						
						}

					},

					afterClose: function(){

						if($('#terms_conditions').length){

							$('#terms_conditions').css({
								'height': "auto"
							});
							
						}

					}

				});

			});

        /* ------------------------------------------------
				End of arcticmodal
		------------------------------------------------ */

        /* ------------------------------------------------
				mCustomScrollbar
		------------------------------------------------ */

			if($('.custom_scrollbar').length){

				$('.custom_scrollbar').mCustomScrollbar({
					theme: "minimal-dark"
				});
			}
        /* ------------------------------------------------
				End of mCustomScrollbar
		------------------------------------------------ */

        /* ------------------------------------------------
                validate
        ------------------------------------------------ */

            if($("#contactForm").length){

	            $("#contactForm").validate({

	               	rules:{

	                    cf_name:{
	                        required: true,
	                    },

	                    cf_fname:{
	                        required: true,
	                    },

	                    cf_email:{
	                        required: true,
	                        email:true,
	                    },

	                    cf_date:{
	                        required: true,
	                    },
	               	},

	               	messages:{

	                    cf_name:{
	                        required: "Обязательно для заполнения",
	                    },

	                    cf_fname:{
	                        required: "Обязательно для заполнения",
	                    },

	                    cf_email:{
	                        required: "Обязательно для заполнения",
	                        email: "Ваш адрес электронной почты неверен!"
	                    },

	                    cf_date:{
	                        required: "Обязательно для заполнения",
	                    },

	               	},

	               	submitHandler: function(form) {
	                    
	                    $(form).ajaxSubmit({
	                        type: 'post', 
	                        url:  'php/contact-send.php',
	                        success: function(data) { 
	                        	
	                        	console.log(data);

								$('.get_tickets_list').find('li.current').addClass('done').removeClass('current').next().addClass('current');

								$('.step_1').animate({
									'opacity': 0
								},500,function(){
									$('.step_1').removeClass('current').next().addClass('current').delay(500).animate({
										'opacity':1
									});
								});

	                        } 

	                    });
	                }

	            });

            }

        /* ------------------------------------------------
                End of validate
        ------------------------------------------------ */

        /* ------------------------------------------------
                Datepicker
        ------------------------------------------------ */

        	if($('#datepicker').length){

        		$('#datepicker').datepicker();

        	}

        /* ------------------------------------------------
                End of Datepicker
        ------------------------------------------------ */

	});

	$(window).load(function(){

		/* ------------------------------------------------
				Name pudin
		------------------------------------------------ */


        /* ------------------------------------------------
				End of Name pudin
		------------------------------------------------ */

	});

})(jQuery);