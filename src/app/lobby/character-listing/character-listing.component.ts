import { Component } from '@angular/core';

@Component({
  selector: 'app-character-listing',
  standalone: false,
  templateUrl: './character-listing.component.html',
  styleUrl: './character-listing.component.less'
})
export class CharacterListingComponent {

  characters: { name: string, maxHp: number}[] = [
    {
      name: 'Mage',
      maxHp: 12
    },
    {
      name: 'Rogue',
      maxHp: 16
    },
  ];

  characterClickHandler(characterName: string) {
    console.log(characterName);
  }

}
