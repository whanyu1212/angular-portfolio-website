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
}
