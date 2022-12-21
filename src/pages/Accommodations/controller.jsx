import Accommodations from '../../api/logements.json';

export function getAccommodations() {
    return Accommodations;
}

export function getAccommodation(id) {

    const accommodations = Accommodations;
    const currentAccommodation = accommodations.find(accommodation => accommodation.id === id);
    return currentAccommodation ?? null;
}
