import { LightningElement, api } from "lwc";

/**
 * Show an item
 */
export default class Child extends LightningElement {
  @api name = "";
  @api year="";
  @api degree="";
  showMeet=false;
  showGrat=false;

  @api
  get showmeet() {
      return this.showMeet;
  }
  set showmeet(value) {
      this.showMeet = value;
  }
  
  @api
  get showgrat() {
      return this.showGrat;
  }
  set showgrat(value) {
      this.showGrat = value;
  }
}
