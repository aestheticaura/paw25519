import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { existsSync } from 'fs'
import { pathToFileURL } from 'url'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

function getPlatformArch() {
    const platform = process.platform // 'win32', 'darwin', 'linux', etc
    const arch = process.arch // 'x64', 'arm64', etc
    return { platform, arch }
}

function loadBinary() {
    const { platform, arch } = getPlatformArch()

    const binaryPath = join(__dirname, 'prebuilds', `${platform}-${arch}`, 'paw25519.node')

    if (!existsSync(binaryPath)) {
        throw new Error(`Prebuilt binary not found for platform ${platform} arch ${arch} at ${binaryPath}`)
    }

    const binaryUrl = pathToFileURL(binaryPath).href
    try {
        return require(binaryUrl)
    } catch (error) {
        throw new Error(`Failed to load the binary at ${binaryUrl}: ${error.message}`)
    }
}

export default loadBinary()