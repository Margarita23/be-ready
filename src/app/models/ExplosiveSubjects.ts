import Questions from '../models/questions';


export default class ExplosiveSubjects {
    steps: [] = [];
    activeStep: any = 0;
    activeText: Questions | any = null;
    
    constructor(data: any) { 
        this.steps = data.default.steps;
    }

    getActiveStep() {
        return new Questions(this.steps.at(this.activeStep));
    }

    setActiveStep(stepNumber: number) {
        this.activeStep = stepNumber;
    }

    getFirstStep() {
        return new Questions(this.steps.at(0));
    }

    goToNextStep() {
        this.activeStep = this.activeStep++;

        return new Questions(this.steps.at(this.activeStep));
    }


}