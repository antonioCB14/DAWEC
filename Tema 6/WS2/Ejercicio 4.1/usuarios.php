<?php
    $variable = $_GET['user'];
    if (($variable == 'Manolo') || ($variable == 'Pepe') || ($variable == 'Jose')) {
        $myObj = new stdClass();
        $myObj->validar = "Si";
        $myJSON = json_encode($myObj);
        echo $myJSON;
    } else {
        $myObj = new stdClass();
        $myObj->validar = "Np";
        $myJSON = json_encode($myObj);
        echo $myJSON;
    }
?>