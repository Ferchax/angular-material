import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';

export interface Game {
  id: number;
  name: string | null | undefined;
  genre: string | null | undefined;
  release_date: string | null | undefined;
  description?: string | null | undefined;
}

@Component({
  selector: 'app-form-with-table',
  templateUrl: './form-with-table.component.html',
  styleUrls: ['./form-with-table.component.css']
})
export class FormWithTableComponent implements OnInit {

  gameForms!: FormGroup;
  displayedColumns: string[] = ['id', 'name', 'genre', 'release_date', 'description', 'action'];
  //dataSource: Game[] = [];
  dataSource = new MatTableDataSource<any>();

  //@ViewChild(MatTable) table!: MatTable<Game>;

  constructor(
    private formBuilder: FormBuilder,
    private fb: FormBuilder,
    private _formBuilder: FormBuilder) { }

  gameForm = this.formBuilder.group({
    name:[''],
    genre:[''],
    release_date:[''],
    description:['']
  });

  ngOnInit(): void {
    this.gameForms = this._formBuilder.group({
      gameRows: this._formBuilder.array([])
    })

    /*this.gameForms = this.fb.group({
      gameRows: this.fb.array(this.dataSource.map((val:Game) => this.fb.group({
        id: new FormControl(this.dataSource.data.length + 1),
        name: new FormControl(val.name),
        genre: new FormControl(val.genre),
        description: new FormControl(val.description),
        action: new FormControl('existingRecord'),
        isEditable: new FormControl(true),
        isNewRow: new FormControl(false)
      })
      )) //end of fb array
    }); //end of form group creation */
  }

  initiateGameForm(row: any): FormGroup {
    return this.fb.group({
      id: new FormControl(row.id),
      name: new FormControl(row.name),
      genre: new FormControl(row.genre),
      release_date: new FormControl(row.release_date),
      description: new FormControl(row.description),
      action: new FormControl('newRecord'),
      isEditable: new FormControl(true),
      isNewRow: new FormControl(true)
    });
  }

  addGame() {
    console.log('gameForm:', this.gameForm.value);

    const { name, genre, release_date, description } = this.gameForm.value;

    const row: Game = {
      id: this.dataSource.data.length + 1, 
      name,
      genre,
      release_date,
      description
    };

    console.log('row:', row);

    const control = this.gameForms.get('gameRows') as FormArray;

    //console.log('control:', control.);

    //control.insert(0, this.initiateGameForm(row));
    control.push(this.initiateGameForm(row));
    this.dataSource = new MatTableDataSource(control.controls);
    //this.dataSource.push(row);
    //this.table.renderRows();
    console.log('dataSource.data:', this.dataSource.data);
  }

  SaveGame(gameForm:any, i:number) {
    gameForm.get('gameRows').at(i).get('isEditable').patchValue(true);
  }

  CancelSaveGame(gameForm:any, i:number) {
    gameForm.get('gameRows').at(i).get('isEditable').patchValue(true);
  }

  EditGame(gameForm:any, i:number) {
    gameForm.get('gameRows').at(i).get('isEditable').patchValue(false);
  }

  DeleteGame(i:number) {
    const control = this.gameForms.get('gameRows') as FormArray;
    control.removeAt(i);
    this.dataSource = new MatTableDataSource(control.controls);
  }

  IsEditable(index: number) {
    return this.gameForms.get('gameRows')?.value[index].isEditable;
  }
}
