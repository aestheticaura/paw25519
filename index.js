import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const __dirname = dirname(fileURLToPath(import.meta.url))

const platform = process.platform
const arch = process.arch
const binName = `${platform}-${arch}-paw25519.node`

const binding = require(join(__dirname, binName))


export default binding
export const curve25519_donna = binding.curve25519_donna
export const sign25519 = binding.sign25519
export const verify25519 = binding.verify25519