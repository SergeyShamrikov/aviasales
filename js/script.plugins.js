;(function($){

	"use strict";

	$(document).ready(function(){

		/* ------------------------------------------------
				arcticmodal
		------------------------------------------------ */

			$('.modal_btn').on('click', function(){

				var $this = $(this),
					modal = $this.attr('data-modal');

				$(modal).arcticmodal({
					
					afterOpen: function(){
						var wHeight = $(window).height();

						$(modal).css({
							'max-height': wHeight*0.75
						});

					},

					afterClose: function(){

						$(modal).css({
							'min-height': "auto"
						});
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
               	},

               	messages:{

                    cf_name:{
                        required: "Это поле обязательно для заполнения",
                    },

                    cf_fname:{
                        required: "Это поле обязательно для заполнения",
                    },

                    cf_email:{
                        required: "Это поле обязательно для заполнения",
                        email: "Ваш адрес электронной почты неверен!"
                    },

               	},

               	submitHandler: function(form) {
                    
                    $(form).ajaxSubmit({
                        type: 'post', 
                        url:  'php/contact-send.php',
                        success: function(data) { 
                        	
                        	console.log(data);

                        } 

                    });
                }

            });

        /* ------------------------------------------------
                End of validate
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