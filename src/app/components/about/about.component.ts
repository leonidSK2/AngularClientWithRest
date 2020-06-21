import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  public showImage(data: string): void{
    alert(data);
  }

  constructor(private title: Title) { }

  ngOnInit() {

    this.title.setTitle("About our products");
    // setInterval(function(){

    // }, 2000);
  }

}
