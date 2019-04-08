export interface IScenario {
    scenario: string;
    beforeEach: string[];
    techniques: ICommand[];
}

type ICommand = (args: any) => string;