import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project = {} as Project;
  bsModalRef?: BsModalRef;
  
  constructor(private modalService: BsModalService) { }

  OpenProjectModal() {
    this.bsModalRef = this.modalService.show('');
  }
}
