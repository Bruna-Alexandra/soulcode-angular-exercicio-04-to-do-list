import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'clear-all',
  templateUrl: './clear-all.component.html',
  styleUrls: ['./clear-all.component.css']
})
export class ClearAllComponent implements OnInit {
  items: string[] = ['1', '2', '3', '4', '5']
  getItems: any = JSON.parse(localStorage.getItem('list') || '{}')
  constructor() { }

  ngOnInit(): void {
  }

  clearAll(): void{
    localStorage.setItem('list', JSON.stringify(this.items))
    this.ngOnInit()
  }
}
