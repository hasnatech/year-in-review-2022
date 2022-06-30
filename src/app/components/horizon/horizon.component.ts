import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-horizon',
  templateUrl: './horizon.component.html',
  styleUrls: ['./horizon.component.scss']
})
export class HorizonComponent implements AfterViewInit {

  @ViewChild("carousel") carousel;
  constructor() { }
  hover = false;
  ngAfterViewInit(): void {
    setInterval(() => {
      if (this.hover == false) {
        this.selectedItem++;
        let i = this.selectedItem % this.interactivity.length
        this.goto(i);
      }
    }, 5000);
  }

  customOptions: OwlOptions = {
    loop: true,
    autoHeight: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    nav: true,
    dots: true,
    navSpeed: 700,
    autoplayTimeout: 5000,

    navText: ['<div class="l-arrow"> </div>', '<div class="r-arrow"> </div>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },

  }

  contactslides = []
  getPassedData(e) {
    let allElem = document.getElementsByClassName("horizon");
    for (let i = 0; i < allElem.length; i++) {
      const element = allElem[i];
      element.classList.remove("active");
    }
    let num = ((e.startPosition) % 6 + 1) % 6 + 1;
    // console.log(e.startPosition, num);
    let elems = document.getElementsByClassName("horizon_" + num);
    for (let i = 0; i < elems.length; i++) {
      const element = elems[i];
      element.classList.add("active");
    }

  }

  interactivity = [
    {
      title: 'Business’ Digital Learning Capabilities',
      description: `
      <p>Now that we’ve built L&D and HR’s digital capabilities including a new modern technology eco-system and
            stewardship of the Cargill L&D governance, we began focusing on Horizon 2. Our next horizon is to build the
            business’ digital learning capabilities. </p>
            <ol>
              <li>We want to equip businesses and functions to own their own learning.</li>
              <li>We want them to be able to use the technology and resources for customer facing education.</li>
            </ol>
          <p class='instruction colortext'>Click the arrows below to see examples of building the business’s digital learning capabilities.</p>
          `,
      img: `assets/images/dark/3Horizons_Detailed.png`
    },
    {
      title: '1. CBS Example',
      description: `
      <p>
            CBS understands that the depth and breadth of their services look entirely different than just five years
            ago and
            will again look different five years from today. The work has moved beyond process-driven, transactional
            work
            and evolved to providing insights, analytics, consulting and new services. According to Bjorn Del’Haye, “The
            only
            way we can ensure we continue to evolve the services that Cargill, our suppliers, or customers are needing
            is to
            ensure our people also evolve their skillsets.”
          </p>
          <div class="mt">
            <a class="readmore1" target="_blank" href="assets/docs/CaseStudy_CBS-ActiveLearnerGoal.pdf">View More</a>
          </div>`,
      img: `assets/images/dark/3horizon_1.png`
    },
    {
      title: '2. FIBI Example',
      description: `
      <p>
            FIBI decided to expand what was being measured beyond financial metrics and saw significant value in the new
            learning vision and strategy to accelerate the acquisition and strengthening of capabilities. FIBI
            recognized
            the
            value digital learning provided to effectively and efficiently develop capabilities and drive the culture of
            continuous
            learning within the organization.
          </p>
          <div class="mt">
            <a class="readmore1" target="_blank" href="assets/docs/CaseStudy_FIBI-HumanCapitalLearningGoal.pdf">View More</a>
          </div>`,
      img: `assets/images/dark/3horizon_2.png`
    },
    {
      title: "3. F&O College Conducted Curation Hackathons with Several Functions",
      description: `
      <div>
            <ul>
              <li>L&D F&O College hosted 6 workshops with 18 Global Operations SMEs to curate 550+ content items
                across
                126 plans and pathways, which in only a few months has already netted 450 followers. </li>
              <li>L&D F&O College hosted 8 curation sessions with 47 CBS SMEs to curate 700+ content items across 27
                plans
                and pathways, which has more than 1,000 learners currently following it. </li>
            </ul>
          </div>`,
      img: `assets/images/dark/3horizon_3.png`
    },

    // {
    //   title: '4. Protein NA GSCM example',
    //   description: `
    //   <p>A key component of Protein NA’s journey is making sure they have learning opportunities they need to be successful. Protein NA’s sales enablement team designed plans by sales channel focused on each product line and business segment.</p>
    //   <div class="mt">
    //         <a class="readmore1" target="_blank" href="https://degreed.com/plan/1698986#/">View More</a>
    //       </div>`,
    //   img: `assets/images/dark/3horizon_4.png`
    // },
    // {
    //   title: '5. Sustainability at Cargill pathway',
    //   description: ` 
    //   <p class="content">
    //       This learning pathway, created solely by the CASC and GEOS EMEA business, provides a general overview of what
    //       sustainability means at Cargill and at CASC and GEOS EMEA. Through videos and articles from internal and
    //       external sources, you will learn what Cargill sustainability priorities and commitments are, what challenges
    //       and opportunities our business faces, and how to tell our sustainability story.
    //     </p>
    //     <div class="mt">
    //       <a class="readmore1" target="_blank" href="https://degreed.com/pathway/m90j433v86?path=sustainability-in-cargill">View
    //         More</a>
    //     </div>`,
    //   img: `assets/images/dark/3horizon_5.png`
    // }

  ]


  selectedItem = 0;

  next() {
    if (this.selectedItem < this.interactivity.length - 1) {
      this.selectedItem++;
    } else {
      this.selectedItem = 0;
    }
  }
  prev() {
    if (this.selectedItem !== 0) {
      this.selectedItem--;
    } else {
      this.selectedItem = this.interactivity.length - 1;
    }
  }

  goto(i) {
    // console.log(i);
    this.selectedItem = i;
  }
}

