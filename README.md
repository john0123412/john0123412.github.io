# john0123412.github.io

Personal portfolio built with Vue 3 + Vite, deployed via GitHub Actions to GitHub Pages.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
```

## Deployment

Push to `main` triggers GitHub Actions which builds and deploys automatically.

## Security

- No backend, no forms, no user input accepted
- CSP headers injected at build time (production only) to restrict all external resource loading
- X-Frame-Options DENY prevents clickjacking
- No third-party scripts or tracking

## Local Preview Guide

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or above (includes npm)

### Steps

1. Open a terminal and navigate to the project directory:

   ```bash
   cd /path/to/john0123412.github.io
   ```

2. Install dependencies (only needed once, or after `package.json` changes):

   ```bash
   npm install
   ```

3. Start the local development server:

   ```bash
   npm run dev
   ```

4. The terminal will display a local URL, typically:

   ```
   Local:   http://localhost:5173/
   ```

   Open that URL in your browser to preview the site.

5. The dev server supports **hot reload** — any file changes will instantly reflect in the browser without manual refresh.

6. To stop the server, press `Ctrl + C` in the terminal.

### Preview Production Build

To test the final optimized output (same as what gets deployed):

```bash
npm run build
npm run preview
```

This serves the `dist/` folder locally, typically at `http://localhost:4173/`.

### Access from Other Devices on the Same Network

Start the dev server with host binding:

```bash
npx vite --host
```

The terminal will show a `Network:` URL. Open that on any device connected to the same LAN.

#### WSL (Windows Subsystem for Linux) Users

If you are running this project inside WSL, devices on your local network cannot directly reach WSL's virtual IP. You need to set up port forwarding on the Windows host.

**Step 1 — Find your WSL IP**

The `Network:` line in Vite's output shows it (e.g. `10.0.0.106`).

**Step 2 — Set up port forwarding (run in Windows PowerShell as Administrator)**

```powershell
netsh interface portproxy add v4tov4 listenport=5173 listenaddress=0.0.0.0 connectport=5173 connectaddress=<WSL_IP>
```

Replace `<WSL_IP>` with the IP from Step 1, and `5173` with the actual port Vite is using.

**Step 3 — Allow the port through Windows Firewall**

```powershell
netsh advfirewall firewall add rule name="Vite Dev Server" dir=in action=allow protocol=TCP localport=5173
```

**Step 4 — Find your Windows LAN IP**

```powershell
ipconfig
```

Look for the IPv4 address under your Wi-Fi or Ethernet adapter (e.g. `192.168.1.100`).

**Step 5 — Access from phone/tablet**

Open `http://192.168.1.100:5173/` in the browser on any device connected to the same Wi-Fi.

**Cleanup — Remove forwarding and firewall rule when done**

```powershell
netsh interface portproxy delete v4tov4 listenport=5173 listenaddress=0.0.0.0
netsh advfirewall firewall delete rule name="Vite Dev Server"
```
