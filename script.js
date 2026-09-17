const eyeBtn = document.getElementById('eyeBtn');
const password = document.getElementById('password');
const beams = document.getElementById('beams');
const card = document.getElementById('card');
const eyeOn = eyeBtn.querySelector('.eye-on');
const eyeOff = eyeBtn.querySelector('.eye-off');

let shown = false;
let revealTimer = null;

eyeBtn.addEventListener('click', () => {
  shown = !shown;

  // brief spark on the icon itself, every click, regardless of direction
  eyeBtn.classList.remove('spark');
  void eyeBtn.offsetWidth;
  eyeBtn.classList.add('spark');

  clearTimeout(revealTimer);

  beams.classList.toggle('on', shown);
  card.classList.toggle('ring', shown);
  password.classList.toggle('lit', shown);
  eyeBtn.classList.toggle('on', shown);

  // swap the actual field type partway through the beam's travel,
  // so the reveal/hide lands while the light is passing over the text
  revealTimer = setTimeout(() => {
    password.type = shown ? 'text' : 'password';
    eyeOn.style.display = shown ? 'none' : 'block';
    eyeOff.style.display = shown ? 'block' : 'none';
    eyeBtn.setAttribute('aria-label', shown ? 'Hide password' : 'Show password');
    eyeBtn.setAttribute('aria-pressed', String(shown));
  }, 260);
});