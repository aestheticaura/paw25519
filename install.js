import fs from 'fs'
import path from 'path'
import os from 'os'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function downloadBinary() {
    const platform = os.platform()
    const arch = os.arch()
    const binName = `paw25519-${platform}-${arch}.node`
    const binUrl = `https://raw.githubusercontent.com/LightningNeko/paw25519/refs/heads/master/prebuilds/${platform}-${arch}/${binName}`
    const binPath = path.join(__dirname, binName)

    const req = await fetch(binUrl)
    if (!req.ok) {
        throw new Error(`Failed to download prebuilt binary: ${req.statusText} (${req.status})`, req)
    }

    const buffer = await req.arrayBuffer()
    fs.writeFileSync(binPath, Buffer.from(buffer))

    console.info(`[paw25519] Prebuilt binary downloaded successfully: ${binPath}`)
    return binPath
}
await downloadBinary()