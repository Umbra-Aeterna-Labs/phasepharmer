/*
 * PhasePharmer
 * A mushroom farming web app for Project: Gorgon
 * Licensed under GPLv3 <https://choosealicense.com/licenses/gpl-3.0>
 * Maintained by Umbra Aeterna Labs <https://github.com/Umbra-Aeterna-Labs>
 */

import s from "./Substrate"
import p from "./Moon"

/**
 * @name mushroom
 * @desc "Contains info about growable mushrooms (and some that may not be)"
 * "Name: the name of a given mushroom"
 * "id: uniquely-assigned number between 0 - 21 (so far only 20 have complete info)"
 * "skill: Mycology skill level required to seed a box"
 * "time: base time it take to grow that mushroom, in hours"
 * "subs: substrate IDs in which that mushroom flourishes, "
 * "robust: moon phase IDs yielding robust growth"
 * "poor: " " poor growth"
 * "decent: " " decent growth"
 * "short: shortened name for mushroom"
 * "icon: path to icon file"
 */
interface Mushroom {
    name: string;
    id: number;
    skill: number;
    time: number;
    subs: [object, object];
    robust: [object, object];
    poor: [object, object, object, object];
    decent: [object, object, object, object];
    short: string;
    icon: string;
}

const mushroom: Mushroom[] = [
    {
        name: "Parasol Mushroom",
        id: 0,
        skill: 0,
        time: 2,
        subs: [s[0], s[3]],
        robust: [p[4], p[7]],
        poor: [p[0], p[3], p[0], p[3]],
        decent: [p[1], p[2], p[5], p[6]],
        short: "Parasol",
        icon: "assets/img/parasol.png"
    },
    {
        name: "Mycena Mushroom",
        id: 1,
        skill: 5,
        time: 3,
        subs: [s[1], s[4]],
        robust: [p[1], p[2]],
        poor: [p[5], p[6], p[5], p[6]],
        decent: [p[0], p[3], p[4], p[7]],
        short: "Mycena",
        icon: "assets/img/mycena.png"
    },
    {
        name: "Boletus Mushroom",
        id: 2,
        skill: 10,
        time: 4,
        subs: [s[2], s[5]],
        robust: [p[1], p[2]],
        poor: [p[5], p[6], p[5], p[6]],
        decent: [p[0], p[3], p[4], p[7]],
        short: "Boletus",
        icon: "assets/img/boletus.png"
    },
    {
        name: "Goblin Puffball",
        id: 3,
        skill: 12,
        time: 5,
        subs: [s[0], s[5]],
        robust: [p[1], p[2]],
        poor: [p[4], p[7], p[4], p[7]],
        decent: [p[0], p[3], p[5], p[6]],
        short: "Goblin",
        icon: "assets/img/goblin.png"
    },
    {
        name: "Field Mushroom",
        id: 4,
        skill: 15,
        time: 5,
        subs: [s[1], s[3]],
        robust: [p[3], p[6]],
        poor: [p[2], p[7], p[2], p[7]],
        decent: [p[0], p[1], p[4], p[5]],
        short: "Field",
        icon: "assets/img/field.png"
    },
    {
        name: "Blusher Mushroom",
        id: 5,
        skill: 20,
        time: 6,
        subs: [s[2], s[5]],
        robust: [p[1], p[2]],
        poor: [p[5], p[6], p[5], p[6]],
        decent: [p[0], p[3], p[4], p[7]],
        short: "Blusher",
        icon: "assets/img/blusher.png"
    },
    {
        name: "Milk Cap Mushroom",
        id: 6,
        skill: 25,
        time: 7,
        subs: [s[0], s[3]],
        robust: [p[4], p[7]],
        poor: [p[0], p[3], p[0], p[3]],
        decent: [p[1], p[2], p[5], p[6]],
        short: "Milk",
        icon: "assets/img/milk.png"
    },
    {
        name: "Blood Mushroom",
        id: 7,
        skill: 30,
        time: 8,
        subs: [s[0], s[4]],
        robust: [p[1], p[6]],
        poor: [p[2], p[5], p[2], p[5]],
        decent: [p[0], p[3], p[4], p[7]],
        short: "Blood",
        icon: "assets/img/blood.png"
    },
    {
        name: "Blastcap Mushroom",
        id: 8,
        skill: 33,
        time: 8,
        subs: [s[2], s[3]],
        robust: [p[4], p[5]],
        poor: [p[0], p[1], p[0], p[1]],
        decent: [p[2], p[3], p[6], p[7]],
        short: "Blastcap",
        icon: "assets/img/blastcap.png"
    },
    {
        name: "Coral Mushroom",
        id: 9,
        skill: 40,
        time: 9,
        subs: [s[2], s[4]],
        robust: [p[2], p[3]],
        poor: [p[6], p[7], p[6], p[7]],
        decent: [p[0], p[1], p[4], p[5]],
        short: "Coral",
        icon: "assets/img/coral.png"
    },
    {
        name: "Iocaine Mushroom",
        id: 10,
        skill: 40,
        time: 10,
        subs: [s[1], s[4]],
        robust: [p[1], p[2]],
        poor: [p[5], p[6], p[5], p[6]],
        decent: [p[0], p[3], p[4], p[7]],
        short: "Iocaine",
        icon: "assets/img/iocaine.png"
    },
    {
        name: "Groxmax Mushroom",
        id: 11,
        skill: 47,
        time: 11,
        subs: [s[1], s[3]],
        robust: [p[3], p[6]],
        poor: [p[2], p[7], p[2], p[7]],
        decent: [p[0], p[1], p[4], p[5]],
        short: "Groxmax",
        icon: "assets/img/groxmax.png"
    },
    {
        name: "Porcini Mushroom",
        id: 12,
        skill: 55,
        time: 12,
        subs: [s[2], s[5]],
        robust: [p[4], p[5]],
        poor: [p[0], p[1], p[0], p[1]],
        decent: [p[2], p[3], p[6], p[7]],
        short: "Porcini",
        icon: "assets/img/porcini.png"
    },
    {
        name: "False Agaric",
        id: 13,
        skill: 57,
        time: 12,
        subs: [s[1], s[4]],
        robust: [p[6], p[7]],
        poor: [p[2], p[3], p[2], p[3]],
        decent: [p[0], p[1], p[4], p[5]],
        short: "False",
        icon: "assets/img/false.png"
    },
    {
        name: "Black Foot Morel",
        id: 14,
        skill: 64,
        time: 13,
        subs: [s[0], s[5]],
        robust: [p[0], p[7]],
        poor: [p[3], p[4], p[3], p[4]],
        decent: [p[1], p[2], p[5], p[6]],
        short: "Black",
        icon: "assets/img/black.png"
    },
    {
        name: "Pixie's Parasol",
        id: 15,
        skill: 70,
        time: 14,
        subs: [s[2], s[3]],
        robust: [p[2], p[3]],
        poor: [p[6], p[7], p[6], p[7]],
        decent: [p[0], p[1], p[4], p[5]],
        short: "Pixie",
        icon: "assets/img/pixies.png"
    },
    {
        name: "Wizard's Mushroom",
        id: 16,
        skill: 75,
        time: 16,
        subs: [s[1], s[3]],
        robust: [p[1], p[2]],
        poor: [p[3], p[6], p[3], p[6]],
        decent: [p[0], p[4], p[5], p[7]],
        short: "Wizard",
        icon: "assets/img/wizards.png"
    },
    {
        name: "Fly Amanita",
        id: 17,
        skill: 77,
        time: 15,
        subs: [s[1], s[3]],
        robust: [p[1], p[4]],
        poor: [p[0], p[5], p[0], p[5]],
        decent: [p[2], p[3], p[6], p[7]],
        short: "Fly",
        icon: "assets/img/fly.png"
    },
    {
        name: "Charged Mycelium",
        id: 18,
        skill: 85,
        time: 16,
        subs: [s[2], s[5]],
        robust: [p[0], p[3]],
        poor: [p[4], p[7], p[4], p[7]],
        decent: [p[1], p[2], p[5], p[6]],
        short: "Charged",
        icon: "assets/img/charged.png"
    },
    {
        name: "Granamurch Mushroom",
        id: 19,
        skill: 85,
        time: 18,
        subs: [s[0], s[4]],
        robust: [p[0], p[4]],
        poor: [p[2], p[5], p[6], p[7]],
        decent: [p[1], p[3], p[1], p[3]],
        short: "Granamurch",
        icon: "assets/img/granamurch.png"
    },
    {
        name: "Ghostshroom",
        id: 20,
        skill: 90,
        time: 18,
        subs: [s[5], s[2]],
        robust: [p[0], p[4]],
        poor: [p[1], p[2], p[3], p[6]],
        decent: [p[5], p[7], p[5], p[7]],
        short: "Ghostshroom",
        icon: "assets/img/ghostshroom.png"
    },

    /**
     * <------------------------------------------------->
     * NON-FUNCTIONAL ENTRIES
     * <------------------------------------------------->
     */
    // Mortaferus
    // "Mort's not ready, come back later!"
    /* <------------------------------------------------->
    {
        name: "Mortaferus",
        id: 21,
        skill: 999,
        time: 999,
        subs: [999, 999],
        robust: [999, 999],
        poor: [999, 999, 999, 999],
        decent: [999, 999],
        short: "Mortaferus",
        icon: "assets/img/mortaferus.png"
    }
    <-------------------------------------------------> */
    // END Mortaferus
]
