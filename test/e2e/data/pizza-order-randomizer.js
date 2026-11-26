const CRUSTS = [
    'NORMAL',
    'THIN',
    'STUFFED',
    'GARLIC-BUTTER',
    'SQUARE',
    'TEXAS',
    'PRETZEL',
    'SESAME',
    'DEEP-DISH',
    'FLATBREAD'
]

const FLAVORS = [
    'BEEF-SUPREME',
    'ALL-SORTS',
    'CHEESE',
    'EXTRA-CHEESEY',
    'SOUTHWEST',
    'TEX-MEX',
    'VEGAN',
    'PEPPERONI',
    'WURSTFEST',
    'BBQ',
    'CRISPY-CHICKEN',
    'BUFFALO-RANCH',
    'BACON-CHEESE-BURGER'
]

const SIZES = [
    'SAMPLE',
    'PERSONAL',
    'SMALL',
    'MEDIUM',
    'LARGE',
    'XLARGE',
    'MEGA',
    'RIDICULOUS',
    'LUDICROUS',
    'PLAID'
]

function getRandomCrust() {
    const i = getRandomNumber(0, CRUSTS.length - 1);
    return CRUSTS[i];
}

function getRandomFlavor() {
    const i = getRandomNumber(0, FLAVORS.length - 1);
    return FLAVORS[i];
}

function getRandomSize() {
    const i = getRandomNumber(0, SIZES.length - 1);
    return SIZES[i];
}

// generate random number from 1-30
function getRandomTableNumber() {
    return getRandomNumber(1, 30);
}

function getRandomNumber(low = 1, high = 100) {
    return Math.floor(Math.random() * high) + low;
}

export function getRandomOrder() {
    return {
        "crust": getRandomCrust(),
        "flavor": getRandomFlavor(),
        "size": getRandomSize(),
        "table_no": getRandomTableNumber()
    };
}