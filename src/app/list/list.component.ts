import { Component, EventEmitter, OnInit, Output, NgModule, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: string[] = ['1', '2', '3', '4', '5']
  task: string = ''
  itemsStr: string = ''
  getItems: any = JSON.parse(localStorage.getItem('list') || '{}')
  count: any = (localStorage.getItem('count'))
 /*  edit: number = 0 */

  /* ------------------------------------------------------------- */
  @ViewChild('inputItem')
  ipt!: ElementRef


  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.iniciar()
  }

  iniciar(): void {
    if (localStorage.getItem('count') != '1'){
      this.getItems = this.items;
      localStorage.setItem('count', '1')
      localStorage.setItem('list', JSON.stringify(this.items))
      console.log(1)
    }
    else{
      this.items = this.getItems
      console.log(2)
    }
  }

  addItem(item: string): void | string {
    if (this.items.length == 10) {
      this.openSnackBar('Your list is full, delete an item first.', 'Ok')
    }

    else if (item.length > 18) {
      this.openSnackBar("Maximum of 18 characters.", 'Ok');

    }
    else if (item.length < 4) {
      this.openSnackBar("Minimum of 4 characters.", 'Ok');
    }
    else {
      this.ipt.nativeElement.value = ""
      this.items = this.getItems
      this.items.unshift(item)
      localStorage.setItem('list', JSON.stringify(this.items))
    }
  }

/*   editBool(){
    this.edit = 1
  }
  editItem(item: string): void | string {
    this.edit = 0
    
  } */


  removeItem(index: number): void {
    this.items.splice(index, 1)
    localStorage.setItem('list', JSON.stringify(this.items))
  }

  clearAll(deletions: number): void {

    this.items.splice(0, deletions - 5)
    localStorage.setItem('list', JSON.stringify(this.items))
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}

