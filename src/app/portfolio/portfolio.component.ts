import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  
  projects = {} as  Project[];
  constructor(private titleService: Title, private projectsService: ProjectsService) {
    this.titleService.setTitle('Hanyu - Portfolio');

  }  
  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }
}
