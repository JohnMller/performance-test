import { Component, OnInit, ViewChild } from '@angular/core';
import { RadListViewComponent } from 'nativescript-telerik-ui/listview/angular';
import { ListViewEventData, ListViewScrollEventData } from 'nativescript-telerik-ui/listview';
import { screen } from 'platform';
import { NumbersService } from '../service/numbers.service';

@Component({
    selector: 'number-slides',
    moduleId: module.id,
    templateUrl: 'number-slides.component.html',
    styleUrls: ['number-slides.component.css']
})
export class NumberSlidesComponent implements OnInit {

    @ViewChild('listView') listViewComponent: RadListViewComponent;
    private screenWidth: number;
    public currentSlide: number;
    public slideIndicators: Array<number>;

    public constructor(private numbersService: NumbersService) {
        this.screenWidth = screen.mainScreen.widthDIPs;
    }

    public ngOnInit() {
        this.currentSlide = 0;
        this.slideIndicators = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    }

    public onItemLoading(event: ListViewEventData) {
        event.view.width = this.screenWidth;
    }

    public onScrollEnded(event: ListViewScrollEventData) {
        this.currentSlide = Math.round(event.scrollOffset / this.screenWidth);

        this.listViewComponent.listView.scrollToIndex(this.currentSlide, true);
    }

    public onNumber(number: number, slide: number) {
        if (this.numbersService.containsNumber(number, slide)) {
            this.numbersService.removeNumber(number, slide);
        } else {
            this.numbersService.addNumber(number, slide);
        }

        this.numbersService.log();
    }

    public isNumberSelected(number: number, slide: number) {
        return this.numbersService.containsNumber(number, slide);
    }

    public onClear(slide: number) {
        this.numbersService.clearNumbers(slide);

        this.numbersService.log();
    }

    public onFill(slide: number) {
        this.numbersService.generateRandomNumbers(slide);

        this.numbersService.log();
    }

}