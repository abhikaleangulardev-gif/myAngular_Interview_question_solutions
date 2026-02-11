import { Component} from '@angular/core';
import { Shared } from '../../service/shared';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-specific-data',
  imports: [CommonModule],
  templateUrl: './display-specific-data.html',
  styleUrl: './display-specific-data.css',
})
export class DisplaySpecificData {
  myDisplaycomment: any[] = [];

  constructor(private sharedservice: Shared) {}

  onClick(value: string) {

    const numberValue = Number(value);

    if (!numberValue || numberValue <= 0) {
      this.myDisplaycomment = [];
      return;
    }

    this.sharedservice.getCommentDataList(numberValue)
      .subscribe((resp: any) => {
        this.myDisplaycomment = resp;
      });
  }
}
