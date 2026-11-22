// mock browser localStorage so we can test
var store = {};
global.localStorage = {
    setItem: (key, value) => {
        store[key] = value;
    },
    getItem: (key) => {
        return store[key];
    },
    removeItem: (key) => {
        store[key] = undefined;
    },
    clear: () => {
        store = {};
    }
};

global.window = {
    location: {
        hostname: "mockhostname"
    }
};