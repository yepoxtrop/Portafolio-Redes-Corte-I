Está es la estrcutura base del proyecto.
```
Index.html          # Pagina principal
src
├───pages           # Paginas del proyecto en html
│   ├───week1.html  # Pagina de la semana 1
│   ├───week2.html  # Pagina de la semana 2
│   ├───week3.html  # Pagina de la semana 3
│   ├───week4.html  # Pagina de la semana 4
│   └───week5.html  # Pagina de la semana 5
├───scripts         # Scripts del proyecto en js
└───styles          # Estilos del proyecto en css
```


La paleta de colores utilizada en el proyecto es la siguiente:
  surface: '#fbf8fa'
  surface-dim: '#dcd9db'
  surface-bright: '#fbf8fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f5'
  surface-container: '#f0edef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e3'
  on-surface: '#1b1b1d'
  on-surface-variant: '#45474c'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#545f74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#111c2e'
  on-primary-container: '#7a849b'
  inverse-primary: '#bcc7df'
  secondary: '#085ac0'
  on-secondary: '#ffffff'
  secondary-container: '#5b94fd'
  on-secondary-container: '#002c66'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#2a1704'
  on-tertiary-container: '#9d7e62'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2fc'
  primary-fixed-dim: '#bcc7df'
  on-primary-fixed: '#111c2e'
  on-primary-fixed-variant: '#3d475b'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#ffdcc0'
  tertiary-fixed-dim: '#e5c0a1'
  on-tertiary-fixed: '#2a1704'
  on-tertiary-fixed-variant: '#5b422a'
  background: '#fbf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e3'
  terminal-green: '#10b981'
  latency-amber: '#f59e0b'
  packet-loss-red: '#ef4444'
  wire-gray: '#94a3b8'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  mono-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter-md: 24px
  margin-desktop: 64px
  margin-mobile: 16px
  stack-xs: 4px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  stack-xl: 64px
---

## Brand & Style
The design system is engineered for a Senior Network Engineer's portfolio, emphasizing connectivity, infrastructure reliability, and systematic logic. The brand personality is authoritative, precise, and architectural. It targets technical recruiters and CTOs who value structural integrity and high-level systems thinking.

The visual style is **Corporate / Modern** with a **Technical Blueprint** overlay. It utilizes a refined, grid-based aesthetic that mimics network topology diagrams and server rack configurations. The UI is characterized by high information density, clear pathfinding, and a "living infrastructure" feel that suggests data movement and seamless integration.

## Typography
The system employs a dual-font strategy to differentiate between narrative expertise and technical data.

**Inter** serves as the primary typeface for all headers and body copy. Its neutral, geometric construction provides the clarity required for complex engineering documentation.

**JetBrains Mono** is the "system font." It must be used for all technical specifications, IP addresses, port numbers, terminal commands, and metadata tags. This font acts as a visual cue that the information presented is raw data or system-level configuration.

**Scaling:** On mobile devices, `headline-xl` should transition to `headline-xl-mobile` to prevent long technical terms (e.g., "Virtualization") from breaking the container.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to mimic the rigid organization of a server rack. 

- **Desktop (1440px+):** A 12-column grid with a max-width of 1280px. Gutters are fixed at 24px to allow for dense technical information without clutter.
- **Tablet:** 8-column fluid grid with 24px margins.
- **Mobile:** 4-column fluid grid with 16px margins.

**Rhythm:** Spacing is strictly based on a 4px base unit. Use `stack-lg` (32px) for separating logical network segments (sections) and `stack-md` (16px) for internal card padding. Visual "connecting lines" (1px width) should be used to link related content blocks, simulating a topology map.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** and **Low-Contrast Outlines** to maintain the "blueprint" aesthetic. 

- **Level 0 (Base):** #F8FAFC (Surface).
- **Level 1 (Cards/Nodes):** Pure white background with a 1px solid border (#E2E8F0). No shadow is used in the default state to keep the UI flat and technical.
- **Level 2 (Active/Hover):** When a node or card is interacted with, apply a 1px border of #0058be and a very subtle ambient shadow: `0 4px 20px rgba(9, 20, 38, 0.08)`.
- **Backdrop Blurs:** Use subtle blurs (8px) for navigation overlays or modal dialogs to simulate a "glass terminal" look over the main infrastructure.

## Shapes
The shape language is **Soft** (4px radius). This slight rounding prevents the UI from feeling dated or overly "brutalist" while maintaining the precise, straight-edged feel of hardware components.

- **Infrastructure Cards:** Standard 4px radius.
- **Port/Status Tags:** Standard 4px radius to match hardware labels.
- **Interactive Buttons:** Standard 4px radius. 
- **Topology Icons:** Contained within square frames with 2px rounded corners to emphasize the "node" metaphor.

## Components

**Buttons (Action Nodes)**
- **Primary:** Solid #091426 with white text. Used for "Download Full Schematic" or "View Project."
- **Outline:** 1px border of #94a3b8 with #091426 text. Used for secondary actions like "View Source Code."
- **Terminal Button:** Dark background (#1E293B) with Terminal Green text in JetBrains Mono.

**Cards (Project/Network Nodes)**
- Features a `mono-label` header (e.g., "NODE_01 // VLAN_CONFIG").
- Includes a 1px horizontal separator between the header and the body.
- Footer contains "Status Chips" indicating the protocols used (e.g., BGP, OSPF, TCP/IP).

**Status Indicators**
- **Traffic Light Dots:** 8px circles using the named state colors (Green, Amber, Red). 
- **Progress Bars:** Thin 4px height bars with a #E2E8F0 track and a #0058be "data flow" fill.

**Input Fields (Configuration Inputs)**
- Styled to look like a terminal prompt. Use a subtle `>` prefix in the placeholder.
- Border: 1px solid #CBD5E1; Focus: 1px solid #0058be with a soft glow.

**Navigation (The Backbone)**
- Desktop navigation should be a persistent sidebar or a structured top-bar that mimics a patch panel, with active links highlighted in #0058be with a small "active LED" dot.