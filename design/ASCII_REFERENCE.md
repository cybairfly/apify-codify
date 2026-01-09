# ASCII Art Library

Complete collection of ASCII art patterns and decorations.

## Quick Reference

### Boxes

```
Double Line:
╔═══════╗
║       ║
╚═══════╝

Single Line:
┌───────┐
│       │
└───────┘

Heavy:
┏━━━━━━━┓
┃       ┃
┗━━━━━━━┛

Bracket:
[=======]
|       |
[=======]
```

### Arrows & Indicators

```
→  Right arrow
↗  Up-right diagonal
↓  Down arrow
↓↓ Double down
>>  Double right chevron
<<  Double left chevron
^   Caret up
^^^ Multiple carets
```

### Progress Bars

```
Complete: ====================
Partial:  ==========          
Loading:  ......          
Dashes:   --------------------
Stars:    ********************
```

### Symbols

```
✓  Checkmark
✗  X mark
✶  Star
•  Bullet
·  Middle dot
@  At sign
#  Hash
$  Dollar
~  Tilde
*  Asterisk
+  Plus
-  Minus
=  Equals
```

### Faces & Characters

```
(=^･^=)  Cat face
(o_o)    Wide eyes
(^_^)    Happy
(-_-)    Neutral
(>_<)    Frustrated
(◕‿◕)   Cute
(⌐■_■)   Cool
```

### Corners & Edges

```
Top Left:     ┌─  ╔═  ┏━  [
Top Right:    ─┐  ═╗  ━┓  ]
Bottom Left:  └─  ╚═  ┗━  [
Bottom Right: ─┘  ═╝  ━┛  ]
```

### Spinners (Animation Frames)

```
Line Spinner:  |  /  -  \
Dot Loader:    .  ..  ...  ....
Bounce:        ^  -  v  -
Arrow Rotate:  ←  ↖  ↑  ↗  →  ↘  ↓  ↙
```

### Dividers

```
Solid:   ────────────────────
Double:  ════════════════════
Dotted:  ··················
Dashed:  ‐ ‐ ‐ ‐ ‐ ‐ ‐ ‐ ‐
Mixed:   ─·─·─·─·─·─·─·─·─·
```

## Complex Patterns

### Terminal Window

```
┌─────────────────────────┐
│ > command --flag value  │
│ Processing...           │
│ ✓ Complete              │
└─────────────────────────┘
```

### Loading Bar

```
[====================] 100%
[==========          ]  50%
[====                ]  20%
```

### Status Box

```
╔═══════════════╗
║   ✓ SUCCESS   ║
╚═══════════════╝

┌───────────────┐
│   ! WARNING   │
└───────────────┘
```

### Code Block

```
╔════════════════════╗
║ function hello() { ║
║   return "world";  ║
║ }                  ║
╚════════════════════╝
```

### Menu/List

```
┌─ Menu ─────────┐
│ → Item 1       │
│   Item 2       │
│   Item 3       │
└────────────────┘
```

### Graph/Chart

```
    ^
100 ║     ╱╲
 75 ║    ╱  ╲
 50 ║   ╱    ╲
 25 ║  ╱      ╲
  0 ╚═══════════>
```

### Badge/Label

```
[ NEW ]
[ PRO ]
[ v2.0 ]
[ ✓ VERIFIED ]
```

### Directory Tree

```
project/
├── src/
│   ├── index.js
│   └── utils.js
├── tests/
│   └── test.js
└── package.json
```

## Animation Sequences

### Processing

```
Frame 1: [|       ] Processing
Frame 2: [ /      ] Processing
Frame 3: [  -     ] Processing
Frame 4: [   \    ] Processing
Frame 5: [    |   ] Processing
```

### Loading Dots

```
Frame 1: Loading.
Frame 2: Loading..
Frame 3: Loading...
Frame 4: Loading....
```

### Bounce

```
Frame 1: ^  Uploading
Frame 2: -  Uploading
Frame 3: v  Uploading
Frame 4: -  Uploading
```

### Progress

```
[>                   ]   5%
[=>                  ]  10%
[===>                ]  20%
[=======>            ]  40%
[=============>      ]  70%
[===================>] 100%
```

## Usage Tips

1. **Monospace Font**: Always use monospace fonts for ASCII art to maintain alignment
2. **Line Height**: Set line-height to 1.0-1.2 for tight spacing
3. **Color**: Use muted colors (gray/green) for subtle decoration
4. **Accessibility**: Mark as `aria-hidden="true"` since they're decorative
5. **Animation**: Rotate through frames at 100-300ms intervals
6. **Contrast**: Keep ASCII decorations at lower opacity (0.3-0.5)

## Character Sets

### Box Drawing (Unicode)
```
─ │ ┌ ┐ └ ┘ ├ ┤ ┬ ┴ ┼  Light
═ ║ ╔ ╗ ╚ ╝ ╠ ╣ ╦ ╩ ╬  Double
━ ┃ ┏ ┓ ┗ ┛ ┣ ┫ ┳ ┻ ╋  Heavy
╭ ╮ ╰ ╯                Rounded
```

### Arrows (Unicode)
```
← → ↑ ↓  Basic
↖ ↗ ↘ ↙  Diagonal
⇐ ⇒ ⇑ ⇓  Double
➔ ➜ ➝ ➞  Bold
```

### Geometric Shapes
```
□ ■ ▪ ▫ ▢ ▣  Squares
○ ● ◯ ◉ ◎ ◦  Circles
△ ▲ ▴ ▵ ▸ ▹  Triangles
```

## Composition Guidelines

1. **Keep it Simple**: Less is more - one decoration per section
2. **Consistent Style**: Stick to one box style (double/single) per page
3. **Hierarchy**: Larger ASCII for heroes, smaller for accents
4. **Spacing**: Add padding around ASCII art
5. **Alignment**: Center decorations or align with text
