import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @Input() words: string;
  @Output() textChanged = new EventEmitter<string>();
  paragraph: string;

  constructor() {}

  ngOnInit() {
    this.paragraph = this.words;
  }

  changeMe(): void {
    this.paragraph = 'Farts and giggles.';
    this.textChanged.emit(this.paragraph);
  }
}
