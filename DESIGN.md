# Design System Specification: High-End SaaS Editorial

## 1. Overview & Creative North Star: "Kinetic Luminescence"
The Creative North Star for this design system is **Kinetic Luminescence**. We are moving away from the static, "boxed-in" nature of traditional SaaS layouts. Instead, we treat the interface as a living environment of light and depth. 

By leveraging **intentional asymmetry**, we break the predictable rhythm of the grid. Elements should feel as though they are floating in a pressurized, dark vacuum, defined not by lines, but by the way light (vibrant neons) interacts with surfaces (deep purples and glass). This system prioritizes a premium, editorial feel where white space is not "empty," but serves as a high-contrast stage for bold typography and 3D assets.

---

## 2. Colors: The Depth of the Void
Our palette is anchored in a sophisticated dark mode (`#0e0e12`), allowing our electric accents to vibrate with energy.

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders are prohibited for sectioning. Structural boundaries must be defined solely through background color shifts. 
- To separate a hero from a feature section, transition from `surface` (`#0e0e12`) to `surface-container-low` (`#131317`). 
- Let the change in tonal value guide the eye; do not "trap" content in boxes.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the surface-container tiers to create nested depth:
1.  **Base Layer:** `surface` (`#0e0e12`) – The infinite canvas.
2.  **Sectional Layer:** `surface-container-low` (`#131317`) – For secondary content blocks.
3.  **Component Layer:** `surface-container-high` (`#1f1f25`) – For cards or interactive modules.
4.  **Floating Layer:** Glassmorphism utilizing `surface-bright` (`#2c2b32`) at 40-60% opacity with a 20px-40px backdrop blur.

### The "Glass & Gradient" Rule
Standard flat colors are for utilities; "soul" is found in the transition. 
- **CTAs:** Use a linear gradient from `primary` (`#a1a6ff`) to `primary-dim` (`#5860ff`).
- **Accents:** Use `tertiary-container` (`#00f4fe`) as a neon glow effect (glow-spread) behind high-quality 3D icons to simulate light emission.

---

## 3. Typography: Authoritative Clarity
We pair the geometric confidence of **Plus Jakarta Sans** for display with the technical precision of **Inter** for utility.

- **Display (Lg/Md/Sm):** Use `display-lg` (3.5rem) for hero statements. Tighten letter-spacing by -0.02em to create a dense, premium "editorial" look.
- **Headlines:** `headline-lg` (2rem) should be used for section starters, always in `on-surface`.
- **Body Text:** `body-lg` (1rem) using Inter. Maintain a line-height of 1.6 to ensure readability against the high-contrast dark background.
- **Labels:** `label-md` (0.75rem) in `secondary` (`#bf81ff`) for overlines or categories. This provides a "neon sign" effect that guides the user's hierarchy.

---

## 4. Elevation & Depth: Tonal Layering
We do not use drop shadows to mimic height; we use light and transparency.

- **The Layering Principle:** To "lift" a card, place a `surface-container-highest` (`#25252b`) object on a `surface` background. The contrast in luminosity provides all the "lift" required.
- **Ambient Shadows:** For floating modals, use a "Neon Shadow." Instead of black, use `primary` (`#a1a6ff`) at 8% opacity with a `16` (5.5rem) blur. This mimics the way an electric blue screen casts light on a dark surface.
- **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` (`#48474c`) token at 20% opacity. It should be felt, not seen.
- **Glassmorphism:** Apply to navigation bars and floating action buttons. Use `surface-bright` at 50% opacity with a `DEFAULT` (1rem) corner radius and a 1px "inner glow" using `outline` at 10% opacity.

---

## 5. Components: The Primitive Set

### Buttons
- **Primary:** Gradient from `primary` to `primary-dim`. `xl` (3rem) rounded corners. Text in `on-primary-fixed` (Black) for maximum legibility.
- **Secondary:** Ghost style. `outline-variant` border (20% opacity) with `on-surface` text. On hover, fill with `surface-container-high`.
- **Tertiary:** `secondary` (`#bf81ff`) text with no background. Use for "Learn More" links with a trailing arrow.

### Cards & Lists
- **Rule:** Absolute prohibition of divider lines.
- **Implementation:** Separate list items using the `3` (1rem) spacing scale. Use a `surface-container-low` background on hover to highlight the active row.
- **Radius:** All cards must use the `lg` (2rem) or `xl` (3rem) corner radius to maintain the "Modern SaaS" friendliness.

### Input Fields
- **Default State:** `surface-container-highest` background, no border.
- **Focus State:** 1px "Ghost Border" using `tertiary` (`#a1faff`) and a subtle outer glow of the same color at 10% opacity.
- **Error State:** Use `error` (`#ff6e84`) for the label and a `surface-container-highest` background.

### 3D Icon Integration
- Icons should never sit on a flat surface. Place them on a `surface-container-high` circular "pod" with a `xl` radius and a subtle `tertiary-container` glow beneath them.

---

## 6. Do's and Don'ts

### Do:
- **Do** use asymmetrical layouts (e.g., a large display heading on the left balanced by a floating 3D asset that breaks the container on the right).
- **Do** use the `20` (7rem) and `24` (8.5rem) spacing scales for vertical section breathing room.
- **Do** use "Neon Overlines": Small, all-caps `label-sm` text in `tertiary` to categorize sections.

### Don't:
- **Don't** use pure black (`#000000`) for backgrounds unless it is for a specific "infinite" transition; use `surface` (`#0e0e12`) to maintain depth.
- **Don't** use 100% opaque borders. They create "visual noise" that destroys the premium feel.
- **Don't** use standard system icons. Only use high-quality, custom 3D or thick-stroke (2px+) monochromatic icons that match the `primary` color.
- **Don't** crowd the layout. If a section feels "busy," increase the spacing scale by two increments.