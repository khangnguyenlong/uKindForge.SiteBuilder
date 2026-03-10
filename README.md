# uKindForge.BuilderBuilder

A modular **Site Builder for Umbraco 17** that enables building websites using a flexible block-based architecture, reusable themes, and a structured design system.

The goal of this project is to provide a **developer-friendly and editor-friendly foundation** for building modern websites on top of Umbraco.

Instead of creating page templates manually, this builder allows sites to be composed using **layout blocks, content blocks, and theme settings**.

---

# Overview

uKindForge.BuilderBuilder provides a structured architecture for building websites using:

- Block Grid based page builder
- Reusable themes
- Design tokens (colors, typography)
- Flexible section layouts
- Reusable UI components

It is designed for:

- Developers who want to build a website in Umbraco
- Editors who want drag-and-drop page building
- Teams who want consistent design systems

---

# Key Concepts

## Themes

Themes define the **visual system of a website**.

A theme includes:

- Color palette
- Color tokens
- Typography
- Layout settings
- Button styles

Themes allow multiple websites or pages to reuse the same design system.

---

## Block Grid Builder

Pages are composed using the **Umbraco Block Grid Editor**.

Each page typically contains:

- Header
- Body
- Footer

These areas can contain layout blocks and content blocks.

---

## Section Layouts

Section layouts define the structure of page content.

Examples:

- 1 column
- 2 columns (50/50)
- 3 columns
- 4 columns
- 66/33
- 25/50/25

Each layout supports shared settings such as:

- Background
- Overlay
- Image or Video background

---

## Content Blocks

Content blocks are reusable UI components.

Examples:

- Heading
- Button
- Image
- Video
- Card
- Tabs
- Accordion
- Slider
- Rich Text
- Menu
- Icons

Blocks can be reused across pages.

---

# Architecture

The project follows a structured content architecture inside Umbraco.
uKindForge.SiteBuilder
│
├─ Blocks
│ ├─ Section Layouts
│ └─ Common Blocks
│
├─ Pages
│ ├─ Home
│ └─ Page
│
└─ Themes


---

# Theme System

Themes provide centralized design control.

## Colors

Theme color system includes:

- Color palette
- Design tokens
- Section color settings
- Navigation colors
- Button colors
- Content colors

Example tokens: 
- Primary
- Secondary
- Accent
- Background
- Text
- Border



---

## Typography

Typography settings support:

- Google Fonts
- Custom fonts
- Typography scale

Elements supported:

- H1
- H2
- H3
- H4
- H5
- H6
- Text

---

# Core Features

## Page Builder

- Block Grid editor
- Header / Body / Footer structure
- Flexible layouts

## Section Background System

Each section can configure:

- Background type
  - None
  - Color
  - Image
  - Video

Additional options:

- Overlay color
- Opacity
- Image upload
- External media URL

## Custom Property Editors

Examples:

- Toggle Plus
- Radio Button Plus
- Color selector connected to Theme

## SEO Settings

Fields include:

- Page Title
- Meta Description
- Social Share Image

## Website Settings

Global settings include:

- Site Name
- Favicon
- 404 page
- SMTP configuration
- Custom scripts
- Custom CSS

---

# Frontend Rendering

Frontend rendering supports:

- Master page rendering
- Page rendering
- Block grid rendering
- Theme integration
- Color token application

---

# Development Roadmap

## Phase 1 — Core Foundation

- Theme system
- Block grid architecture
- Section layouts
- Content blocks
- Page types
- Block preview in backoffice

## Phase 2 — Advanced Features

Planned:

- Automatic color palette generator
- Dynamic form builder
- Blog system
- Multi-language support
- Block search
- Live preview

## Phase 3 — Productization

- Packaging
- Documentation
- Installation guides
- Example implementations

## Phase 4 — Launch

- Demo website
- Marketing website
- Community distribution

---

# MVP Scope

The first version focuses on building a working block-based site builder.

Core MVP features:

- Block Grid page builder
- Theme configuration
- Layout system
- Basic UI blocks
- Page rendering

---

# Installation (Development)

Requirements:

- .NET 8
- Umbraco 17

Clone repository:
`git clone https://github.com/your-repo/ukind-builder`

Run the project:
`dotnet run`

Then access:
`/umbraco`

---

# Status
This project is currently under active development.
Features and APIs may change as the architecture evolves.
