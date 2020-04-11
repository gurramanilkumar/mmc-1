import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lading-screen',
  templateUrl: './lading-screen.component.html',
  styleUrls: ['./lading-screen.component.scss']
})
export class LadingScreenComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  companyName: any[] = [
    {
      "name": "Suraksha-Company-logo-PNG.png",
      "text":"Flagship company of Suraksha Group specialises in Contract Manufacturing, Marketing and Exports.",
      "readmore":"https://www.surakshapharma.com/",
    },
    {
      "name": "Research-foundation-logo-PNG.png",
      "text":"DSIR approved state of the art FRD and ARD Centre to design NDDS formulations.",
      "readmore":"https://www.surakshapharma.com/",
    },
    {
      "name": "suraksha-Foil-logo-PNG-600x265.png",
      "text":"Multicolour foil printing and slitting unit.",
      "readmore":"https://www.surakshapharma.com/",
    },
    {
      "name": "Sinapore-logo-PNG.png",
      "text":"Based out in Singapore to handle operations of South-East Asian Markets.",
      "readmore":"https://www.surakshapharma.com/",
    },
    {
      "name": "Suraksha-natural-logo1-1-600x265.png",
      "text":"Nutraceuticals & Lifestyle supplements Manufacturing and Marketing company based out in the USA.",
      "readmore":"http://surakshanaturals.com/",
    },
    {
      "name": "Sumages-company-logo-PNG-600x265.png",
      "text":"Top class Manufacturing and Marketing company, catering to PAN India Market.",
      "readmore":"https://www.surakshapharma.com/",
    },
    {
      "name": "Roorke-Research-logo-PNG-600x265.png",
      "text":"Commercial Analytical Testing and Research Lab.",
      "readmore":"https://www.surakshapharma.com/",
    },
    {
      "name": "Scoat-pharma-logo-PNG.png",
      "text":"Manufacturing & Marketing of Noval and Specialty Pellets Company.",
      "readmore":"http://scoatpharma.com/",
    },
    {
      "name": "Surax-Healthcare-Logo1-300x133.png",
      "text":"Global pharmaceutical generics company based in the USA to cater to Regulated markets.",
      "readmore":"https://www.surakshapharma.com/", 
    },
   
  ];
  businessModel: any[] = [
    {
      "modelImg": "DomesticMarketing.jpg",
      "heading":"Domestic Marketing",
      "text":"Consolidate existing business with a profitable product basket and Expansion of PAN India.",
      "m-left":"ml68ps"
    },{
      "modelImg": "ContractManufacturing.jpg",
      "heading":"Contract Manufacturing",
      "text":"Superior edge over our competitors due to resources including Technically Knowledgeable workforce and WHO-GMP approved Production premises.",
      "m-left":"ml68ps"
    },{
      "modelImg": "InternationalMarketing.jpg",
      "heading":"International Marketing",
      "text":"Exports higher volumes to Regulated markets and to Africa, CIS Rest of the World markets.",
      "m-left":"ml68ps"
    },{
      "modelImg": "FormulationR&D.jpg",
      "heading":"Formulation R&D and NDDS Development",
      "text":"Focus on Researching New molecules and Products having high margins with NDDS.",
      "m-left":"ml68ps"
    },
  ];
  SnapshotGroup: any []=[
    {
      "icon": "COMPANIES.svg",
      "number":"10",
      "description":"Companies"
    },
    {
      "icon": "sub.svg",
      "number":"5",
      "description":"SBU"
    },
    {
      "icon": "group.svg",
      "number":"500+",
      "description":"Employees"
    },
    {
      "icon": "indiaMap.svg",
      "number":"20 + States",
      "description":"India Presence"
    },
    {
      "icon": "worldMap.svg",
      "number":"20 + Countries",
      "description":"Global Customers"
    },
    {
      "icon": "users.svg",
      "number":"500 +",
      "description":"India Customers"
    },
    {
      "icon": "globe2.svg",
      "number":"50 +",
      "description":"Global Customers"
    },
   
    
    {
      "icon": "tag1.svg",
      "number":"500 +",
      "description":"Domestic Own Labels"
    },
    {
      "icon": "tag2.svg",
      "number":"3000 +",
      "description":"Domestic Private Labels"
    },
    {
      "icon": "box.svg",
      "number":"300 +",
      "description":"Export Own Labels"
    },
    
  ]
  navContact() { this.router.navigate(['/contact']); }
}
