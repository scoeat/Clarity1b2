import { Component, OnInit } from '@angular/core';
import { WakandaService } from '../../services/wakanda.service';
import { ClrDatagridStateInterface } from "@clr/angular";


@Component({
  selector: 'app-prospect-search',
  providers: [WakandaService],
  templateUrl: './prospect-search.component.html',
  styleUrls: ['./prospect-search.component.css']
})
export class ProspectSearchComponent implements OnInit {
  public catalog: any;
  public currentProspectsCollection: any;
  public prospectCollectionLength: Number;
  public loading: boolean = true;
  public curretPage: Number;

  constructor(public wakanda: WakandaService) {
  }

  refresh(state: ClrDatagridStateInterface) {
    this.loading = true;
    if (state.page) {
      this.wakanda.getCatalog().then(ds => {
        this.catalog = ds;
        ds.Prospect.query({
          filter: '',
          pageSize: state.page.size,
          start: state.page.from
        }).then(result => {
          //debugger
          this.currentProspectsCollection = result.entities;
          if(state.page.from==0)this.prospectCollectionLength = result._count;
          this.loading = false;
          //this.curretPage = Math.ceil((state.page.from/state.page.size)+1);
        })
      })
    }
  }
    // let filters:{[prop:string]: any[]} = {};
    // if (state.filters) {
    //     for (let filter of state.filters) {
    //         let {property, value} = <{property: string, value: string}>filter;
    //         filters[property] = [value];
    //     }
    // }
    // this.inventory.filter(filters)
    //     .sort(<{by: string, reverse: boolean}>state.sort)
    //     .fetch(state.page.from, state.page.size)
    //     .then((result: FetchResult) => {
    //         this.users = result.users;
    //         this.total = result.length;
    //         this.loading = false;
    //     });
  formartDateString(date: Date) {
    return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()
  }
  ngOnInit() { }

}
