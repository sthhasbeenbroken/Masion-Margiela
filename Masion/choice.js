
			$(function() {
				$flag = true;
				$(".choice").click(function() {
					if ($flag) {
						
					$(this).css('background-color', 'black');
					$(this).css('color','white');
					$flag = false;
					} else {
						$(this).css('background-color', 'white');
						$(this).css('color','black');
						$flag = true;
						
					}
				})
			})
