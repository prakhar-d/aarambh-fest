/* ============================================================
   DATA
============================================================ */
const CAT_COLOR = {
  technical : '#1D4ED8',
  cultural  : '#BE123C',
  sports    : '#047857',
  workshop  : '#B45309'
};

const EVENTS = [
  {
    title:'HackJNU 36', cat:'technical', day:1,
    time:'10:00 AM onwards', venue:'School of CS, Block A',
    prize:'₹60,000', desc:'A 36-hour hackathon across AI, fintech and sustainability tracks.'
  },
  {
    title:'Algorithm Arena', cat:'technical', day:2,
    time:'11:00 AM – 2:00 PM', venue:'Seminar Hall, Block C',
    prize:'₹25,000', desc:'Competitive programming across three escalating rounds with live leaderboard.'
  },
  {
    title:'Bot Battle', cat:'technical', day:3,
    time:'12:00 PM – 4:00 PM', venue:'Central Arena',
    prize:'₹40,000', desc:'Combat robotics knockout — build, wire and fight for the title.'
  },
  {
    title:'Swara — Solo Singing', cat:'cultural', day:1,
    time:'5:00 PM – 8:00 PM', venue:'Main Auditorium',
    prize:'₹18,000', desc:'Classical, semi-classical or contemporary — three minutes to impress.'
  },
  {
    title:'Taal — Dance Face-off', cat:'cultural', day:2,
    time:'6:00 PM – 9:00 PM', venue:'Main Auditorium',
    prize:'₹45,000', desc:'Solo and group categories judged on technique, energy and stage presence.'
  },
  {
    title:'Abhinay — Theatre', cat:'cultural', day:3,
    time:'3:00 PM – 6:00 PM', venue:'Open Air Theatre',
    prize:'₹30,000', desc:'Stage and street play categories on themes of social relevance.'
  },
  {
    title:'Cricket Championship', cat:'sports', day:1,
    time:'7:00 AM – 6:00 PM', venue:'Main Ground',
    prize:'₹35,000', desc:'Twelve-team knockout tournament with professional umpiring.'
  },
  {
    title:'Basketball 3x3', cat:'sports', day:2,
    time:'9:00 AM – 4:00 PM', venue:'Basketball Court',
    prize:'₹20,000', desc:'Fast-paced half-court basketball. Sixteen teams, one bracket.'
  },
  {
    title:'Chess Rapid', cat:'sports', day:3,
    time:'10:00 AM – 2:00 PM', venue:'Library Hall',
    prize:'₹12,000', desc:'Ten minutes plus five seconds increment. Swiss format, seven rounds.'
  },
  {
    title:'Blockchain Bootcamp', cat:'workshop', day:1,
    time:'9:00 AM – 1:00 PM', venue:'Innovation Lab',
    prize:'Certificate', desc:'Smart contracts, wallets and decentralised apps — hands-on with Solidity.'
  },
  {
    title:'UI/UX Design Sprint', cat:'workshop', day:2,
    time:'2:00 PM – 6:00 PM', venue:'Design Studio',
    prize:'Certificate', desc:'From wireframe to high-fidelity prototype in one afternoon.'
  },
  {
    title:'Cloud & DevOps 101', cat:'workshop', day:3,
    time:'10:00 AM – 1:00 PM', venue:'Server Lab',
    prize:'Certificate', desc:'Containers, CI/CD pipelines and deploying to the cloud from scratch.'
  }
];

const SCHEDULE = {
  1:[
    {t:'07:00 AM', h:'Cricket Championship', d:'Opening round matches on the Main Ground.', tag:'Sports'},
    {t:'09:00 AM', h:'Blockchain Bootcamp', d:'Setup, wallets and first smart contract.', tag:'Workshop'},
    {t:'10:00 AM', h:'HackJNU 36 Begins', d:'The clock starts. Thirty-six hours to build.', tag:'Technical'},
    {t:'05:00 PM', h:'Swara — Solo Singing', d:'Prelims followed by the grand final.', tag:'Cultural'},
    {t:'08:00 PM', h:'Inauguration Ceremony', d:'Lamp lighting, welcome address and opening performance.', tag:'Ceremony'}
  ],
  2:[
    {t:'09:00 AM', h:'Basketball 3x3', d:'Group stage through to semi-finals.', tag:'Sports'},
    {t:'11:00 AM', h:'Algorithm Arena', d:'Three tiers, three hours, one leaderboard.', tag:'Technical'},
    {t:'02:00 PM', h:'UI/UX Design Sprint', d:'Wireframe to prototype before the clock runs out.', tag:'Workshop'},
    {t:'06:00 PM', h:'Taal — Dance Face-off', d:'Solo category first, groups to follow.', tag:'Cultural'},
    {t:'09:00 PM', h:'EDM Night', d:'Open-air music on the Central Lawn.', tag:'Cultural'}
  ],
  3:[
    {t:'10:00 AM', h:'Chess Rapid', d:'Seven rounds of Swiss-format rapid chess.', tag:'Sports'},
    {t:'10:00 AM', h:'Cloud & DevOps 101', d:'Containers, pipelines and live deployment.', tag:'Workshop'},
    {t:'12:00 PM', h:'Bot Battle', d:'Knockout combat robotics in the Central Arena.', tag:'Technical'},
    {t:'03:00 PM', h:'Abhinay — Theatre', d:'Stage and street play performances back to back.', tag:'Cultural'},
    {t:'07:00 PM', h:'Stand-up Comedy Night', d:'An evening of student and guest performances.', tag:'Cultural'}
  ],
  4:[
    {t:'09:00 AM', h:'HackJNU Finals', d:'Top ten teams present to the judging panel.', tag:'Technical'},
    {t:'11:00 AM', h:'Robo Exhibition', d:'Open showcase of student-built robots and drones.', tag:'Technical'},
    {t:'02:00 PM', h:'Cultural Finals', d:'Best-of performances from all cultural categories.', tag:'Cultural'},
    {t:'05:00 PM', h:'Prize Distribution', d:'Awards, felicitation and closing address.', tag:'Ceremony'},
    {t:'07:00 PM', h:'Closing Concert', d:'Live band performance to wrap up AARAMBH 2027.', tag:'Cultural'}
  ]
};

/* ============================================================
   RENDER EVENTS
============================================================ */
const grid = document.getElementById('eventGrid');

function renderEvents(filter){
  filter = filter || 'all';
  const list = filter === 'all' ? EVENTS : EVENTS.filter(e => e.cat === filter);

  grid.innerHTML = list.map(e => `
    <article class="card" style="--accent:${CAT_COLOR[e.cat]}">
      <div class="card-top">
        <span class="badge">${e.cat}</span>
        <span class="day">Day ${e.day}</span>
      </div>
      <h3>${e.title}</h3>
      <p>${e.desc}</p>
      <ul class="meta">
        <li>${e.time}</li>
        <li>${e.venue}</li>
      </ul>
      <div class="card-foot">
        <span class="prize">${e.prize}</span>
        <button class="btn-reg" data-event="${e.title}">Register</button>
      </div>
    </article>
  `).join('');
}
renderEvents('all');

document.getElementById('filters').addEventListener('click', e => {
  const btn = e.target.closest('button[data-filter]');
  if(!btn) return;
  document.querySelectorAll('#filters button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderEvents(btn.dataset.filter);
});

/* ============================================================
   RENDER SCHEDULE
============================================================ */
const timeline = document.getElementById('timeline');

function renderDay(day){
  timeline.innerHTML = SCHEDULE[day].map((item, i) => `
    <div class="tl-item" style="animation-delay:${i * 60}ms">
      <div class="tl-time">${item.t}</div>
      <div class="tl-body">
        <h4>${item.h}</h4>
        <p>${item.d}</p>
        <span class="tag">${item.tag}</span>
      </div>
    </div>
  `).join('');
}
renderDay(1);

document.getElementById('dayTabs').addEventListener('click', e => {
  const btn = e.target.closest('button[data-day]');
  if(!btn) return;
  document.querySelectorAll('#dayTabs button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderDay(btn.dataset.day);
});

/* ============================================================
   MODAL
============================================================ */
const modal      = document.getElementById('modal');
const eventSel   = document.getElementById('fevent');
const modalLabel = document.getElementById('modalEventName');
const form       = document.getElementById('regForm');

eventSel.innerHTML = '<option value="">— Choose an event —</option>' +
  EVENTS.map(e => `<option value="${e.title}">${e.title}</option>`).join('');

function openModal(eventName){
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  if(eventName){
    eventSel.value = eventName;
    modalLabel.textContent = 'Registering for: ' + eventName;
  } else {
    modalLabel.textContent = 'Fill in your details to confirm your slot.';
  }
  setTimeout(() => document.getElementById('fname').focus(), 320);
}

function closeModal(){
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

grid.addEventListener('click', e => {
  const btn = e.target.closest('.btn-reg');
  if(btn) openModal(btn.dataset.event);
});
document.getElementById('ctaBtn').addEventListener('click', () => openModal(''));
document.getElementById('closeModal').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if(e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

/* ============================================================
   FORM SUBMIT
============================================================ */
const toast    = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');
let toastTimer;

function showToast(title, msg){
  toast.querySelector('b').textContent = title;
  toastMsg.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 4200);
}

form.addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;

  const fields = ['fname','femail','fphone','fcollege','fevent'];
  fields.forEach(id => {
    const el = document.getElementById(id);
    el.classList.remove('err');
    if(!el.value.trim()){ el.classList.add('err'); valid = false; }
  });

  const email = document.getElementById('femail');
  if(email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())){
    email.classList.add('err'); valid = false;
  }

  const phone = document.getElementById('fphone');
  if(phone.value.trim() && !/^[0-9]{10}$/.test(phone.value.replace(/\D/g,''))){
    phone.classList.add('err'); valid = false;
  }

  if(!valid){
    showToast('Check your details', 'Some fields need your attention.');
    return;
  }

  const name  = document.getElementById('fname').value.trim().split(' ')[0];
  const event = eventSel.value;

  closeModal();
  form.reset();
  showToast('Registration received', `${name}, you're confirmed for ${event}. Check your inbox.`);
});

/* ============================================================
   COUNTDOWN
============================================================ */
const TARGET = new Date('2027-02-18T09:00:00+05:30').getTime();

function tick(){
  const diff = TARGET - Date.now();
  const pad  = n => String(n).padStart(2,'0');

  if(diff <= 0){
    ['cd-d','cd-h','cd-m','cd-s'].forEach(id => document.getElementById(id).textContent = '00');
    return;
  }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff % 86400000 / 3600000);
  const m = Math.floor(diff % 3600000 / 60000);
  const s = Math.floor(diff % 60000 / 1000);

  document.getElementById('cd-d').textContent = pad(d);
  document.getElementById('cd-h').textContent = pad(h);
  document.getElementById('cd-m').textContent = pad(m);
  document.getElementById('cd-s').textContent = pad(s);
}
tick();
setInterval(tick, 1000);

/* ============================================================
   NAV
============================================================ */
const nav      = document.getElementById('nav');
const navLinks = document.getElementById('navLinks');
const burger   = document.getElementById('burger');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, {passive:true});

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.addEventListener('click', e => {
  if(e.target.tagName === 'A'){
    burger.classList.remove('open');
    navLinks.classList.remove('open');
  }
});

/* ============================================================
   REVEAL ON SCROLL
============================================================ */
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, {threshold:0.12, rootMargin:'0px 0px -60px 0px'});

document.querySelectorAll('.reveal').forEach(el => io.observe(el));