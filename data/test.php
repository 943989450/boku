<?php

	// echo 'helleo';

	// if ($_POST['user'] == 'yoku') {
	// 	echo '该用户名已经注册';
	// } else {
	// 	echo '进行下一步';
	// }
		
	if ($_POST['user'] == '优酷' && $_POST['pass'] == 123 ) {
		echo '该用户名已经被注册';
	} else {
		echo '木有！';
	}

	
?>