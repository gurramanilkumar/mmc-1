import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-milestones',
  templateUrl: './milestones.component.html',
  styleUrls: ['./milestones.component.css']
})
export class MilestonesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  milestones: any[]=[
    {
      "year": "2019",
      "title": "product",
      "text":"Launched Suraksha Naturals Inc. speciality Wellness and Nutraceuticals product line.",
    },
    {
      "year": "2018",
      "title": "Launching",
      "text":"Launching and filing ANDAs for Regulated Markets (USA, Canada & Europe)",
    },
    {
      "year": "2017",
      "title": "Launched",
      "text":"Launched Suraksha Singapore PTE Ltd.",
    },
    {
      "year": "2016",
      "title": "Acquired",
      "text":"Acquired WHO- GMP certified manufacturing Facility. MMC Health Care Ltd, Chennai",
    },
    {
      "year": "2016",
      "title": "Constructed",
      "text":"Constructed Suraksha Pharma Pvt Ltd – Unit – II in Roorkee",
    },
    {
      "year": "2013",
      "title": "Formulation",
      "text":"Constructed State of Art DSIR approved Formulation R&D Unit in Roorkee",
    },
    {
      "year": "2013",
      "title": "Constructed",
      "text":"Founded and Constructed Foils Unit, Suraksha Foils in Roorkee",
    },
    {
      "year": "2012",
      "title": "Consignment",
      "text":"First Consignment to Srilanka & Myanmar",
    },
    {
      "year": "2011",
      "title": "Award",
      "text":"Received Indian Leadership Award from All India Achievers Foundation",
    },
    {
      "year": "2011",
      "title": "Leadership Award",
      "text":"Received Indian Leadership Award from All India Achievers Foundation",
    },
    {
      "year": "2011",
      "title": "First Exports",
      "text":"First Exports to Canada, Cambodia, Philippines",
    },
    {
      "year": "2010",
      "title": "Global",
      "text":"Entered into Global Marketing",
    },
    {
      "year": "2008",
      "title": "Acquired",
      "text":"Acquired Scoat Pharma Pvt Ltd – Pellets manufacturing Company, Hyderabad",
    },
    {
      "year": "2007",
      "title": "Established",
      "text":"Established Roorkee Research & Analytical Laboratory in Roorkee",
    },
    {
      "year": "2007",
      "title": "Manufacturing",
      "text":"Constructed Top Class Manufacturing facility Suraksha Pharma Pvt Ltd (NHP CanadaApproved) in Roorkee",
    },
    {
      "year": "2003",
      "title": "Founded",
      "text":"Founded Suraksha Pharma Pvt Ltd in Hyderabad",
    },
    {
      "year": "1992",
      "title": "Founded",
      "text":"Founded and Constructed Manufacturing Facility, Sumac Pharma Pvt Ltd, Hyderabad",
    },
    {
      "year": "1986",
      "title": "Founded",
      "text":"Founded and constructed Manufacturing Facility, Sumages Pharma Pvt Ltd in Bhimavaram.",
    },
    
  ]

}
