import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MainService {
    showmenu;
    constructor(private viewportScroller: ViewportScroller) {
        this.showmenu = true
    }

    public gotoId(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }


    menu = [
        {
            id: 1,
            title: "Home",
            goto: "one",
            read_more: "Read More"
        },
        // {
        //     id: 2,
        //     title: "Managed a More Effective & Efficient Learning Landscape",
        //     goto: "two",
        //     read_more: "Read More"
        // },
        {
            id: 2,
            title: "Delivered Employee-centric Learning Experiences",
            goto: "two",
            read_more: "Read More"
        },
        {
            id: 3,
            title: "Reached & Engaged Exponentially More Learners",
            goto: "three",
            read_more: "Read More"
        },
        {
            id: 4,
            title: "Built New Digital Learning Capabilities",
            goto: "four",
            read_more: "Read More"
        }
        // {
        //     id: 5,
        //     title: "Industry Awards",
        //     goto: "five",
        //     read_more: "Read More"
        // }
    ];

}
