#jquery.eexpages

A jQuery plugin for displaying ExpressionEngine search results  via $.ajax
===

##Usage

`$(window).eexpages(options)`

###Options

| Option | Description | Default |
| --- | --- | --- | 
| reqType | Request type: POST/GET | POST |
| reqUrl | URL of request | |
| formSel | Selector for form | form |
| eventSel | Click event selector for fetching URL | |
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
<script src="{path="webscripts/jquery.eexpages"}"></script>
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
					$("img.loader").show();
				},
				complete: function(){
					$("img.loader").hide();
				},
				error: {event: function(){console.log('Request Failed')}}
			}
			$(window).eexpages(options);
		})(jQuery)
</script>
```
	
