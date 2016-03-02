jquery.eexpages
===

#A jQuery plugin for displaying pages via $.ajax

Built with ExpressionEngine search results in mind.


##Installation

+ Download and unzip the package. 
+ Copy ./dist/jquery.eexpages.min.js
to your js directory or copy the code in that file to an ExpressionEngine
JavaScript template.

##Usage

+ Link to the script after calling jQuery.
+ Create an options object
+ Pass the options when you call the plugin.

`$(window).eexpages(options)`

###Options

| Option | Description | Default |
| --- | --- | --- | 
| reqType | Request type: POST/GET | POST |
| reqUrl | URL of request | |
| formSel | Selector for form | form |
| eventSel | Selector for click event to fetch URL | |
| paginationSel | Selector for pagination links | |
| dataTarg | Target for returned request | |
| cache | Force requested pages not to be cached by the browser? | true |
| beforeSend | Function to perform before sending request. | |
| complete | Function to perform when request complete | |
| error | Params to pass to $.ajaxError() handler if error returned | object |

####Default ```error``` option properties:

```{ event:function(){},
		jqxhr: 'jqXHR',
		settings: 'settings',
		thrownError: 'thrownError'
	}```
	
###Example
	
```javascript
<script src="{path="webscripts/jquery.eexpages.min"}"></script>
<script>
		(function($){
			var options = {
				reqType: 'POST',
				reqUrl: '?ACT={AID:Search:do_search}',
				dataTarg: "#search-results",
				eventSel: "#submit-button",
				formSel: '#simple-search-form',
				paginationSel: '.pagination > a',
				beforeSend: function(){
					$("img.loading").show();
				},
				complete: function(){
					$("img.loading").hide();
				},
				error: {event: function(){console.log('Request Failed')}}
			}
			$(window).eexpages(options);
		})(jQuery)
</script>
```
	
