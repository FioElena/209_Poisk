<?php

class User
{
    private $name;
    private $lastname;
    private $email;
    private $id;

    function __construct($id, $name, $lastname, $email) //передаем аргументы для создания объекта
    {
        $this->id = $id;
        $this->name = $name;
        $this->lastname = $lastname;
        $this->email = $email;
    }

    function getId()
    {
        return $this->id;
    }
    function getName()
    {
        return $this->name;
    }
    function getLastname()
    {
        return $this->lastname;
    }
    function getEmail()
    {
        return $this->email;
    }
    // Статический метод (может быть вызван независимо от объекта) добавления (Регистрации) пользователя
    static function addUser($name, $lastname, $email, $pass)
    {
        global $mysqli; //разрешаем интерпритатору искать в глобальной зоне видимости переменную

        $email = mb_strtolower(trim($email)); //нижний регистр+обрезаем
        $pass = trim($pass);
        $pass = password_hash($pass, PASSWORD_DEFAULT); //что бы спрятать пароль

        $result = $mysqli->query("SELECT * FROM `user` WHERE `email` = '$email'");

        if ($result->num_rows != 0) {
            return json_encode(["result" => "exist"]);
        } else {
            $mysqli->query("INSERT INTO `user`(`name`, `lastname`, `email`, `pass`) VALUES ('$name', '$lastname', '$email', '$pass')");
            return json_encode(["result" => "success"]);
        }
    }
    //Статический метод авторизации
    static function authUser($email, $pass)
    {
        global $mysqli;
        $email = mb_strtolower(trim($email));
        $pass = trim($pass);


        $result = $mysqli->query("SELECT * FROM `user` WHERE `email` = '$email'");

        if ($result->num_rows != 0) {
            return json_encode(["result" => "success"]);
        } else {
            return json_encode(["result" => "exist"]);
        }
    }
}
