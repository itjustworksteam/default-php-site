<?php

	$manutenzione = false;
	if($manutenzione)
	{
		header('HTTP/1.1 503 Service Temporarily Unavailable');
		header('Status: 503 Service Temporarily Unavailable');
		echo file_get_contents("error/maintenance-page.html");
		exit;
	}
	else
	{
		// the location of the site
		//header("location: /site/");
		//exit;
		
		// the location of the countdown
		header("location: /temp/");
		exit;
	}

?>
