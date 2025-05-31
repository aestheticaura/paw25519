import fs from 'fs'
import path from 'path'
import os from 'os'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const srcPath = path.join(__dirname, 'src')

async function downloadBinary() {
    if (fs.existsSync(srcPath)) {
        console.info(`[paw25519] Source code found at ${srcPath}. Skipping download of prebuilt binary.`)
        return
    }

    const platform = os.platform()
    const arch = os.arch()
    const binName = `${platform}-${arch}-paw25519.node`
    const binUrl = `https://github.com/LightningNeko/paw25519/raw/refs/heads/master/prebuilds/${binName}`
    const binPath = path.join(__dirname, binName)

    const req = await fetch(binUrl)
    if (!req.ok) {
        throw new Error(`Failed to download prebuilt binary for ${platform}-${arch}: ${req.statusText} (${req.status})`, req)
    }

    const buffer = await req.arrayBuffer()
    fs.writeFileSync(binPath, Buffer.from(buffer))

    console.info(`[paw25519] Prebuilt binary downloaded successfully: ${binPath}`)
}
await downloadBinary()