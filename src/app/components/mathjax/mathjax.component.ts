import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'mathjax',
  templateUrl: './mathjax.component.html',
  styleUrls: ['./mathjax.component.scss']
})
export class MathjaxComponent implements OnInit {

  @Input() content :string;

  constructor(public cs: ConfigService) { }
  mathJaxObject;

  ngOnChanges(changes: SimpleChanges) {
    // to render math equations again on content change
    if (changes['content']) {
      this.renderMath()
    }
  }
  ngOnInit() {
   this.loadMathConfig()
   this.renderMath();
  }

  updateMathObt(){
    this.mathJaxObject = this.cs.nativeGlobal()['MathJax'];
  }

  renderMath() {
    this.updateMathObt();
    let angObj = this;
    setTimeout(() => {
      angObj.mathJaxObject['Hub'].Queue(["Typeset", angObj.mathJaxObject.Hub], 'mathContent');
    },1000)
  }
  loadMathConfig() {
    this.updateMathObt();
    this.mathJaxObject.Hub.Config({
      showMathMenu: false,
      tex2jax: { inlineMath: [["$", "$"]],displayMath:[["$$", "$$"]] },
      menuSettings: { zoom: "Double-Click", zscale: "150%" },
      CommonHTML: { linebreaks: { automatic: true } },
      "HTML-CSS": { linebreaks: { automatic: true } },
      SVG: { linebreaks: { automatic: true } }
    });
  }

}
