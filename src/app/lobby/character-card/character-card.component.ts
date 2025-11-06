import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from '../../_models/character';
import {CharacterService} from '../../_service/character.service';

@Component({
  selector: 'app-character-card',
  standalone: false,
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.less'
})
export class CharacterCardComponent {
  @Input() character!: Character;
  @Output() characterClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor(public characterService: CharacterService) {
  }

}
