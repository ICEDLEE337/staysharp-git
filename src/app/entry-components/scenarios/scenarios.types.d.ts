export interface IScenario {
    scenario: string;
    howToCreateProblem: string[];
    techniques: ICommand[];
}

export interface ICommand extends Function {

}