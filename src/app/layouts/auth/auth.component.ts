import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../security/auth/auth.service";
import {TokenStorageService} from "../../security/token/token-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  response : any;
  email = '';
  password = '';
  isLoggedIn = false;
  isLoginFailed = false;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.router.navigateByUrl('/');
    }
  }

  onSubmit() {
    this.authService.login(this.email,this.password).subscribe(
      data => {
        this.response = data;
        if(this.response.status == 400)
          alert("Wrong Credentials");
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        console.log("clicked");
        this.router.navigateByUrl('/dashboard');
      }
    );

  }

  reloadPage() {
    window.location.reload();
  }


  function ($) {
    "use strict";


    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
      $(this).on('blur', function(){
        if($(this).val().trim() != "") {
          $(this).addClass('has-val');
        }
        else {
          $(this).removeClass('has-val');
        }
      })
    })


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
      var check = true;

      for(var i=0; i<input.length; i++) {
        if(validate(input[i]) == false){
          showValidate(input[i]);
          check=false;
        }
      }

      return check;
    });


    $('.validate-form .input100').each(function(){
      $(this).focus(function(){
        hideValidate(this);
      });
    });

    function validate (input) {
      if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
        if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
          return false;
        }
      }
      else {
        if($(input).val().trim() == ''){
          return false;
        }
      }
    }

    function showValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).removeClass('alert-validate');
    }

    /*==================================================================
    [ Show pass ]*/
    var showPass = 0;
    $('.btn-show-pass').on('click', function(){
      if(showPass == 0) {
        $(this).next('input').attr('type','text');
        $(this).addClass('active');
        showPass = 1;
      }
      else {
        $(this).next('input').attr('type','password');
        $(this).removeClass('active');
        showPass = 0;
      }

    });


  }
}
