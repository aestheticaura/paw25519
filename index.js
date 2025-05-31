import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const __dirname = dirname(fileURLToPath(import.meta.url))

const platform = process.platform
const arch = process.arch
const binName = `${platform}-${arch}-paw25519.node`

export default require(join(__dirname, binName))