import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Company } from './company.model';

@Component({
  selector: 'no-access-modal',
  template: `
    <div class="modal-header">
      <h5 class="modal-title">Sorry Access Denied</h5>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss()"></button>
    </div>
    <div class="modal-body">
      <h2>{{info}}</h2>
      
      
    </div>
  `
})
export class NoAccessModalComponent {
  @Input()
    info!: string;

  constructor(public activeModal: NgbActiveModal) {}
}