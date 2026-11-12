# ANON // Spatial 3D OPSEC & Anti-Forensics Configurator

Interactive, viewport-locked Three.js & GSAP spatial interface for **[ANON v3.0.0](https://github.com/egnake/anon)** — a zero-dependency Pure Rust Operational Security (OPSEC) and Anti-Forensics framework engineered for Red Team operations by [egnake](https://github.com/egnake).

---

## Architecture & Core Features

- **Cryptographic Tesseract 3D Assembly (`Three.js r128` + `GSAP 3.12`):**
  - Central beveled diamond-core cube overlaid with an edge cage and 8 articulated vault corner armor blocks.
  - **01 // Identity (`⁶`):** 6 faceted stealth armor plates concealing glowing optic slits covering `mac_changer`, `hostname_changer`, `timezone_changer`, `os_obfuscation`, `browser_anonymization`, and `bluetooth_disabler`.
  - **02 // Routing (`⁶`):** 3 concentric diamond-profile CNC gyroscope gimbals with live orbiting route nodes for `ip_changer`, `dns_changer`, `doh_shield`, `tor_bridges`, `i2p_integration`, and `proxychains_integration`.
  - **03 // Anti-Forensics (`⁵`):** 12 radially ejecting NAND memory blades with an oscillating vertical laser scan plane for `anti_cold_boot`, `volatile_logging`, `process_obfuscation`, `execution_stealth`, and `sandbox_isolation`.
  - **04 // Defense (`⁵`):** Bounded 1,200-node tactical chaff particle matrix and octahedral wireframe hull for `kill_switch`, `anti_mitm`, `dpi_spoofing`, `traffic_obfuscation`, and `leak_auditor`.
- **Aligned to Real `egnake/anon` v3.0.0 Rust Repository:**
  - Interactive **Rust Core Architecture Drawer** detailing all 15 Rust project files (`Cargo.toml` + 14 `.rs` files, ~8,200 LOC, zero external crates) alongside the 6 headless `--profile` presets (`paranoia`, `quick`, `pentest`, `darknet`, `lockdown`, `ghost`) and 5 built-in utilities (`--dashboard`, `--browser`, `--audit`, `--clean-meta`, `--panic`).
  - Live GitHub telemetry bar (`Stars` / `Forks`) and direct release/tag archive download (`v3.0.0.zip`).
  - Switchable platform quickstart recipes synced from State 1 target pills to the Finale CLI terminal (`LINUX`, `WSL2`, `CARGO`, `DOCKER`).
- **Editorial Spatial HUD:**
  - 3 selectable polarity themes: **Titanium** (Industrial Light), **Obsidian** (Vantablack Dark), and **Cobalt Lab** (Tactical Blueprint).
  - Full live localization toggle (**EN** / **TR**).
  - Procedural Web Audio synthesizer feedback and custom magnetic reticle cursor.

---

## Project Structure

```text
Anon-Site/
├── .gitignore
├── .nojekyll
├── favicon.ico
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── icons/
    │   ├── anon-emblem.png
    │   ├── apple-touch-icon.png
    │   ├── favicon-16.png
    │   ├── favicon-32.png
    │   └── favicon-192.png
    └── js/
        └── app.js
```

---

## Local Preview & Deployment

Because the site uses zero build steps and relative asset paths (`favicon.ico`, `assets/...`), it deploys directly on **GitHub Pages** or any static web server:

```bash
# Serve locally via Python
python -m http.server 8080
```

Then visit `http://localhost:8080`.

---

## License

MIT License — synchronized with [egnake/anon](https://github.com/egnake/anon).
