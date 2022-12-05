import Accommodations from '../../api/logements.json';

// Fake a cache, so we don't slow down stuff we've already seen
let fakeCache = {};

export async function getAccommodations() {
    await fakeNetwork();
    return Accommodations;
}

export async function getAccommodation(id) {
    await fakeNetwork(id);

    const accommodations = Accommodations;
    const currentAccommodation = accommodations.find(accommodation => accommodation.id === id);
    return currentAccommodation ?? null;
}

async function fakeNetwork(key) {
    if (!key) {
        fakeCache = {};
    }

    if (fakeCache[key]) {
        return;
    }

    fakeCache[key] = true;
    return new Promise(res => {
        setTimeout(res, Math.random() * 800);
    });
}
