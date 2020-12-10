<?php

//* @return \PDO

function getConnection()
{

	$dsn = 'mysql:host=localhost;dbname=gn-vendas';
	$user = 'root';
	$pass = 'lapqow01';

	try {
		$pdo = new PDO($dsn, $user, $pass);
		return $pdo;
	} catch (PDOException $ex) {
		echo 'Erro: ' . $ex->getMessage();
	}
}
