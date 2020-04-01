import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){

      $(".filter-button").click(function(){
          var value = $(this).attr('data-filter');
          
          if(value == "all")
          {
              //$('.filter').removeClass('hidden');
              $('.filter').show('1000');
              $('.filter.filterHeader').hide('1000');
          }
          else
          {
  //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
  //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
              $(".filter").not('.'+value).hide('3000');
              $('.filter').filter('.'+value).show('3000');
              
          }
      });
      
      if ($(".filter-button").removeClass("active")) {
            $(this).removeClass("active");
        }
             $(this).addClass("active");
  
  });
  $(function() {
    $('#release').change(function() {
        $('.colors').hide();
        $('#' + $(this).val()).show();
    });
});
  }
  
  productBtns: any[] = [
    {
      "dataFilter":"all",
      "lable":"All"
    },
    {
      "dataFilter":"Antibiotics",
      "lable":"Antibiotics"
    },
    {
      "dataFilter":"PPi",
      "lable":"PPi's"
    },
    {
      "dataFilter":"Nutraceuticals",
      "lable":"Nutraceuticals"
    },
    {
      "dataFilter":"Immunosuppresani",
      "lable":"Immunosuppresani"
    },
  ];
  ProductCads: any[] = [
    {
      "ProductType":"Antibiotics",
      "prodectImg":"IMG_3840.jpg",
      "prodectName":"ROKLIN – 500",
      "prodectCategory":"Impulse",
      "DescriptionText":"ACECLOFENAC 100 mg + PARACETAMOL 325 mg + CHLORZOXAZONE 250 mg",
    },
    {
      "ProductType":"PPi",
      "prodectImg":"IMG_3900.jpg",
      "prodectName":"TELET FORTE",
      "prodectCategory":"Impulse",
      "DescriptionText":"PARACETAMOL 325 mg + DICLOFENAC SODIUM 50 mg + CAFFEINE 30 mg + CHLORPHENIRAMINE MALEATE 2 mg",
    },
    {
      "ProductType":"Nutraceuticals",
      "prodectImg":"IMG_3837-600x400.jpg",
      "prodectName":"FIXCIP – 250",
      "prodectCategory":"Impulse",
      "DescriptionText":"CIPROFLOXACIN 250 mg",
    },
    {
      "ProductType":"Immunosuppresani",
      "prodectImg":"IMG_3792.jpg",
      "prodectName":"OBIN – 200",
      "prodectCategory":"Impulse",
      "DescriptionText":"OFLOXACIN 200 mg",
    },
    {
      "ProductType":"Antibiotics",
      "prodectImg":"IMG_3867-600x400.jpg",
      "prodectName":"SUPERKAL – 500",
      "prodectCategory":"Impulse",
      "DescriptionText":"CALCIUM CARBONATE 500 mg + VITAMIN D3",
    },
  ];
  

}
