export class Character {
  id: string;
  created: number;
  name: string;
  image: string;
  characterClass: CharacterClass;
  maxHp: number;

  constructor(name: string, image: string, characterClass: CharacterClass, maxHp: number) {
    this.id = Math.random().toString(36).substring(7);
    this.created = Date.now();
    this.name = name;
    this.image = image;
    this.characterClass = characterClass;
    this.maxHp = maxHp;
  }
}

export enum CharacterClass {
  MAGE = 'MAGE',
  ROGUE = 'ROGUE',
  WARRIOR = 'WARRIOR'
}

export interface CharacterDetail {
  color: 'green' | 'blue' | 'gray';
  maxHp: number;
}

// export const CharacterDetails: Partial<{ [k in CharacterClass]: CharacterDetail }> = {
export const CharacterDetails: { [k in CharacterClass]: CharacterDetail } = {
  [CharacterClass.MAGE]: {
    color: 'green',
    maxHp: 6
  },
  [CharacterClass.ROGUE]: {
    color: 'blue',
    maxHp: 8
  },
  [CharacterClass.WARRIOR]: {
    color: 'gray',
    maxHp: 12
  },
}



