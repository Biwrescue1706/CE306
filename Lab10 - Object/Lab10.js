const hero = {
    name : "My Hero",
    level: 20,
    coins: 2000,
    weapons:{
        machinegun : {
            ammo : 1000,
            damage : 20
        },
        sword : {
            damage : 100
        },
        shield : {
            protect : 3000
        },
        BFG : {
            ammo : 5000,
            damage : 40
        },
        rocketLauncher : {
            rocket1 : {
                damage : 100,
                speed : 40,
                ammo : 20
            },
            rocket2 : {
                damage : 200,
                speed : 5,
                ammo : 300
            }
        }
    }
};


if("machinegun" in hero ['weapons']){
    console.log('Lucky you goy machine gun');
}
if(hero["weapons"].hasOwnProperty ('sword')){
    console.log('You get sword');
}else{
    console.log('You get no sword');
}
delete hero['weapons']["sword"];
if (hero["weapons"].hasOwnProperty('sword')){
    console.log('You get sword');
}else{
    console.log('You get no sword');
}

let s = JSON.stringify(hero)
console.log(s)

let p = JSON.parse(s)
console.log(p)