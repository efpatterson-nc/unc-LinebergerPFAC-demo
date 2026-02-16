(function(){
  // Edit this list to add/remove members.
  const members = [
    {
      quote: "Serving on the PFAC helps me turn my experience into improvements that make care clearer and kinder for others.",
      name: "Ernie P.",
      since: "2019",
      photo: "assets/img/members/ErniePatterson.jpg",
      alt: "PFAC member Ernie P."
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

  const ROTATE_MS = 15000;
  let currentIndex = -1;

  function nextIndex() {
    if (members.length === 1) return 0;
    let i;
    do {
      i = Math.floor(Math.random() * members.length);
    } while (i === currentIndex);
    return i;
  }

  function apply(member){
    const quoteEl = document.getElementById("pfac-quote");
    const citeEl  = document.getElementById("pfac-cite");
    const imgEl   = document.getElementById("pfac-photo");
    const wrap    = document.querySelector(".testimonial");

    if (!quoteEl || !citeEl || !imgEl || !wrap) return;

    wrap.classList.add("pfac-fade");

    setTimeout(() => {
      quoteEl.textContent = `“${member.quote}”`;
      citeEl.textContent  = `${member.name}, PFAC Member since ${member.since}`;
      imgEl.src = member.photo;
      imgEl.alt = member.alt || `PFAC member ${member.name}`;
      wrap.classList.remove("pfac-fade");
    }, 250);
  }

  function start(){
    currentIndex = nextIndex();
    apply(members[currentIndex]);

    setInterval(() => {
      currentIndex = nextIndex();
      apply(members[currentIndex]);
    }, ROTATE_MS);
  }

  document.addEventListener("DOMContentLoaded", start);
})();