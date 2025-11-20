import {Component, inject, Input} from '@angular/core';
import {Character, CharacterClass} from '../../_models/character';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidatorService} from '../../_service/validator.service';
import {CharacterService} from '../../_service/character.service';
import {NZ_MODAL_DATA, NzModalRef} from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-character-creator',
  standalone: false,
  templateUrl: './character-creator.component.html',
  styleUrl: './character-creator.component.less'
})
export class CharacterCreatorComponent {
  characterForm: FormGroup;

  CharacterClass = CharacterClass;

  readonly nzModalData?: { character: Character } = inject(NZ_MODAL_DATA);

  constructor(private characterService: CharacterService,
              private fb: FormBuilder,
              private nzModalRef: NzModalRef,
              private validatorService: ValidatorService) {
    this.characterForm = fb.group({
      name: [this.nzModalData?.character.name ?? '', [Validators.required, validatorService.fullNameValidator]],
      image: [this.nzModalData?.character.image ?? '', [Validators.required]],
      characterClass: [this.nzModalData?.character.characterClass ?? CharacterClass.MAGE, [Validators.required]],
      maxHp: [this.nzModalData?.character.maxHp ?? 1, [Validators.required, Validators.min(1), Validators.max(12)]]
    }, {
      validators: [
        this.validatorService.maxHpByClassValidator
      ]
    });
  }

  createOrEditCharacter() {
    if (this.nzModalData?.character) {
      const character = this.nzModalData?.character;
      character.name = this.characterForm.get('name')?.value;
      character.image = this.characterForm.get('image')?.value;
      character.characterClass = this.characterForm.get('characterClass')?.value;
      character.maxHp = this.characterForm.get('maxHp')?.value;
      this.characterService.editCharacter(character)
    } else {
      const character = new Character(
        this.characterForm.get('name')?.value,
        this.characterForm.get('image')?.value,
        this.characterForm.get('characterClass')?.value,
        this.characterForm.get('maxHp')?.value,
      )
      this.characterService.addCharacter(character);
    }
    this.nzModalRef.close();
  }

}
