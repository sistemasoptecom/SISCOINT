<?php
	// require_once 'conexion.php';
  $rs = json_decode( $_POST["json"] );
  var_dump($rs);
	// $filename = $_FILES['archivo']['tmp_name'];
	// $destination = $_FILES['archivo']['name'];
	// if(move_uploaded_file($filename, $destination)){
  //   $codigo=$_POST['code_producto'];
	// 	$nombre=$_POST['name_producto'];
	// 	$desc=$_POST['desc_producto'];
	// 	$valor=$_POST['valor_producto'];
	// 	$imagen=$destination;
	// }
	//
	// $query="INSERT INTO producto(pCodigo,pNombre,pDescripcion,pValor,pImagen,pEstado) VALUES ('$codigo','$nombre','$desc','$valor','$imagen','1')";
	//
	// $resultado=$conexion->query($query);
	//
?>
