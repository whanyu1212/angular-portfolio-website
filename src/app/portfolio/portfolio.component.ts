import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  
  projects: Project[] = [
    {
      id: 0,
      name: 'Expense Notifier',
      summary: 'Extracts expense data stored in notion, interprets it using LLM Agent and triggers a periodic notification',
      description: 'A automation pipeline for extracting expense data from NotionDB, analysing with LLM Agent (powered by GPT-4) and triggering a telegram bot message',
      projectLink: 'https://github.com/whanyu1212/expense-notify',
      pictures: [],
      tags: [Tag.PYTHON, Tag.LLM]
    },
    {
      id: 1,
      name: 'JourneyCraftAI',
      summary: 'AI-powered travel planning agent that crafts personalized itineraries, suggests destinations tailored to your interests',
      description: 'Detailed description of project two',
      projectLink: 'https://github.com/whanyu1212/JourneyCraftAI',
      pictures: [],
      tags: [Tag.PYTHON, Tag.LLM]
    },
  ];
  constructor(private titleService: Title) {
    this.titleService.setTitle('Hanyu - Portfolio');

  }  
}
