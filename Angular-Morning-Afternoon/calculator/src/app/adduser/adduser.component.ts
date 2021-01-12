import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdduserService } from '../service/adduser.service';
import { user } from '../user';
import { Sort } from '@angular/material/sort';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  // formErrors = {
  //   'firstname': "",
  //   'lastname': "",
  //   'email': "",
  //   'phn': 0,
  // };

  // validationMessages = {
  //   'firstname': {
  //     'required':      'First Name is required.',
  //     'minlength':     'First Name must be at least 2 characters long.',
  //     'maxlength':     'FirstName cannot be more than 25 characters long.'
  //   },
  //   'lastname': {
  //     'required':      'Last Name is required.',
  //     'minlength':     'Last Name must be at least 2 characters long.',
  //     'maxlength':     'Last Name cannot be more than 25 characters long.'
  //   },
  //   'email': {
  //     'required':      'Email is required.',
  //     'email':         'Email not in valid format.'
  //   },
  //   'phn': {
  //     'required':      'Tel. number is required.',
  //     'pattern':       'Tel. number must contain only numbers.'
  //   },
  // };


  addUserForm: FormGroup;
  userObj!: user;
  userList: user[] = []
  sortedUsers: user[];
  constructor(private fb: FormBuilder, private addUserService: AdduserService) {
    this.addUserForm = this.fb.group({
      firstname:[''],
      lastname:[''],
      email:['',[Validators.required,Validators.email]],
      phn:[0],
    });
    this.userList = this.addUserService.getUsers();
    this.sortedUsers = this.addUserService.getUsers().slice();
    //this.addUserForm.valueChanges.subscribe(data=>this.onValueChanged(data));
  }

  ngOnInit(): void {
    
  }


  onSubmit(){
    this.userObj = this.addUserForm.value;
    this.addUserService.addUser(this.userObj);
    this.addUserForm.reset({
      firstname: "",
      lastname: "",
      email: "",
      phno: ""
    });
  }
  // onValueChanged(data?: any){
  //   if(!this.addUserForm){
  //     return;
  //   }
  //   const form = this.addUserForm;
  //   for(const field in this.formErrors){
  //     if(this.formErrors.hasOwnProperty(field)){
  //       this.formErrors[field] = '';
  //       const control = form.get(field);
  //       if(control && control.dirty && !control.valid){
  //         const message = this.validationMessages[field];
  //         for(const key in control.errors){
  //           if(control.errors.hasOwnProperty(key)){
  //             this.formErrors[field]+=message[key]+'';
  //           }
  //         }
  //       }
  //     }
  //   }

  sortData(sort: Sort) {
    const data = this.userList.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedUsers = data;
      return;
    }
    this.sortedUsers = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'fname': return compare(a.firstname, b.firstname, isAsc);
        case 'lname': return compare(a.lastname, b.lastname, isAsc);
        case 'email': return compare(a.email, b.email, isAsc);
        case 'phn': return compare(a.phn, b.phn, isAsc);
        default: return 0;
      }
    });
    this.userList = this.sortedUsers;
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
