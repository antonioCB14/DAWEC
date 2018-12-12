<?php
    $variable = $_GET['place'];
    try {
        $mbd = new PDO('mysql:host=localhost:3306;dbname=postal', 'root', '');
        $sth = $mbd->prepare('SELECT poblacion.lat, poblacion.lon, codigopostal.codigopostalid, codigopostal.provinciaid, codigopostal.poblacionid FROM poblacion JOIN codigopostal ON poblacion.poblacionid=codigopostal.poblacionid AND poblacion.provinciaid=codigopostal.provinciaid WHERE poblacion.poblacion=:valor');
        $sth->bindParam(':valor', $variable);
        $sth->execute();
        $result = $sth->fetchAll();
        echo json_encode($result);
        $mbd = null;
    } catch (PDOException $e) {
        print "¡Error!: " . $e->getMessage() . "<br/>";
        die();
    }
?>