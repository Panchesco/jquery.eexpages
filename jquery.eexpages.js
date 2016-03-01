/**
 * jquery.eexpages.js
 * A jQuery plugin for displaying requested URL via AJAX.
 * v1.0.0
 * Richard Whitmer
 * https://github.com/Panchesco/jquery.eexpages
 */

(function(jQuery){	
	
				$.fn.eexpages = function(options){

					var settings = $.extend({
							reqType: 'POST',
							reqUrl: '',
							formSel: "form",
							eventSel: "",
							paginationSel: "",
							dataTarg: "",
							cache: false,
							beforeSend: function(){},
							complete: function(){},
							error: {
									event:function(){},
									jqxhr: 'jqXHR',
									settings: 'settings',
									thrownError: 'thrownError'
									}
							}, options);
							
							settings.reqType = settings.reqType.toUpperCase();
							
							$(document).ajaxError(settings.error.event,
																		settings.error.jqxhr,
																		settings.error.settings,
																		settings.error.thrownError);

				/* Functions ***********************************************************/
				
					clearTarget = function(){
						return $(settings.dataTarg).html('');
					}
					
				/***********************************************************************/
					
					postUrl = function(){
						
						$.ajax({
							type: settings.reqType,
							url: settings.reqUrl,
							data: $(settings.formSel).serialize(),
							cache: settings.cache,
							beforeSend: settings.beforeSend,
							complete: settings.complete
						})
						.done(function(data){
							
							if($(settings.dataTarg).html(data)){
								paginationHandler();
							};
						});
					
					}
						
				/***********************************************************************/	
					
					getUrl = function(url)
					{
						
						$.ajax({
							type: 'GET',
							url: url,
							cache: settings.cache,
							beforeSend: settings.beforeSend,
							complete: settings.complete
						})
						.done(function(data){
							if($(settings.dataTarg).html(data)){
								paginationHandler();
							};
						});
					}
					
				/***********************************************************************/	
					
					paginationHandler = function() {

						$(settings.paginationSel).on('click',function(e){

							url = $(this).attr('href');
							
							getUrl(url);

							e.preventDefault();	
						
						});
					}

				/***********************************************************************/	
					
					$(settings.eventSel).on('click',function(e){
						
						clrTarg = clearTarget();
						
						if(settings.reqType=='POST')
						{
						
							if(clrTarg.length===1){
								req = postUrl();
							}
						
						} else {
							
							if(clrTarg.length===1){
								req = getUrl(settings.reqUrl);
							}
						}

						e.preventDefault();
					
					});
					
				/***********************************************************************/	
				
				}
				
		})(jQuery);
