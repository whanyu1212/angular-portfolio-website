import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'Expense Notifier',
      summary: 'Extracts expense data stored in notion, interprets it using LLM Agent and triggers a periodic notification',
      description: 'A automation pipeline for extracting expense data from NotionDB, analysing with LLM Agent (powered by GPT-4) and triggering a telegram bot message',
      projectLink: 'https://github.com/whanyu1212/expense-notify',
      pictures: ['https://imgur.com/x4vfnJX.png', 'https://imgur.com/HJh7AjT.png','https://imgur.com/1bNL0Ft.png'],
      tags: [Tag.PYTHON, Tag.LLM]
    },
    {
      id: 1,
      name: 'JourneyCraftAI',
      summary: 'AI-powered travel planning agent that crafts personalized itineraries, suggests destinations tailored to your interests',
      description: 'Detailed description of project two',
      projectLink: 'https://github.com/whanyu1212/JourneyCraftAI',
      pictures: ['https://imgur.com/x4vfnJX.png', 'https://imgur.com/HJh7AjT.png','https://imgur.com/1bNL0Ft.png'],
      tags: [Tag.PYTHON, Tag.LLM]
    },
    {
      id: 2,
      name: 'Mental Gym',
      summary: 'Documenting my practices on various coding platforms such as LeetCode, Kattis, HackerRank',
      description: 'Detailed description of project two',
      projectLink: 'https://github.com/whanyu1212/mental-gym',
      pictures: ['https://imgur.com/x4vfnJX.png', 'https://imgur.com/HJh7AjT.png','https://imgur.com/1bNL0Ft.png'],
      tags: [Tag.PYTHON, Tag.JULIA]
    },
    {
      id: 3,
      name: 'Portfolio Website',
      summary: 'Building a personal portfolio website using Typescript and Angular that showcases my projects and skills',
      description: 'Detailed description of project two',
      projectLink: 'https://github.com/whanyu1212/angular-portfolio-website',
      pictures: ['https://imgur.com/x4vfnJX.png', 'https://imgur.com/HJh7AjT.png','https://imgur.com/1bNL0Ft.png'],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT]
    },
  ];
  constructor() { }

  getProjects(){
    return this.projects; /* return the projects array */
  }

  getProjectById(id: number){
    let project = this.projects.find(project => project.id === id); /* find the project with the given id */
    if (project == undefined){
      throw new TypeError("Project not found"); /* throw an error if the project is not found */
    }

    return project; /* return the project */
  }

  getProjectsByFilter(filterTags: Tag[]): Project[] {
    let filteredProjects: Project[] = [];
    this.projects.forEach(function (project) {
        let foundAll = true;

        filterTags.forEach(function (tag) {
            if (!project.tags.includes(tag)) {
                foundAll = false;
            }
        });

        if (foundAll) {
            filteredProjects.push(project);
        }
    });
    return filteredProjects;
}
}