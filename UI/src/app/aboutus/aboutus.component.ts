import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
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
  
  Tradition: any[]=[
    {
      "title1": "Our",
      "title2": "Vision",
      "image":"OurVision.jpg",
      "text":"To carve a niche in the Global Pharmaceutical, Nutraceutical and Cosmetics industries by providing a wide range of services.",
    },
    {
      "title1": "Our",
      "title2": "Mission",
      "image":"OurMission.jpg",
      "text":"Health to all as We Care for Life. Quality is our first name.",
    },
    {
      "title1": "Our",
      "title2": "Values",
      "image":"OurValues.jpg",
      "text":"Innovation Quality Process Optimisation Team Work Customer Service",
    },
  ];
  directorGroup: any[] = [
    {
      "surname": "Manepalli V.K",
      "name": "Nageswara Rao",
      "roll":"Chairman",
      "pic":"boardofdirectors1.png",
      "about":"Highly qualified Technocrat Entrepreneurs with clear and focused Vision.",
      "profile":"SOMESWARARAO1",
      "profilePopup":"SOMESWARARAO1",
      "modelTitle":"MANEPALLI SOMESWARA RAO ",
      "eq":"Educational Qualifications",
      "educationals": [
          {
            "Qualificationstitle": "Master of Science",
            "Qualifications": "in Chemical Engineering from University of Rhode Island, USA.",
          },
          {
            "Qualificationstitle": "BTech in Chemical Engineering",
            "Qualifications": "from MS Ramaiah Institute of Technology."
          },
        ],
        "Designations":"Designations",
        "Designationsdts":[
            {
              "Designationsdtstitle": "Director ",
              "DesignationsdtsText": "Suraksha Pharma Pvt. Ltd, Hyderabad.",
            },
            {
              "Designationsdtstitle": "Director ",
              "DesignationsdtsText": "MMC Healthcare Ltd., Chennai",
            },
            {
              "Designationsdtstitle": "Director ",
              "DesignationsdtsText": "Sumages Pharma Pvt. Ltd., Bhimavaram.",
            },
        ],
        "Interests":"Interests",
        "Interestsdts":[
            {
              "InterestsdtsText": "Suraksha Research Foundation, Roorkee",
            },
            {
              "InterestsdtsText": "Roorkee Research & Analytical Labs Pvt. Ltd, Roorkee.",
            },
            {
              "InterestsdtsText": "Suraksha Foils, Roorkee.",
            },
            {
              "InterestsdtsText": "Scoat Pharma Pvt. Ltd, Hyderabad.",
            },
        ],
        "Memberships":"Memberships",
        "Membershipsdts":[
            {
              "Membershipsdtstitle": "Hon. General Secretary  ",
              "MembershipsdtsText": "Indian Drugs and Medical Association – Telangana Chapter",
            },
        ]
    },
    {
      "surname": "Manepalli",
      "name": "Nageswara Rao",
      "roll":" Managing Director",
      "pic":"boardofdirectors2.png",
      "about":"Highly qualified Technocrat Entrepreneurs with clear and focused Vision.",
      "profile":"NageswaraRaoGupta",
      "profilePopup":"NageswaraRaoGupta",
      "modelTitle":"Nageswara Rao Gupta ",
      "eq":"Educational Qualifications",
      "educationals": [
          {
            "Qualificationstitle": "Ph.D. ",
            "Qualifications": "in Pharmacology from Andhra University",
          },
          {
            "Qualificationstitle": "M.PHARM",
            "Qualifications": "in Pharmaceutical Chemistry from Andhra University"
          },
          {
            "Qualificationstitle": "B.PHARM",
            "Qualifications": "from Andhra University"
          },
        ],
        "Designations":"Designations",
        "Designationsdts":[
          {
            "Designationsdtstitle": "Managing Director and C.E.O ",
            "DesignationsdtsText": "Suraksha Pharma Pvt. Ltd, Hyderabad.",
          },
          {
            "Designationsdtstitle": "CEO & CSO",
            "DesignationsdtsText": "Suraksha Research Foundation, Roorkee.",
          },
          {
            "Designationsdtstitle": "Managing Director & CEO",
            "DesignationsdtsText": "MMC Healthcare Ltd, Chennai.",
          },
          {
            "Designationsdtstitle": "Managing Director",
            "DesignationsdtsText": "Roorkee Research & Analytical Labs Pvt. Ltd, Roorkee.",
          },
          {
            "Designationsdtstitle": "Director ",
            "DesignationsdtsText": "Scoat Pharma Pvt. Ltd, Hyderabad.",
          },
          {
            "Designationsdtstitle": "Proprietor ",
            "DesignationsdtsText": "Suraksha Foils, Roorkee.",
          },
          {
            "Designationsdtstitle": "Director ",
            "DesignationsdtsText": "Sumages Pharma Pvt. Ltd., Bhimavaram.",
          },
          
        ],
        "Interests":"Memberships",
        "Interestsdts":[
            {
              "Interestsdtstitle": "Vice President ",
              "InterestsdtsText": "(South Zone), I.P.G.A. – New Delhi",
            },
            {
              "Interestsdtstitle": "Treasurer",
              "InterestsdtsText": "I.P.G.A. - A.P. State Branch",
            },
            {
              "Interestsdtstitle": "Life Member",
              "InterestsdtsText": "Indian Pharmaceutical Association",
            },
            {
              "InterestsdtsText": "Indian Pharmacological Society",
            },
            {
              "Interestsdtstitle": "Life Member",
              "InterestsdtsText": "Organization of Pharmaceutical Manufacturers",
            },
            {
              "Interestsdtstitle": "Life Member",
              "InterestsdtsText": "Uttarakhand manufacturers association",
            },
            {
              "Interestsdtstitle": "Editorial board Member",
              "InterestsdtsText": "IPGA TODAY",
            },
            {
              "Interestsdtstitle": "Executive Committee Member and Director",
              "InterestsdtsText": "Andhra Chamber of Commerce",
            },
            {
              "Interestsdtstitle": "Advisory board member",
              "InterestsdtsText": "Rab De Meher ( National NGO)",
            },
            
        ],
        "Memberships":"Achievements",
        "Membershipsdts":[
            {
              "MembershipsdtsText": "Recipient of ‘Indian Leadership Award for Industrial Development’ conferred by All India Achiever’s Foundation 2014.",
            },
            {
              "MembershipsdtsText": "Instituted ‘M.Nageswara Rao Award for Excellency’ for best M.Pharm student in Andhra University.",
            },
            {
              "MembershipsdtsText": "Recipient of IPGA Fellowship Award 2015 conferred by IPGA, New Delhi.",
            },
            {
              "MembershipsdtsText": "Recipient of Pharma Ratan Award 2016/2017 for best contribution in Exports.",
            },
            {
              "MembershipsdtsText": "Felicitated by Andhra University Vice Chancellor as one of the best Alumni.",
            },
            {
              "MembershipsdtsText": "Joint secretary/Vice President –Local Organizing Committee 60th, 63rd, 66th and 70th IPC New Delhi.",
            },
            {
              "MembershipsdtsText": "Organized and delivered many Seminars and Workshops.",
            },
            {
              "MembershipsdtsText": "Attended many International and National Conferences as Chairperson / Co-Chairperson.",
            },
        ]
    },
    {
      "surname": "Manepalli",
      "name": "Someswara Rao",
      "roll":"Director",
      "pic":"boardofdirectors3.png",
      "about":"Highly qualified Technocrat Entrepreneurs with clear and focused Vision.",
      "profile":"SOMESWARARAO",
      "profilePopup":"SOMESWARARAO",
      "modelTitle":"MANEPALLI SOMESWARA RAO ",
      "eq":"Educational Qualifications",
      "educationals": [
          {
            "Qualificationstitle": "Master of Science",
            "Qualifications": "in Chemical Engineering from University of Rhode Island, USA.",
          },
          {
            "Qualificationstitle": "BTech in Chemical Engineering",
            "Qualifications": "from MS Ramaiah Institute of Technology."
          },
        ],
        "Designations":"Designations",
        "Designationsdts":[
            {
              "Designationsdtstitle": "Director ",
              "DesignationsdtsText": "Suraksha Pharma Pvt. Ltd, Hyderabad.",
            },
            {
              "Designationsdtstitle": "Director ",
              "DesignationsdtsText": "MMC Healthcare Ltd., Chennai",
            },
            {
              "Designationsdtstitle": "Director ",
              "DesignationsdtsText": "Sumages Pharma Pvt. Ltd., Bhimavaram.",
            },
        ],
        "Interests":"Interests",
        "Interestsdts":[
            {
              "InterestsdtsText": "Suraksha Research Foundation, Roorkee",
            },
            {
              "InterestsdtsText": "Roorkee Research & Analytical Labs Pvt. Ltd, Roorkee.",
            },
            {
              "InterestsdtsText": "Suraksha Foils, Roorkee.",
            },
            {
              "InterestsdtsText": "Scoat Pharma Pvt. Ltd, Hyderabad.",
            },
        ],
        "Memberships":"Memberships",
        "Membershipsdts":[
            {
              "Membershipsdtstitle": "Hon. General Secretary  ",
              "MembershipsdtsText": "Indian Drugs and Medical Association – Telangana Chapter",
            },
        ]
    },
    {
      "surname": "Manepalli",
      "name": "Padmaja Rani ",
      "roll":"Director",
      "pic":"boardofdirectors4.png",
      "about":"Highly qualified Technocrat Entrepreneurs with clear and focused Vision.",
      "profile":"PadmajaRani",
      "profilePopup":"PadmajaRani",
      "modelTitle":"Padmaja Rani",
      "eq":"Educational Qualifications",
      "educationals": [
          {
            "Qualificationstitle": "M.PHARM",
            "Qualifications": "in Pharmaceutical Analysis from JNTU",
          },
          {
            "Qualificationstitle": "B.PHARM ",
            "Qualifications": "from Andhra University"
          },
        ],
        "Designations":"Designations",
        "Designationsdts":[
            {
              "Designationsdtstitle": "Director ",
              "DesignationsdtsText": "Suraksha Pharma Pvt. Ltd, Hyderabad.",
            },
            {
              "Designationsdtstitle": "Director ",
              "DesignationsdtsText": "Roorkee Research & Analytical Labs Pvt. Ltd, Roorkee.",
            },
            {
              "Designationsdtstitle": "Director ",
              "DesignationsdtsText": "Scoat Pharma Pvt. Ltd, Hyderabad.",
            },
            {
              "Designationsdtstitle": "Promoter  ",
              "DesignationsdtsText": "Suraksha Research Foundation, Roorkee.",
            },
            {
              "Designationsdtstitle": "Director ",
              "DesignationsdtsText": "MMC Healthcare Ltd.,  Chennai",
            },
        ],
        "Interests":"Memberships",
        "Interestsdts":[
            {
              "Interestsdtstitle": "Life Member ",
              "InterestsdtsText": "Indian Pharmaceutical Association",
            },
            {
              "Interestsdtstitle": "Life Member ",
              "InterestsdtsText": "Indian Pharma Graduates Association",
            },
        ],
        "Memberships":"Awards & CSR Activities",
        "Membershipsdts":[
            {
              "Membershipsdtstitle": "Seva Dharmika Award",
              "MembershipsdtsText": "2018 by Heaven Homes Society",
            },
            {
              "Membershipsdtstitle": "Wonder Woman Award ",
              "MembershipsdtsText": "2016 by Aakriti",
            },
            {
              "Membershipsdtstitle": "The Golden Heart Award",
              "MembershipsdtsText": "2017 by Inovexia",
            },
            {
              "Membershipsdtstitle": "Appreciation ",
              "MembershipsdtsText": "2017 by New Steps Foundation",
            },
            {
              "Membershipsdtstitle": "Women Glory",
              "MembershipsdtsText": "",
            },
            {
              "Membershipsdtstitle": "Business Women",
              "MembershipsdtsText": "2017 by Hall of Fame Awards",
            },
            {
              "Membershipsdtstitle": "Intelligent ",
              "MembershipsdtsText": "2017 by MRS 2017 High Life Magzine",
            },
            {
              "Membershipsdtstitle": "Social Service to Society ",
              "MembershipsdtsText": "2017 by Nagarjuna Nagar Welfare Association & Mahila Mandali",
            },
            {
              "Membershipsdtstitle": "Shree Ratan Satkaar",
              "MembershipsdtsText": "2017 by JCI",
            },
            {
              "Membershipsdtstitle": "Best Industrialist",
              "MembershipsdtsText": "2017 by Women Glory",
            },
            {
              "Membershipsdtstitle": "Vaibhava Seva Puraskar ",
              "MembershipsdtsText": "2017 by Sri Sai Santhi Sahaya Seva Samithi",
            },

        ]
    },
    
    {
      "surname": "Manepalli",
      "name": "ASWANI",
      "roll":"Director",
      "pic":"boardofdirectors5.png",
      "about":"Highly qualified Technocrat Entrepreneurs with clear and focused Vision.",
      "profile":"ASWANI",
      "profilePopup":"ASWANI",
      "modelTitle":"Padmaja Rani",
      "eq":"Educational Qualifications",
      "educationals": [
          {
            "Qualificationstitle": "BSc Home Science",
            "Qualifications": "",
          },
        ],
        "Designations":"Designations",
        "Designationsdts":[
            {
              "Designationsdtstitle": "Director ",
              "DesignationsdtsText": "Suraksha Pharma Pvt. Ltd, Hyderabad.",
            },
            {
              "Designationsdtstitle": "Director ",
              "DesignationsdtsText": "MMC Healthcare Ltd., Chennai",
            },
            {
              "Designationsdtstitle": "Director ",
              "DesignationsdtsText": "Sumages Pharma Pvt. Ltd., Bhimavaram.",
            },
        ],
        "Interests":"Interests",
        "Interestsdts":[
            {
              "InterestsdtsText": "Suraksha Research Foundation, Roorkee.",
            },
            {
              "InterestsdtsText": "Roorkee Research & Analytical Labs Pvt. Ltd, Roorkee.",
            },
            {
              "InterestsdtsText": "Suraksha Foils, Roorkee.",
            },
            {
              "InterestsdtsText": "Scoat Pharma Pvt. Ltd, Hyderabad.",
            },
            
        ],
        "Memberships":"Membership",
        "Membershipsdts":[
            {
              "Membershipsdtstitle": "",
              "MembershipsdtsText": "",
            },
        ]
    },
    {
      "name": "Director Name",
      "roll":"Director",
      "pic":"boardofdirectors5.png",
      "about":"Highly qualified Technocrat Entrepreneurs with clear and focused Vision."
    },
   
  ];
}
