
			$(function() {
				$flag = true;
				$("#menu").click(function() {
					if ($flag) {
						$(this).attr('class', 'openmenu');
						$('#menu-bar').css('left', '0');
						$flag = false;
					} else {
						$(this).attr('class', 'closemenu');
						$("#menu-bar").css('left', '-700px');
						$flag = true;
					}
				})
			})
