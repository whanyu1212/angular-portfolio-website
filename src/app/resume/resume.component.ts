import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Hanyu - Home');

  }  
  DownloadFile(){
    // dummy link for the time being
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/Hanyu_Resume.pdf');
    link.setAttribute('download', 'Hanyu_Resume.pdf');
    link.click();
    link.remove();
  }
}
