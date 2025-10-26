/*
 * PhasePharmer
 * A mushroom farming web app for Project: Gorgon
 * Licensed under GPLv3 <https://choosealicense.com/licenses/gpl-3.0>
 * Maintained by Umbra Aeterna Labs <https://github.com/Umbra-Aeterna-Labs>
 */

/**
 * @name substrate
 * @desc "Contains a list of mushroom substrates"
 * "id: uniquely-numbered 0 - 5"
 * "name: in-game name for substrate"
 * "short: developer-friendly shorthand name for substrate"
 */
interface Substrate {
    id: number;
    name: string;
    short: string;
}

const substrate: Substrate[] =
    [
        {
            id: 0,
            name: "Mushroom Substrate (Dirt)",
            short: "Dirt"
        },
        {
            id: 1,
            name: "Mushroom Substrate (Bone)",
            short: "Bone"
        },
        {
            id: 2,
            name: "Mushroom Substrate (Meat)",
            short: "Meat"
        },
        {
            id: 3,
            name: "Mushroom Substrate (Organs)",
            short: "Organ"
        },
        {
            id: 4,
            name: "Mushroom Substrate (Limbs)",
            short: "Limb"
        },
        {
            id: 5,
            name: "Mushroom Substrate (Exotic)",
            short: "Exotic"
        },
    ]

export default substrate;