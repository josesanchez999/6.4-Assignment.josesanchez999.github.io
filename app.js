const user = {
    Name: "Kevin",
    Age: "21",
    GamerValue: "Is a Bot",
    sayName: function(){
        console.log(this.Name)
    }
};

user.sayName();

console.log(user.GamerValue);

const gameSchedule = ['Turn on Xbox', 'Sign into Accound', 'Load up COD', 'Lose until Nate shows up'];

gameSchedule.push('Jose hopped on so we have a trio.');

console.log(gameSchedule);

const load = gameSchedule.indexOf('Load up COD');
console.log(gameSchedule[load]);