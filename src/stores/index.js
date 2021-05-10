import SearchStore from "./search-store";

// _app.js 의 <Provider {...stores}> 에서 일괄적으로 모든 스토어들을 뿌려주게 됨.
// 컴포넌트내부에서는 사용할 스토어들을 선택적으로 주입(inject)하여 사용.
export default {
  searchStore: SearchStore,
};
