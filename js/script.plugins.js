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