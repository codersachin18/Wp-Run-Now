# WP Run Now

> Run WordPress locally on Windows — no Docker, no complex setup. Just install and go.

🌐 **Website:** https://wp-runs.web.app  
💾 **Download:** [Latest Release](https://github.com/codersachin18/Wp-Run-Now/releases)

---

## What is WP Run Now?

WP Run Now is a free Windows desktop app that lets you create and manage local WordPress sites — similar to LocalWP, but with no Docker dependency. Everything is bundled inside the app: PHP, MySQL, Nginx, and WP-CLI.

You install the app once, click +, enter a site name, and WordPress is fully installed and running in minutes at a clean `.local` domain.

---

## Features

- **One-click WordPress install** — downloads WP core, creates DB, configures everything automatically
- **Bundled stack** — PHP 8.2, MySQL 8.0, Nginx all included, no separate installs
- **`.local` domains** — auto-updates Windows hosts file so `mysite.local` just works
- **WP-CLI built-in** — run WP-CLI commands directly from the app shell
- **One-click admin login** — log into WP dashboard without typing credentials
- **Multiple sites** — run unlimited sites simultaneously, each fully isolated
- **Site backup** — download WordPress files + SQL database with one click
- **PHP version switching** — change PHP per site
- **Start/Stop sites** — full process management, DB dumped on stop and restored on start
- **Delete with confirmation** — safely removes files, DB, nginx config, and hosts entry

---

## How It's Built

### Desktop App

| Layer | Technology |
|-------|-----------|
| Desktop framework | Electron 30 |
| Frontend UI | React 18 + TypeScript |
| Build tool | Vite 5 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| State management | Zustand (with localStorage persistence) |
| Icons | Lucide React + React Icons |

### Backend (Electron Main Process)

| Component | How it works |
|-----------|-------------|
| **PHP** | Bundled PHP 8.2 NTS Windows binary, spawned as `php-cgi.exe` FastCGI process per site |
| **MySQL** | Bundled MySQL 8.0 portable, single shared instance, per-site databases |
| **Nginx** | Bundled Nginx Windows binary, one master process, per-site `.conf` files |
| **WP-CLI** | Bundled `wp-cli.phar`, executed via PHP to download/install/configure WordPress |
| **Hosts file** | Auto-edited via elevated PowerShell to add `.local` domain entries |
| **Port routing** | `netsh portproxy` used to forward port 80 → site port |
| **Site storage** | Each site stored in `%AppData%/wp-run-now/sites/<name>/app/public/` |
| **DB persistence** | MySQL dumped to `local.sql` on stop, loaded on start (same as LocalWP) |

### First-Run Setup

On first launch, the app downloads all binaries automatically:
- PHP 8.2 NTS x64 (~30 MB)
- MySQL 8.0 Windows ZIP (~200 MB)
- Nginx Windows (~2 MB)
- WP-CLI phar (~6 MB)

Progress is shown with an animated ocean-wave progress bar.

---

## Site Folder Structure

Each site mirrors LocalWP's structure:

```
%AppData%/wp-run-now/sites/<site-name>/
├── app/
│   ├── public/        ← WordPress files (wp-content, wp-admin, etc.)
│   └── sql/
│       └── local.sql  ← Database dump
├── conf/              ← nginx, php, mysql configs
└── logs/              ← nginx, php logs
```

---

## Tech Stack Summary

```
Electron + React + TypeScript + Vite
         ↓
Zustand (state) + Framer Motion (UI)
         ↓
PHP 8.2 (php-cgi) + MySQL 8.0 + Nginx
         ↓
WP-CLI → WordPress installed per site
         ↓
Windows hosts file → .local domains
```

---

## Requirements

- Windows 10 / 11 (64-bit)
- ~500 MB disk space (for bundled stack)
- Internet connection on first launch (to download binaries + WordPress)

---

## License

MIT — free to use, modify, and distribute.
