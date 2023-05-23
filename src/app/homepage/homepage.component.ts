import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

interface items{
  id:number,
  Name:string,
  Organization:string,
  Area:string
}
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

// @Component({
//   selector: 'paginator-overview-example',
//   templateUrl: 'paginator-overview-example.html',
// })
// export class PaginatorOverviewExample {}

export class HomepageComponent {

@ViewChild(MatPaginator) paginator!: MatPaginator;
data:any[] =[]
displayedColumns=['id','Name','Organization','Area']
dataSource: MatTableDataSource<items>

  constructor(){
    this.dataSource = new MatTableDataSource<items>(this.test);
  }

  test=[
    {
      id:1,
      Name:"Manish",
      Organization:"BGSW",
      Area:"BLR"
    },
   { 
    id:2,
    Name:"Amit",
    Organization:"BGSW",
    Area:"BLR"
  },
  { 
    id:3,
    Name:"Raju",
    Organization:"BGSW",
    Area:"BLR"
  },
  { 
    id:4,
    Name:"Rohit",
    Organization:"BGSW",
    Area:"BLR"
  },
  { 
    id:5,
      Name:"Ajay",
      Organization:"BGSW",
      Area:"BLR"
},
{ 
  id:6,
      Name:"Ankur",
      Organization:"BGSW",
      Area:"BLR"
},
{
  id:7,
  Name:"Abhi",
  Organization:"BGSW",
  Area:"BLR"
},
{ 
id:8,
Name:"Sonu",
Organization:"BGSW",
Area:"BLR"
},
{ 
id:9,
Name:"JHJK",
Organization:"BGSW",
Area:"BLR"
},
{ 
id:10,
Name:"Amit",
Organization:"BGSW",
Area:"BLR"
},
{ 
id:11,
  Name:"Amit",
  Organization:"BGSW",
  Area:"BLR"
},
{ 
id:12,
  Name:"bbbb",
  Organization:"BGSW",
  Area:"BLR"
}
]

  ngOninit(){
    // this.dataSource.paginator = this.paginator;
  }
  ngAfterViewInit(): void {   
     this.dataSource.paginator = this.paginator;
  }

  onPaginateChange(e:any){
console.log(e)
this.paginator.pageSize = e.pageSize;
this.paginator.pageIndex = e.pageIndex;

  }

  addItem(e:any){
console.log("from child",e)
const filterVal = e.Name
console.log(filterVal.trim().toLowerCase())
    this.dataSource.filter = filterVal.trim().toLowerCase();

// this.data.push( this.test.filter(item=>item.Name == e.searchName))
// console.log(this.data)
// this.dataSource.paginator = this.dataSource.filter((item:any)=>item.Name == e.searchName)
// this.dataSource = this.dataSource?.paginator?.fiforEach((element: any) => {
//   element===e.searchName
// }); 
//this.dataSource.paginator = this.dataSource.filter((item: { Name: any; }) => item.Name === e.searchValue);
  }

  applyFilter(event: Event) {
    console.log("event",event)
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue.trim().toLowerCase())
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

}
