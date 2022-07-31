import { Component, EventEmitter, OnInit, Output, NgModule, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { merge, of } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
  
})
export class ListComponent implements OnInit {
  items: string[] = []
  task: string = ''
  itemsStr: string = ''
  getItems: any = JSON.parse(localStorage.getItem('list') || '{}')
  count: any = (localStorage.getItem('count'))
  edit: boolean = false

  /* ------------------------------------------------------------- */
  @ViewChild('inputItem')
  ipt!: ElementRef

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.iniciar()
  }

  iniciar(): void {
    if (localStorage.getItem('count') != '1') {
      this.getItems = this.items;
      localStorage.setItem('count', '1')
      localStorage.setItem('list', JSON.stringify(this.items))
      console.log(1)
    }
    else {
      this.items = this.getItems
      console.log(2)
    }
  }

  addItem(item: string): void | string {
    if (this.items.length == 5) {
      this.openSnackBar('Your list is full, delete an item first.', 'Ok')
    }

    else if (item.length > 18) {
      this.openSnackBar("Maximum of 18 characters.", 'Ok');

    }
    else if (item.length < 4) {
      this.openSnackBar("Minimum of 4 characters.", 'Ok');
    }
    else {
      item = item + '0'
      this.ipt.nativeElement.value = ""
      this.items = this.getItems
      this.items.unshift(item)
      localStorage.setItem('list', JSON.stringify(this.items))
    }
  }
  editClick(index:number){
    this.edit = true;

  }
  removeItem(index: number): void {
    this.items.splice(index, 1)
    localStorage.setItem('list', JSON.stringify(this.items))
  }

  clearAll(): void {

    this.items.splice(0, this.items.length)
    localStorage.setItem('list', JSON.stringify(this.items))
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  check(index : number): void {
    var item : string = this.getItems[index]
    
    if (item.charAt(item.length - 1) == "1"){
    item = item.slice(0, -1) + "0"
    this.items.splice(index, 1, item)
    localStorage.setItem('list', JSON.stringify(this.items))
    }else{
      item = item.slice(0, -1) + "1"
      this.items.splice(index, 1, item)
      localStorage.setItem('list', JSON.stringify(this.items))
    }
  }
}


