import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {
  sentence = "Here is a sentence.";

  constructor() {}

  ngOnInit() {}
  childUpdate(childText: string) {
    this.sentence = childText;
  }
}
