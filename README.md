# 3D Portfolio

This project is a 3D portfolio built with React and utilizes several libraries to enhance the user experience. It showcases 3D models and includes animations for an interactive presentation.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
- [Running the Project](#running-the-project)
- [Design Choices](#design-choices)
  - [Tilt Effect Configuration](#tilt-effect-configuration)
  - [Animation Variants](#animation-variants)
  - [Tailwind CSS Classes](#tailwind-css-classes)
  - [Flexbox Configuration](#flexbox-configuration)

## Technologies Used
- React
- Vite
- Tailwind CSS
- Material UI
- react-three/fiber
- @react-three/drei
- maath
- react-tilt
- react-vertical-timeline-component
- @emailjs/browser
- framer-motion
- react-router-dom

## Project Setup
To get started with this project, clone the repository and install the necessary dependencies.

```bash
git clone https://github.com/sorooshaghaei/3d-portfolio.git
cd 3d-portfolio
npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
```

## Running the Project
After setting up the project, you can run it locally using:

```bash
npm run dev
```

This will start the development server, and you can view the project in your browser at `http://localhost:5173`.

## Design Choices
### Tilt Effect Configuration
```javascript
options={{ max: 45, scale: 1, speed: 450 }}
```
This object configures the behavior of the tilt effect provided by `react-tilt`. Here’s what each property does:
- **max: 45**: Sets the maximum tilt rotation in degrees. The element can tilt up to 45 degrees in any direction based on the mouse position.
- **scale: 1**: Defines the scaling effect when tilting. A value of 1 means no scaling. To achieve a slight zoom-in effect, you might set it to 1.1 for a 10% zoom-in.
- **speed: 450**: Sets the speed of the tilt animation. Higher values make the tilt movement smoother and slower, while lower values make it quicker.

### Animation Variants
```javascript
fadeIn("right", "spring", 0.5 * index, 0.75)
```
This function call likely creates a configuration for a motion variant (or animation) with `framer-motion`. Here’s a breakdown of the parameters:
- **"right"**: This indicates the direction of the fade effect. In this case, the element will appear as if it’s coming from the right side. Other values might include "left", "up", or "down".
- **"spring"**: This defines the type of easing or transition animation. "spring" adds a spring-like effect, where the component will bounce slightly as it reaches its final position. Other options might include "easeIn", "easeOut", or "linear".
- **0.5 * index**: This is the delay applied to the animation, based on the index of the component. The delay increases with each element, so they appear one after the other in sequence, creating a staggered animation effect.
- **0.75**: This is likely the duration (in seconds) or a parameter that influences the animation timing. Lowering it would make the animation faster, while increasing it would slow it down. If you didn’t see a difference, it may mean other parameters or styling choices are overriding the effect.

### Tailwind CSS Classes
#### Width and Height Classes
```javascript
xs:w-[250px] w-full
rounded-[20px] py-5 px-12 min-h-[280px]
w-16 h-16
```
- **xs:w-[250px]**: For extra-small screens (tailored by the `xs:` prefix), the width is set to 250px.
- **w-full**: For larger screens, the width will take up the full available width of its container. Tailwind applies the most specific rule based on the screen size, so on small screens, `xs:w-[250px]` will take effect. On larger screens, it defaults to `w-full`.
- **rounded-[20px]**: Gives the element rounded corners with a radius of 20px.
- **py-5 and px-12**: Apply padding on the y-axis (top and bottom) of 1.25rem and on the x-axis (left and right) of 3rem.
- **min-h-[280px]**: Sets the minimum height of the element to 280px.
- **w-16**: Sets the width to 4rem (64px).
- **h-16**: Sets the height to 4rem (64px).

**Difference**: `w-16` is a predefined width class in Tailwind (4rem). `w-[280px]` uses square bracket notation for custom values (like 280px). You can use predefined width values like `w-16` for quick sizing or custom values when you need a specific width not available in Tailwind’s standard sizing.

### Flexbox Configuration
```javascript
<div className="mt-20 flex flex-wrap gap-10">
```
- **flex-wrap**: When you apply `flex-wrap`, child items wrap onto new lines if they can’t all fit on one line. Without `flex-wrap`, items will overflow the container in a single row. Other flex properties like `flex-nowrap` force items onto a single row, regardless of overflow.
- **gap-10**: This sets the spacing between child elements in the flex container. `gap-10` means there is a space of 40px between each item (since 10 is multiplied by 4px). Unlike padding or margin, which affects spacing relative to the element’s container, `gap` only controls spacing between flex children.

**Why use gap instead of padding or margin?**: `gap` is generally easier to manage for spacing between flex items, as it applies consistent spacing without adding extra padding or margin around the entire container. If you used padding or margin, you would need to set spacing individually for each child, which can be less efficient.
