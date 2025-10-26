/*
 * PhasePharmer
 * A mushroom farming web app for Project: Gorgon
 * Licensed under GPLv3 <https://choosealicense.com/licenses/gpl-3.0>
 * Maintained by Umbra Aeterna Labs <https://github.com/Umbra-Aeterna-Labs>
 */

/**
 * @name phase
 * @desc "Contains info about moon phases"
 * "id: 0 - 7, uniquely assigned to each phase"
 * "name: phase name"
 * "symbol: pretty Unicode symbol for that particular phase"
 */
interface Phase {
    id: number;
    name: string;
    symbol: string;
}

const phase: Phase[] = [
    {
        id: 0,
        name: "New Moon",
        symbol: "🌑",
    },
    {
        id: 1,
        name: "Waxing Crescent",
        symbol: "🌒",
    },
    {
        id: 2,
        name: "First Quarter",
        symbol: "🌓",
    },
    {
        id: 3,
        name: "Waxing Gibbous",
        symbol: "🌔",
    },
    {
        id: 4,
        name: "Full Moon",
        symbol: "🌕",
    },
    {
        id: 5,
        name: "Waning Gibbous",
        symbol: "🌖",
    },
    {
        id: 6,
        name: "Last Quarter",
        symbol: "🌗",
    },
    {
        id: 7,
        name: "Waning Crescent",
        symbol: "🌘",
    },
]

export default phase;