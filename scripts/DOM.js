import businesses from "./businesses.js";

const outEl = document.querySelector("#output");
// outEl.innerHTML = "<h1>Active Businesses</h1>";

// const zip = "addressZipCode";
// const businessArray = businesses.forEach((business) => {
//   outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     <section>
//       ${business.addressCity}, ${business["addressStateCode"]} ${business[zip]}
//   `;
//   outEl.innerHTML += "<hr/>";
// });

document
  .querySelector("#companySearch")
  .addEventListener("keypress", (keyPressEvent) => {
    if (keyPressEvent.charCode === 13) {
      /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
      const foundBusiness = businesses.find((business) =>
        business.companyName.includes(keyPressEvent.target.value)
      );

      outEl.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
    }
  });
export default outEl;
