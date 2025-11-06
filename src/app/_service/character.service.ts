import { Injectable } from '@angular/core';
import {Character} from '../_models/character';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  characterStorageKey = 'storedCharacters';
  characterListChanged: Subject<Character[]> = new Subject();

  constructor() {}

  addCharacter(character: Character): void {
    const updatedCharacterList = [...this.getCharacters(), character];
    this.saveCharacters(updatedCharacterList);
  }

  editCharacter(character: Character): void {
    this.saveCharacters(
      this.getCharacters().map(c => c.id === character.id ? character : c)
    );
  }

  getCharacters(): Character[] {
    const charactersFromStorage = localStorage.getItem(this.characterStorageKey);
    return charactersFromStorage ? JSON.parse(charactersFromStorage) : [];
  }

  removeCharacter(id: string): void {
    const filteredCharacters: Character[] = this.getCharacters().filter(c => c.id !== id);
    this.saveCharacters(filteredCharacters);
  }

  private saveCharacters(characters: Character[]): void {
    localStorage.setItem(this.characterStorageKey, JSON.stringify(characters));
    this.characterListChanged.next(characters);
  }

}
