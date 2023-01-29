
			$(function() {
				$f = true;
				$("#subscribe").click(function() {
					if ($f) {
						$(this).attr('class', 'opensub');
						$("#subtable").show();
						$('#subtable').css('height', '400px');
						
						$f = false;
					} else {
						$(this).attr('class', 'closesub');
						
						$("#subtable").css('height', '20px');
						
						$f = true;
					}
				})
			})
