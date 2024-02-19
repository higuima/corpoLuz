export enum SelectedPage {
    Home = "home",
    Aulas = "aulas",
    AlugueldeSalas = "alugueldesalas",
    EntreemContato = "entreemcontato"
}

export interface ClassType {
    name: string;
    description?: string;
    image: string;
  }