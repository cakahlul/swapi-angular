import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterService } from '../character.service';
import { Character } from '../character';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-component',
  templateUrl: './character-component.component.html',
  styleUrls: ['./character-component.component.css']
})
export class CharacterComponentComponent implements OnInit {

  characterList: Observable<Character[]>;

  constructor(private characterService: CharacterService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCharacter();
  }

  getAllCharacter(){
    this.characterList = this.characterService.getAllCharacter();
  }

  characterDetail(id: number){
    this.router.navigate(['character/detail', id]);
  }

}
