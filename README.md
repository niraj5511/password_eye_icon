# Torchlight – Password Eye Icon Login

A dark-themed login form with an animated show/hide password toggle. Clicking the eye icon sweeps a "torch beam" across the password field, and the field switches between hidden and visible text while the beam passes over it.

Built with plain HTML, CSS, and JavaScript. No frameworks, no build step.


## Features

- Show/hide password toggle using an eye icon inside the input
- Torch-beam and glow animation when the password is revealed
- Card border glow and input highlight while the password is visible
- Icon swaps between "eye" and "eye-off", with a short spark animation on each click
- Accessible toggle button: `aria-label` and `aria-pressed` update on every click
- Responsive layout for small screens
- Respects `prefers-reduced-motion`
- Custom fonts: Fraunces (headings) and JetBrains Mono (body)

## Tech Stack

- HTML5
- CSS3 (custom properties, gradients, `clip-path`, `mix-blend-mode`, keyframe animations)
- Vanilla JavaScript
- Google Fonts

## Project Structure

```
password_eye_icon/
├── index.html   # Login form markup and inline SVG icons
├── styles.css   # Theme, layout, beam and glow animations
└── script.js    # Toggle logic for the eye button
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/niraj5511/password_eye_icon.git
   cd password_eye_icon
   ```
2. Open `index.html` in your browser.

No installation or build is needed. An internet connection is needed to load the Google Fonts; without it, the page falls back to default fonts.

## How It Works

`script.js` listens for clicks on the eye button and toggles a `shown` state. On each click it:

1. Plays the spark animation on the button.
2. Adds or removes the `on`, `ring`, and `lit` classes, which trigger the CSS beam, card glow, and input highlight.
3. After 260 ms, switches the input `type` between `password` and `text`, swaps the icon, and updates the ARIA attributes. The delay makes the change land while the beam is passing over the field.

## Customization

- **Colors:** edit the CSS variables at the top of `styles.css` (`--torch`, `--torch-core`, `--torch-deep`, `--bg`, and so on).
- **Timing:** change the transition durations on `.beam-left` and `.bulb-glow` in `styles.css`, and the `260` ms delay in `script.js`.

## Known Limitations

- This is a front-end demo only. The form does not submit (`onsubmit="return false;"`) and there is no authentication.
- "Remember me", "Forgot password?", and "Create an account" are not connected to anything.
