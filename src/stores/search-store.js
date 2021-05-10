import { makeAutoObservable, makeObservable, observable, action } from "mobx";

// mobx ver6부터는 decorator가 deprecated되어, makeObservable 또는 makeAutoObservable을 사용해 주어야 함.
// decorator(x), makeObservavble(x), makeAutoObservavble(o)
class SearchStore {
  search = "initVal";

  num = 0;

  // observable, action, computed 등을 알아서 추론해줌.
  constructor() {
    makeAutoObservable(this);
  }

  updateSearch = (val) => {
    this.search = val;
    console.log("updated! : ", this.search);
  };

  increaseNum() {
    this.num++;
    console.log("updated! : ", this.num);
  }

  get computedSearch() {
    return "hello " + this.search;
  }

  get computedDoubleNum() {
    return 2 * this.num;
  }
}

// // decorator(x), makeObservavble(o), makeAutoObservavble(x)
// class SearchStore {
//   search = "initVal";

//   num = 0;

//   constructor() {
//     makeObservable(this, {
//       search: observable,
//       num: observable,
//       updateSearch: action,
//       increaseNum: action,
//     });
//   }

//   updateSearch = (val) => {
//     this.search = val;
//     console.log("updated! : ", this.search);
//   };

//   increaseNum() {
//     this.num++;
//     console.log("updated! : ", this.num);
//   }

//   get computedSearch() {
//     return "hello " + this.search;
//   }

//   get computedDoubleNum() {
//     return 2 * this.num;
//   }
// }

export default new SearchStore();
