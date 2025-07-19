/// <reference types="node" />

/**
 * Executes Curve25519 Donna
 * @param secret Buffer of 32 bytes containing the secret key
 * @param basepoint Buffer of 32 bytes containing the base point
 * @returns Buffer of 32 bytes with the resulting public key
 */
export declare function curve25519_donna(secret: Buffer, basepoint: Buffer): Buffer

/**
 * Signs a message with Curve25519
 * @param privkey Buffer containing the Curve25519 private key
 * @param msg Buffer containing the message to sign
 * @returns Buffer of 64 bytes with the signature
 */
export declare function sign25519(privkey: Buffer, msg: Buffer): Buffer

/**
 * Verifies a Curve25519 signature
 * @param signature Buffer of 64 bytes containing the signature
 * @param pubkey Buffer containing the Curve25519 public key
 * @param msg Buffer containing the signed message
 * @returns true if the signature is valid, false otherwise
 */
export declare function verify25519(signature: Buffer, pubkey: Buffer, msg: Buffer): boolean

declare const _default: {
    curve25519_donna: typeof curve25519_donna;
    sign25519: typeof sign25519;
    verify25519: typeof verify25519;
}

export default _default