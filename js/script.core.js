;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;

			self.events.adviceChange();
			// self.subscribeForm.init();
			self.nextStepButton();

		},

		windowLoad: function(){

			var self = this;

			self.contentHeight.init();

		},

		/**
		**	Height content area
		**/

		contentHeight: {

			init: function(){

				var self = this;

				self.calculationHeight();

			    self.w.on('resize', function(){
					
					self.calculationHeight();

			    });

			},

			calculationHeight: function(){

				var self = this;
					self.w = $(window);
					self.windowHeight = self.w.height();

				if(self.w.width() > 767){

			    	$("#content").innerHeight(self.windowHeight);

				}
				else{

					$("#content").css({

						'height': 'auto'

					});					

				}


			}

		},

		events:{


			/**
			**	Advice change
			**/

			adviceChange: function(){

				$('.advice_btn').on('click', function(){

					var pilot = $('#pilot_img').find('img'),
						advice = $('.advice_item.active'),
						nextAdvice = $('.advice_item.active').nextAll().length ? $('.advice_item.active').next() : $('.advice_item:first-child'),
						src = nextAdvice.attr('data-src');

					advice.animate({
						
						'opacity': 0
					
					},500, function(){
						
						advice.removeClass('active');
						nextAdvice.addClass('active').animate({

							'opacity': 1							

						});

					});

					pilot.animate({

						'opacity':0

					},500, function(){

						pilot.attr('src', src).animate({

							'opacity':1

						});

					});					

				});

			},

		},


		/**
		**	Subscribe Form
		**/


		subscribeForm: {

			init: function(){

				this.f = $('.subscribe');

				this.validation();

				this.f.on('submit', { obj: this }, this.eventHandler);

			},

			validation: function(){

				var self = this;

				$('#email').keyup(function() {

			        if($(this).val() != '') {

			            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

			            if(pattern.test($(this).val())){

			                $(this).removeClass('invalid').addClass('valid');
			                $('#valid').text('');

			                self.f.removeClass('informed');

			            } 
			            else {

			                $(this).removeClass('valid').addClass('invalid');
			                $('#valid').text('Не верный e-mail');

			                self.f.addClass('informed');

			            }

			        } 
			        else {

			            $(this).removeClass('valid').addClass('invalid');
			            $('#valid').text('Введите Ваш e-mail');

			            self.f.addClass('informed');

			        }
			    });
				
			},

			eventHandler: function(event){

				event.preventDefault();

				if($(this).hasClass('informed')) return false;

				var obj = event.data.obj;

				$.ajax({

					url: 'php/subscribe.php',
					type: 'post',
					data: $(this).serialize(),
					success: function(data){

						// obj.showMessage(data);
						
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

			},

			showMessage: function(data){

				var type = data.indexOf("success") != -1 ? 'success' : 'error',
					template = $("<div class='info_box t_hide' data-type='"+type+"'><p>"+data+"</p></div>"),
					f = this.f;

				if(type === "success") f.find('input').val("");

				f.addClass('informed');
				template.appendTo(f).slideDown(function(){

					$(this)
					.delay(4000)
					.slideUp(function(){

						f.removeClass('informed');
						$(this).remove();

					});

				});

			}

		},

		

		/**
		**	Next step button
		**/

		nextStepButton: function(){

			$('.social_list').on('click','a',function(){

				$('.next_step').addClass('active');

			});

			$('.step_1').on('click','.next_step', function(){

				$('#contactForm').submit();

			});

			$('.step_2').on('click', '.next_step', function(){

				if(!$(this).hasClass('active')) return;
				
				$('.step_2').next().addClass('current').delay(500).animate({
					'opacity':1
				});

			});			

		},



	}


	$(document).ready(function(){

		Core.DOMReady();

	});

	$(window).load(function(){

		Core.windowLoad();

	});


})(jQuery);