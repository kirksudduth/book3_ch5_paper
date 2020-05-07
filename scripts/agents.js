import businesses from "./businesses.js";
const outAgentEl = document.querySelector("#output_agent");
outAgentEl.innerHTML += "<h1>Purchasing Agents</h1>";

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

agents.forEach((agent) => {
  outEl.innerHTML += `<h2>${agent.fullName.nameFirst} ${agent.fullName.nameLast}</h2>
  <h3>${agent.company}</h3>
  <h4>${agent.phoneNumber}</h4>`;
  outAgentEl.innerHTML += "<hr/>";
});

export default agents;
