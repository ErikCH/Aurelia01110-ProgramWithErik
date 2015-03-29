export class Start{
  constructor(){
    this.heading = 'Testing!!';
    this.firstName = 'Erik';
    this.lastName = 'Hanchett';
  }

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  start(){
    alert(`Hi, ${this.fullName}!`);
  }
}
