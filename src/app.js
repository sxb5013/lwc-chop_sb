import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Scholarship Details";

  showFeatures = true;

  /**
   * Getter for the features property
   */
  get features() {
    return [
      {
        name: "Peter Parker",
        year: "2022",
        degree: "Physical Therapy",
        showMeet: true,
        showGrat: false
      },
      {
        name: "Dianna Prince",
        year: "2022",
        degree: "Biology",
        showMeet: false,
        showGrat: false
      },
      {
        name: "Tony Stark",
        year: "2023",
        degree: "Nursing",
        showMeet: false,
        showGrat: true
      },
      {
        name: "Louis Lane",
        year: "2023",
        degree: "Nursing",
        showMeet: true,
        showGrat: true
      },
    ];
  }
}
