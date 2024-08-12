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

  isCollapsed: boolean = true;
  filtering: boolean = false;



  typescript: boolean = false;
  python: boolean = false;
  julia: boolean = false;
  angular: boolean = false;
  llm: boolean = false;
  react: boolean = false;


  constructor(private titleService: Title, private projectsService: ProjectsService) {
    this.titleService.setTitle('Hanyu - Portfolio');

  }  
  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }

  Filter(){
    let filterTags: Tag[] = [];

    if (this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }

    if (this.python){
      filterTags.push(Tag.PYTHON);
    }

    if (this.julia){
      filterTags.push(Tag.JULIA);
    }

    if (this.angular){
      filterTags.push(Tag.ANGULAR);
    }

    if (this.llm){
      filterTags.push(Tag.LLM);
    }

    if (this.react){
      filterTags.push(Tag.REACT);
    }

    if (this.python || this.julia || this.angular || this.llm || this.react || this.typescript){
      this.filtering = true;
    }
    else{
      this.filtering = false;
    }

    this.projects = this.projectsService.getProjectsByFilter(filterTags);
  }


  ResetFilters(){
    this.typescript = false;
    this.python = false;
    this.julia = false;
    this.angular = false;
    this.llm = false;
    this.react = false;
    this.filtering = false;
    this.projects = this.projectsService.getProjects();
  }
}
