"use strict";

async function renderTour() {
  try {
    const res = await fetch("./tours.json");
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    let tourName = localStorage.getItem("tourName");
    for (const [key, value] of Object.entries(data)) {
      if (key == tourName) {
        document.getElementById("cont").innerHTML = ``;
      } else {
        continue;
      }
    }
    // console.log(key);

    return data;
  } catch (err) {
    throw err;
  }
}

document.getElementById("tourBody").addEventListener("load", renderTour());
console.log("hjjhdjf");
