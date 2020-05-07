import businesses from "./businesses.js";
import outEl from "./DOM.js";
/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/
const agents = businesses.map((business) => {
  return {
    fullName: business.purchasingAgent,
    company: business.companyName,
    phoneNumber: business.phoneWork,
  };
});

console.table(agents);

document.querySelector("#btn--purchaseAgents").addEventListener("click", () => {
  console.log("youclicked");
  outEl.innerHTML = "<h1>Purchasing Agents</h1>";
  console.log(outEl.innerHTML);
  agents.forEach((agent) => {
    console.log(agent);
    outEl.innerHTML += `<h2>${agent.fullName.nameFirst} ${agent.fullName.nameLast}</h2>
  <h3>${agent.company}</h3>
  <h4>${agent.phoneNumber}</h4>`;
    outEl.innerHTML += "<hr/>";
  });
});

export default agents;
