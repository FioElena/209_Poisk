<?php
class Person
{
    private $name;
    private $lastname;
    private $age;
    private $hp;
    private $mother;
    private $father;

    function __construct($name, $lastname, $age, $mother = null, $father = null)
    {
        $this->name = $name;
        $this->lastname = $lastname;
        $this->age = $age;
        $this->mother = $mother;
        $this->father = $father;
        $this->hp = 100;
    }
    function sayHi($name)
    {
        return "Hi, $name, I'm " . $this->name;
    }
    function satHp($hp)
    {
        if ($this->hp + $hp >= 100) $this->hp = 100;
        else $this->hp = $this->hp + $hp;
    }
    function getHp()
    {
        return $this->hp;
    }
    function getName()
    {
        return $this->name;
    }
    function getLastname()
    {
        return $this->lastname;
    }
    function getMother()
    {
        return $this->mother;
    }
    function getFather()
    {
        return $this->father;
    }
    function getInfo()
    {
        return "<h3>Несколько слов о моих родственниках</h3><br>" .
            "Мое имя: " . $this->getName() .
            "<br>Моя фамилия: " . $this->getLastname() .
            "<br>Моего папу зовут: " . $this->getFather()->getName() .
            "<br>Мою бабушку по маминой линии зовут: " . $this->getMother()->getMother()->getName() .
            "<br>Мою бабушку по папиной линии зовут: " . $this->getFather()->getMother()->getName() .
            "<br>Моего дедушку по маминой линии зовут: " . $this->getMother()->getFather()->getName() .
            "<br>Моего дедушку по маминой линии зовут: " . $this->getFather()->getFather()->getName();
    }
}

$nina = new Person("Nina", "Petrova", 65);
$alla = new Person("Alla", "Ivanova", 66);
$igor = new Person("Igor", "Petrov", 68);
$denis = new Person("Denis", "Ivanov", 67);


$alex = new Person("Alex", "Ivanov", 42, $alla, $denis);
$olga = new Person("Olga", "Ivanova", 40, $nina, $igor);
$valera = new Person("Valera", "Ivanov", 14, $olga, $alex);

echo $valera->getInfo();
