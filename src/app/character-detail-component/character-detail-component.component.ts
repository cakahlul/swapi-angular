import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail-component',
  templateUrl: './character-detail-component.component.html',
  styleUrls: ['./character-detail-component.component.css']
})
export class CharacterDetailComponentComponent implements OnInit {

  id: number;
  character: Character;

  constructor(private route: ActivatedRoute,private router: Router,
    private characterService: CharacterService) { }

  ngOnInit() {
    this.character = new Character();

    this.id = this.route.snapshot.params['id'];
    
    this.characterService.getDetailCharacter(this.id)
      .subscribe(data => {
        this.characterService = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['character']);
  }
}

