import { Component, EventEmitter, OnInit, Output, NgModule, ViewChild, ElementRef} from '@angular/core';

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


  constructor() { }

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
      alert('Your list is full, delete an item first.')
    }

    else if (item.length > 30) {
      alert("Maximum of 30 characters.");

    }
    else if (item.length < 3) {
      alert("Minimum of 3 characters.");
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
}

