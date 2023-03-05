import { Component, OnInit } from '@angular/core';
import ExplosiveSubjects from 'src/app/models/ExplosiveSubjects';
import * as jsonData from '../../data/ExplosiveSubjects.json';

@Component({
  selector: 'app-script',
  templateUrl: './script.component.html',
  styleUrls: ['./script.component.scss']
})
export class ScriptComponent implements OnInit {
  public stepsSystem: ExplosiveSubjects = new ExplosiveSubjects(jsonData);
  
  public activeStep = this.stepsSystem.getActiveStep();

  constructor() {
  }

  ngOnInit(): void {
  }

  startQuest() {
    this.stepsSystem.setActiveStep(0);
    this.activeStep = this.stepsSystem.getActiveStep();
  }

  goToStep(stepNumber: number) {
    this.stepsSystem.setActiveStep(stepNumber);
    this.activeStep = this.stepsSystem.getActiveStep();
  }

}
