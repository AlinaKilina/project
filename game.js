alert("Буратино! Помоги победить Карабаса Барабаса! Ты наша последняя надежда");

let player = {
    health: 40,
    money: 10,
    str: 15,
};
function show() {
    alert("Ваше здоровье =" + player.health + "; Ваши деньги=" + player.money + "; Ваш урон =" + player.str);
}
function buy() {
    choo = prompt("Выберите оружие: 1. Букварь (15 коп) - увеличивает здоровье в два раза; 2. Лук (15 коп) - увеличивает урон на 5 ед.");

switch (choo) {
    case "1":
        if (player.money <= 15) {
            alert("Недостаточно монет");
        }
        else {
            player.money -=20;
            player.health = player.health * 2;
            alert("Ваше здоровье =" + player.health);
        }

        break;

    case "2":
        if (player.money < 15) {
            alert("Недостаточно монет");
        }
        else {
            player.str = player.str -0 + 5;
            alert("Ваш урон =" + player.str);
            player.money = player.money - 15;
        }
break;
    }
}
let Cat = {
    health: 30,
    money: 10,
    str: 10,
};

function CatFight() {
    for (var a = 0; player.health > 5; a++) {
        player.health -= Cat.str;
        console.log(player.health);
    }
    for (var b = 0; Cat.health > 5; b++) {
        Cat.health -= player.str;
        console.log(Cat.health);
    }
    if (a > b) {
        alert("Базилио повержен. Вы получили:"+Cat.money+"монет");
        player.money = player.money + Cat.money;
        player.health = 40;
    }
    else {
        alert("Вы проиграли");
        player.health = 0;
        player.money = 0;
        player.str = 0;
    }
}
let Fox = {
    health: 35,
    money: 20,
    str: 12,
};
function FoxFight() {
    for (var a = 0; player.health > 5; a++) {
        player.health -= Fox.str;
        console.log(player.health);
    }
    for (var b = 0; Fox.health > 5; b++) {
        Fox.health -= player.str;
        console.log(Fox.health);
    }
    if (a > b) {
        alert("Лиса Алиса повержена. Вы получили:"+Fox.money+"монет");
        player.money = player.money + Fox.money;
        player.health = 40;
    }
    else {
        alert("Вы проиграли");
        player.health = 0;
        player.money = 0;
        player.str = 0;
    }
}
let Frog = {
    health: 50,
    money: 20,
    str: 15,
};
function FrogFight() {
    for (var a = 0; player.health > 5; a++) {
        player.health -= Frog.str;
        console.log(player.health);
    }
    for (var b = 0; Frog.health > 5; b++) {
        Frog.health -= player.str;
        console.log(Frog.health);
    }
    if (a > b) {
        alert("Хитрый Дуремар повержен. Вы получили:"+Frog.money+"монет");
        player.money = player.money + Frog.money;
        player.health = 40;
    }
    else {
        alert("Вы проиграли");
        player.health = 0;
        player.money = 0;
        player.str = 0;
    }
}
let Boss = {
    health: 80,
    str: 10,
};
function BossFight() 
{
    for (var a = 0; player.health > 5; a++) {
        player.health -= Boss.str;
        console.log(player.health);
    }
    for (var b = 0; Boss.health > 5; b++) {
        Boss.health -= player.str;
        console.log(Frog.health);
    }
    if (a > b) {
        alert("Карабас Барабас повержен! ПОЗДРАВЛЯЮ!");
        player.money = player.money + Frog.money;
        player.health = 40;
      
    }
    else {
        alert("Вы проиграли");
        player.health = 0;
        player.money = 0;
        player.str = 0;
    }
}










