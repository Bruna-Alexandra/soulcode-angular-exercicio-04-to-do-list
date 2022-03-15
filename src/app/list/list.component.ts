import { Component, EventEmitter, OnInit, Output, NgModule, ViewChild, ElementRef} from '@angular/core';
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

  /* ------------------------------------------------------------- */
  @ViewChild('inputItem')
  ipt!: ElementRef


  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if (this.count != "1"){
      localStorage.setItem('list', JSON.stringify(this.items))
      localStorage.setItem('count', '1')
    }
    else{
      this.items = this.getItems
    }

  }
  addItem(item: string): void | string {
    if (this.items.length == 10){
      this.openSnackBar('Your list is full, delete an item first.', 'Ok')
    }

    else if (item.length > 20) {
      this.openSnackBar("Maximum of 20 characters.", 'Ok');

    }
    else if (item.length < 4) {
      this.openSnackBar("Minimum of 4 characters.", 'Ok');
    }
    else {
/*       this.items.unshift(item); */
      this.ipt.nativeElement.value = ""
        this.items = this.getItems
        this.items.unshift(item)
        localStorage.setItem('list', JSON.stringify(this.items))
    }}
  

  removeItem(index: number): void {
    this.items.splice(index, 1)
    localStorage.setItem('list', JSON.stringify(this.items))
  }

  clearAll(deletions: number): void{
    
    this.items.splice(0, deletions-5)
    localStorage.setItem('list', JSON.stringify(this.items))
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}

