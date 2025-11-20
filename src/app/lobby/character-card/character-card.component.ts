import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from '../../_models/character';
import {CharacterService} from '../../_service/character.service';
import {NzModalService} from 'ng-zorro-antd/modal';
import {CharacterCreatorComponent} from '../character-creator/character-creator.component';

@Component({
  selector: 'app-character-card',
  standalone: false,
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.less'
})
export class CharacterCardComponent {
  @Input() character!: Character;
  @Output() characterClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor(public characterService: CharacterService,
              private nzModalService: NzModalService) {
  }

  editCharacter(character: Character) {
    this.nzModalService.create({
      nzTitle: `Edit character (${this.character.name})`,
      nzContent: CharacterCreatorComponent,
      nzData: {
        character
      },
      nzFooter: null
    });
  }

}
