<?php
    $variable = $_GET['user'];
    $nombre = [];
    if (($variable == 'Luis') || ($variable == 'Pepe') || ($variable == 'Antonio')) {
        for ($i=0; $i < 3 ; $i++) {
            $opcion = rand(1, 100);
            array_push($nombre, $variable.$opcion);
        }
        $myObj = new stdClass();
        $myObj->validar = "Si";
        $myObj->nombre = json_encode(array_values($nombre));
        $myJSON = json_encode($myObj);
        echo $myJSON;
    }else{
        $myObj = new stdClass();
        $myObj->validar = "No";
        $myJSON = json_encode($myObj);
        echo $myJSON;
    }
?>