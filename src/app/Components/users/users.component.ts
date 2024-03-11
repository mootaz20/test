import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { User } from 'src/app/Models/user';
import { HttpServiceService } from 'src/app/Services/http-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  httpService : HttpServiceService = inject(HttpServiceService);
  users : User[];
  isLoading: boolean = true;
  @ViewChild('sort') sort : ElementRef;


  ngOnInit(): void {
    this.httpService.getAllUsers()
    .subscribe({
      next: (data) =>{  
        console.log('Data received');
        this.isLoading=false;
        this.users= data;
        console.log(this.users);
      },
      error: (error)=>{
        alert("Error Occured");
        console.log(`Error ${error.status}`)
      }
    });
  }

  onDeleteClick(id: number){
    if (confirm('Are you sure to delete user?')) {
      this.httpService.deleteUser(id);
    }
  }

  onSortClick(){
    console.log(this.sort.nativeElement.value);
    this.httpService.sortUser(  this.sort.nativeElement.value )
    .subscribe({
      next:(data)=> {
        console.log(data);
        this.users = data;
      },
      error : (err)=>{
        alert('Error Occured' + err);
      }
    });
  }




}
