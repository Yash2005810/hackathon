function updateCountdown() {
    const target = new Date('2026-03-30T09:00:00').getTime();
    const now = new Date().getTime();
    const diff = target - now;
    if (diff <= 0) {
      document.getElementById('cd-days').textContent = '00';
      document.getElementById('cd-hours').textContent = '00';
      document.getElementById('cd-mins').textContent = '00';
      document.getElementById('cd-secs').textContent = '00';
      return;
    }
    const d = Math.floor(diff / (1000*60*60*24));
    const h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    const m = Math.floor((diff % (1000*60*60)) / (1000*60));
    const s = Math.floor((diff % (1000*60)) / 1000);
    document.getElementById('cd-days').textContent = String(d).padStart(2,'0');
    document.getElementById('cd-hours').textContent = String(h).padStart(2,'0');
    document.getElementById('cd-mins').textContent = String(m).padStart(2,'0');
    document.getElementById('cd-secs').textContent = String(s).padStart(2,'0');
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  function scrollTo(id) {
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
  }

  function openModal() {
    document.getElementById('modal').classList.add('active');
    goStep(1);
  }
  function closeModal() {
    document.getElementById('modal').classList.remove('active');
  }
  document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });

  function goStep(n) {
    [1,2,3,4].forEach(i => {
      document.getElementById('step'+i).style.display = i===n ? 'block' : 'none';
      const dot = document.getElementById('s'+i);
      dot.className = 'step-dot' + (i<n ? ' done' : i===n ? ' active' : '');
    });
  }

  function selectTrack(pick, other) {
    document.getElementById(pick).classList.add('selected');
    document.getElementById(other).classList.remove('selected');
  }

  function toggleFaq(el) {
    el.classList.toggle('open');
    const arrow = el.querySelector('.faq-arrow');
    arrow.textContent = el.classList.contains('open') ? '▲' : '▼';
  }