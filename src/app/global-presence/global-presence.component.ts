import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-global-presence',
  templateUrl: './global-presence.component.html',
  styleUrls: ['./global-presence.component.css']
})
export class GlobalPresenceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function(){
      $('.customer-logos').slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1500,
          arrows: false,
          dots: false,
          pauseOnHover: false,
          responsive: [{
              breakpoint: 768,
              settings: {
                  slidesToShow: 4
              }
          }, {
              breakpoint: 520,
              settings: {
                  slidesToShow: 3
              }
          }]
      });
  });
    $(function() {
      $('.material-card > .mc-btn-action').click(function() {
          var card = $(this).parent('.material-card');
          var icon = $(this).children('i');
          icon.addClass('fa-spin-fast');
  
          if (card.hasClass('mc-active')) {
              card.removeClass('mc-active');
  
              window.setTimeout(function() {
                  icon
                      .removeClass('fa-arrow-left ripple')
                      .removeClass('fa-spin-fast')
                      .addClass('fa-bars');
  
              }, 800);
          } else {
              card.addClass('mc-active');
  
              window.setTimeout(function() {
                  icon
                      .removeClass('fa-bars')
                      .removeClass('fa-spin-fast')
                      .addClass('fa-arrow-left ripple');
  
              }, 800);
          }
      });
  });
  }
  AccreditationsGroup: any[] = [
    {
      "imageLogo":"FDALOGO.jpg"
    },
    {
      "imageLogo":"WHOGMPLOGO.jpg"
    },
    {
      "imageLogo":"NHPLOGO.jpg"
    },
    {
      "imageLogo":"ISOLOGO.jpg"
    },
    {
      "imageLogo":"FSSAILOGO.jpg"
    },
    {
      "imageLogo":"PHARMEXLOGO.jpg"
    },
    {
      "imageLogo":"FIEOLOGO.jpg"
    },
    {
      "imageLogo":"HALALLOGO.jpg"
    },
    {
      "imageLogo":"INDIANDRUGLOGO.jpg"
    },
    {
      "imageLogo":"R&DLOGO.jpg"
    },
  ];
  fdaregcountries: any[] = [
    {
      "imageLogo":"GABAON LOGO.jpg"
    },
    {
      "imageLogo":"MYANMAR LOGO.jpg"
    },
    {
      "imageLogo":"BURKINA LOGO.jpg"
    },
    {
      "imageLogo":"MALDOVA LOGO.jpg"
    },
    {
      "imageLogo":"UKRINE LOGO.jpg"
    },
    {
      "imageLogo":"MALDIVES LOGO.jpg"
    },
    {
      "imageLogo":"GUINEA LOGO.jpg"
    },
    {
      "imageLogo":"SRI LANKA LOGO.jpg"
    },
    {
      "imageLogo":"TAJIKISTAN LOGO.jpg"
    },
    {
      "imageLogo":"ZAMBIA LOGO.jpg"
    },
    {
      "imageLogo":"JORDAN LOGO.jpg"
    },
    {
      "imageLogo":"CAMBODIA LOGO.jpg"
    },
  ];
}
