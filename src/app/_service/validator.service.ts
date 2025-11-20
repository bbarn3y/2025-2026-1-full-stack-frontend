import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CharacterClass, CharacterDetails} from '../_models/character';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() {}

  fullNameValidator = (control: FormControl): { [k: string]: boolean } | null => {
    if (control.value && control.value.trim().split(' ').length !== 2) {
      return {
        invalidWordCount: true
      };
    } else {
      return null;
    }
  }

  maxHpByClassValidator = (group: FormGroup): { [k: string]: any } | null => {
    const characterClass: CharacterClass = group.get('characterClass')?.value;
    const maxHp: number = group.get('maxHp')?.value;
    if (characterClass && maxHp) {
      if (CharacterDetails[characterClass].maxHp < maxHp) {
        return {
          invalidMaxHpForClass: {
            maxHpForClass: CharacterDetails[characterClass].maxHp
          }
        }
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

}
