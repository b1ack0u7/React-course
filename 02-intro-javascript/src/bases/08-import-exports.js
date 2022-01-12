import heroes, {owners} from '../data/heroes';

console.log(heroes);
console.log(owners);
/*
const getHeroById = (id) => {
    return heroes.find( (heroe) => {
        if(heroe.id === id) {
            return true;
        }
        else {
            return false;
        }
    });
};
*/

const getHeroById = (id) => {
    return heroes.find( heroe => heroe.id === id);
};

console.log(getHeroById(1));

const getHeroByOwner = (owner) => {
    return heroes.filter(heroe => heroe.owner === owner);
}

console.log(getHeroByOwner('Marvel'));