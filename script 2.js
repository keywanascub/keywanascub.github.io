const eventDate = new Date('2026-08-29T15:00:00-04:00');
function tick(){
  const diff = Math.max(0, eventDate - new Date());
  const d = Math.floor(diff/86400000);
  const h = Math.floor(diff/3600000)%24;
  const m = Math.floor(diff/60000)%60;
  const s = Math.floor(diff/1000)%60;
  document.getElementById('days').textContent=d;
  document.getElementById('hours').textContent=h;
  document.getElementById('minutes').textContent=m;
  document.getElementById('seconds').textContent=s;
}
setInterval(tick,1000); tick();
const start='20260829T190000Z';
const end='20260829T220000Z';
const text=encodeURIComponent("Keywana & Bradley's Royal Gender Reveal");
const details=encodeURIComponent("A little cub is on the way! RSVP by August 10, 2026. Text Keywana at 803-722-8645.");
const location=encodeURIComponent("205 Kingnut Dr, Columbia, SC 29209");
document.getElementById('calendarLink').href=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${start}/${end}&details=${details}&location=${location}`;
