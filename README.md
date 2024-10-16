# React + Vite

dependencies: tailwind , material ui and these: npm i --legacy-peer-deps@react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom


# About Component Overview

# This component renders a section with an introduction and an animated list of service cards.
# It uses:
# - react-tilt for hover effects.
# - framer-motion for animations.
# - Tailwind CSS for responsive styling.

# Key Concepts in Code

## Tilt Effect Options (react-tilt)
# The tilt effect is configured with these options:
#   options={{ max: 45, scale: 1, speed: 450 }}
#   - max: Maximum tilt angle in degrees (45°).
#   - scale: Scale on hover (1 means no scaling).
#   - speed: Speed of tilt animation (450ms).

## Motion Variants (framer-motion)
#   fadeIn("right", "spring", 0.5 * index, 0.75)
#   - right: Direction of the fade-in effect.
#   - spring: Type of animation (spring-like motion).
#   - 0.5 * index: Delays animation based on component index for staggered effect.
#   - 0.75: Animation duration (seconds).

## Tailwind CSS Classes
#   xs:w-[250px] w-full rounded-[20px] py-5 px-12 min-h-[280px]
#   - xs:w-[250px]: Width is 250px for extra-small screens.
#   - w-full: Full-width for larger screens.
#   - rounded-[20px]: 20px rounded corners.
#   - py-5 and px-12: Padding (top/bottom and left/right).
#   - min-h-[280px]: Minimum height of 280px.

## Flexbox Layout with Tailwind
#   className="mt-20 flex flex-wrap gap-10"
#   - flex-wrap: Allows items to wrap to a new line if they overflow.
#   - gap-10: 40px spacing between flex items (10 * 4px).


