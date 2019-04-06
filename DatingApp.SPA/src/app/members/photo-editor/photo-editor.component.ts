import { Component, OnInit, Input } from '@angular/core';
import { Iphoto } from '../../_models/iphoto';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {
  @Input() photos: Iphoto[];

  constructor() { }

  ngOnInit() {
  }

}
