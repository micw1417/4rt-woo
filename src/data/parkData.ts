export interface Ride {
  name: string;
  tagline: string;
  thrill: string;
  duration: string;
}

export interface Game {
  name: string;
  tagline: string;
  difficulty: string;
}

export interface Zone {
  title: string;
  color: string;
  rides: Record<string, Ride>;
  games: Record<string, Game>;
}

export const zoneKeys = [
  "early-america",
  "colonization",
  "revolution",
  "early-republic"
] as const;

export type ZoneKey = typeof zoneKeys[number];

export function isZoneKey(key: string): key is ZoneKey {
  return zoneKeys.includes(key as ZoneKey);
}


export const parkData: Record<ZoneKey, Zone> = {
  "early-america": {
    title: "Early America",
    color: "#8B5E3C",
    rides: {
      "wilderness-expedition": {
        name: "Wilderness Expedition",
        tagline: "Journey into untouched frontier lands.",
        thrill: "Mild",
        duration: "3:00"
      }
    },
    games: {
      "axe-toss": {
        name: "Frontier Axe Toss",
        tagline: "Test your pioneer precision!",
        difficulty: "Medium"
      }
    }
  },
  "colonization": {
    title: "Colonization",
    color: "#8B5E3C",
    rides: {
      "wilderness-expedition": {
        name: "Wilderness Expedition",
        tagline: "Journey into untouched frontier lands.",
        thrill: "Mild",
        duration: "3:00"
      }
    },
    games: {
      "axe-toss": {
        name: "Frontier Axe Toss",
        tagline: "Test your pioneer precision!",
        difficulty: "Medium"
      }
    }
  },
  "revolution": {
    title: "Revolution",
    color: "#8B5E3C",
    rides: {
      "wilderness-expedition": {
        name: "Wilderness Expedition",
        tagline: "Journey into untouched frontier lands.",
        thrill: "Mild",
        duration: "3:00"
      }
    },
    games: {
      "axe-toss": {
        name: "Frontier Axe Toss",
        tagline: "Test your pioneer precision!",
        difficulty: "Medium"
      }
    }
  },
  "early-republic": {
    title: "Early Republic",
    color: "#8B5E3C",
    rides: {
      "wilderness-expedition": {
        name: "Wilderness Expedition",
        tagline: "Journey into untouched frontier lands.",
        thrill: "Mild",
        duration: "3:00"
      }
    },
    games: {
      "axe-toss": {
        name: "Frontier Axe Toss",
        tagline: "Test your pioneer precision!",
        difficulty: "Medium"
      }
    }
  }
};
