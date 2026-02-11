(function () {
  const members = [
    {
      quote: "Serving on the PFAC helps me turn my experience into improvements that make care clearer and kinder for others.",
      name: "Jane D.",
      since: "2023",
      photo: "assets/img/members/jane.png",
      alt: "PFAC member Jane D."
    },
    {
      quote: "I joined the PFAC to make sure patient and caregiver perspectives are part of the decisions that shape care.",
      name: "Bill K.",
      since: "2022",
      photo: "assets/img/members/bill.png",
      alt: "PFAC member Bill K."
    },
    {
      quote: "Serving on the PFAC gives purpose to my journey. I see our feedback turning into real changes for others.",
      name: "Sarah M.",
      since: "2021",
      photo: "assets/img/members/sarah.jpg",
      alt: "PFAC member Sarah M."
    }
  ];

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function applyMember(m) {
    const quoteEl = document.getElementById("pfac-quote");
    const citeEl  = document.getElementById("pfac-cite");
    const imgEl   = document.getElementById("pfac-photo");

    if (quoteEl) quoteEl.textContent = "“" + m.quote + "”";
    if (citeEl)  citeEl.innerHTML = "<strong>" + m.name + "</strong>, PFAC Member since " + m.since;
    if (imgEl) {
      imgEl.src = m.photo;
      imgEl.alt = m.alt || ("PFAC member " + m.name);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyMember(pickRandom(members));
  });
})();