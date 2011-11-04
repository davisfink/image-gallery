<?php include 'config.php'; mysql_select_db("testdats", $con); 
	$sql = "SELECT * FROM pics";
	$result = mysql_query($sql, $con);
	
	while ($row = mysql_fetch_assoc($result)) {
		$images[] = $row['file'];
	}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">

<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>photo gallery 1.0</title>
	<meta name="generator" content="TextMate http://macromates.com/">
	<meta name="author" content="Davis Fink">
	<link rel="stylesheet" type="text/css" media="screen" href="styles/style.css" />
	<link rel="stylesheet" type="text/css" media="screen" href="styles/jquery.lightbox-0.5.css" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>
	<script type="text/javascript" src="js/jquery.lightbox-0.5.js"></script>
	<script src="js/javascript.js"></script>
</head>
<body>
	<div>
		<h2>This is where the pictures live!</h2>
	</div>
	<div id="pics">
		<?php foreach($images as $image): ?>
			<div>
				<a class="lightbox" href="<?=$FILEPATH . $image ?>"><img src="<?=$FILEPATH . $image ?>"></a>
			</div>
		<?php endforeach; ?>
	</div>
</body>
</html>
