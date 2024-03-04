const marvel_hero = ["thor", "Ironman" ,"spiderman"]
const dc_heroes = ["superman", "flash", "batman" ]

// marvel_hero.push(dc_heroes)
// console.log(marvel_hero);
// console.log(marvel_hero[3][1]);

// const all_heores =  marvel_hero.concat(dc_heroes)

// console.log(all_heores);


// const all_new_heores = [...marvel_hero, ...dc_heroes]
// console.log(all_new_heores);



// const another_array = [1,2,3, [4,5,6],7, [6,7,8,[4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("kunal"));
console.log(Array.from("kunal"));
console.log(Array.from({name : "kunal"}));  // interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));