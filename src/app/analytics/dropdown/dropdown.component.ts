import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { County } from './county'
import { COUNTIES } from './county-list'

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  counties = COUNTIES;
  selectedCounty: County;

  adams = this.counties[0].label;
  asotin = this.counties[1].label;
  benton = this.counties[2].label;
  chelan = this.counties[3].label;
  clallam = this.counties[4].label;
  clark = this.counties[5].label;
  columbia = this.counties[6].label;
  cowlitz = this.counties[7].label;
  douglas = this.counties[8].label;
  ferry = this.counties[9].label;
  franklin = this.counties[10].label;
  garfield = this.counties[11].label;
  grant = this.counties[12].label;

  currentCounty: String = this.counties[0].label;

  constructor(private _router: Router) {}

  ngOnInit() {}


  setCounty(county){
    this.currentCounty = county;
  }

}
