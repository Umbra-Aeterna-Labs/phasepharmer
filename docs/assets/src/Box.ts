/*
 * PhasePharmer
 * A mushroom farming web app for Project: Gorgon
 * Licensed under GPLv3 <https://choosealicense.com/licenses/gpl-3.0>
 * Maintained by Umbra Aeterna Labs <https://github.com/Umbra-Aeterna-Labs>
 */

/**
 * @name effect
 * @desc "Contains box effect info: id, text, mod, and type"
 * "id: 0 - 15, uniquely assigned to each effect
 * "text: displays when that effect is active given the selected box"
 * "mod: grow time modifier from selected box, expressed two different ways"
 * "type: ensures that only one box mod per type is used, with 0 having no restriction:"
 * "0: indicates zero box mods and cannot be listed with ANY other mod"
 * "1-5: zero or one mod per type"
 * "6: no restriction"
 */
interface Effect {
    id: number;
    text: string;
    mod: number;
    type: number;
}

const effect: Effect[] = [
    {
        id: 0,
        text: "☾ No additional effects",
        mod: 1.00,
        type: 0
    },
    {
        id: 1,
        text: "✓ -20% Grow time (25% faster)",
        mod: 0.80,
        type: 1
    },
    {
        id: 2,
        text: "✓ -40% Grow time (66% faster)",
        mod: 0.60,
        type: 1
    },
    {
        id: 3,
        text: "✗ +25% Grow time (1.25x longer)",
        mod: 1.25,
        type: 1
    },
    {
        id: 4,
        text: "✗ +50% Grow time (1.5x longer)",
        mod: 1.50,
        type: 1
    },
    {
        id: 5,
        text: "✗ +100% Grow time (2x longer)",
        mod: 2.00,
        type: 1
    },
    {
        id: 6,
        text: "✓ 15% Chance bonus crop",
        mod: 1.00,
        type: 2
    },
    {
        id: 7,
        text: "✓ 33% Chance bonus crop",
        mod: 1.00,
        type: 2
    },
    {
        id: 8,
        text: "✓ +100% More yield",
        mod: 1.00,
        type: 3
    },
    {
        id: 9,
        text: "✓ +200% More yield",
        mod: 1.00,
        type: 3
    },
    {
        id: 10,
        text: "✓ +33% More XP",
        mod: 1.00,
        type: 4
    },
    {
        id: 11,
        text: "✗ -50% Less XP",
        mod: 1.00,
        type: 4
    },
    {
        id: 12,
        text: "✗ Single crop",
        mod: 1.00,
        type: 5
    },
    {
        id: 13,
        text: "✓ Multiple crops",
        mod: 1.00,
        type: 5
    },
    {
        id: 14,
        text: "✗ 2 Substrates required",
        mod: 1.00,
        type: 6
    },
    {
        id: 15,
        text: "✗ 1 Strange Dirt required",
        mod: 1.00,
        type: 6
    }
]
const e = effect;

/** <--------------------------------------------------> */
/**
 * @name box
 * @desc "Contains aggregate box info: id, name, and effects (list)
 * "id: 0 - 6, uniquely assigned to each box"
 * "name: name of box, or family of boxes (Practice & Lucky)"
 * "effects: boxes have five effects, padded by 0s from the right"
 * "so a box with "no effects" has a list containing only 0s"
 */
interface Box {
    id: number;
    name: string;
    effects: [object, object, object, object, object];
}

const box: Box[] = [
    {
        id: 0,
        name: "Mushroom Box",
        effects: [e[0], e[0], e[0], e[0], e[0]]
    },
    {
        id: 1,
        name: "Lucky Boxes",
        effects: [e[7], e[0], e[0], e[0], e[0]]
    },
    {
        id: 2,
        name: "Practice Boxes",
        effects: [e[3], e[10], e[0], e[0], e[0]]
    },
    {
        id: 3,
        name: "Epic Crop Box",
        effects: [e[5], e[9], e[12], e[14], e[0]]
    },
    {
        id: 4,
        name: "High Yield Box",
        effects: [e[4], e[6], e[8], e[14], e[15]]
    },
    {
        id: 5,
        name: "Fast Box",
        effects: [e[1], e[11], e[0], e[0], e[0]]
    },
    {
        id: 6,
        name: "Very Fast Box",
        effects: [e[2], e[11], e[0], e[0], e[0]]
    }
]

export default box;