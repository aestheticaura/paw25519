{
  "targets": [{
    "target_name": "paw25519",
    "cflags": [
        "-O3",
        "-ffunction-sections",
        "-fdata-sections"
    ],
    "cflags_cc": [
        "-O3",
        "-ffunction-sections",
        "-fdata-sections",
        "-std=c++17"
    ],
    "ldflags": [
        "-Wl,--gc-sections"
    ],
    "sources": [
      "./src/curve25519-donna.c",
      "./src/ed25519/additions/compare.c",
      "./src/ed25519/additions/curve_sigs.c",
      "./src/ed25519/additions/sign_modified.c",
      "./src/ed25519/fe_0.c",
      "./src/ed25519/fe_1.c",
      "./src/ed25519/fe_add.c",
      "./src/ed25519/fe_cmov.c",
      "./src/ed25519/fe_copy.c",
      "./src/ed25519/fe_frombytes.c",
      "./src/ed25519/fe_invert.c",
      "./src/ed25519/fe_isnegative.c",
      "./src/ed25519/fe_isnonzero.c",
      "./src/ed25519/fe_mul.c",
      "./src/ed25519/fe_neg.c",
      "./src/ed25519/fe_pow22523.c",
      "./src/ed25519/fe_sq.c",
      "./src/ed25519/fe_sq2.c",
      "./src/ed25519/fe_sub.c",
      "./src/ed25519/fe_tobytes.c",
      "./src/ed25519/ge_add.c",
      "./src/ed25519/ge_double_scalarmult.c",
      "./src/ed25519/ge_frombytes.c",
      "./src/ed25519/ge_madd.c",
      "./src/ed25519/ge_msub.c",
      "./src/ed25519/ge_p1p1_to_p2.c",
      "./src/ed25519/ge_p1p1_to_p3.c",
      "./src/ed25519/ge_p2_0.c",
      "./src/ed25519/ge_p2_dbl.c",
      "./src/ed25519/ge_p3_0.c",
      "./src/ed25519/ge_p3_dbl.c",
      "./src/ed25519/ge_p3_to_cached.c",
      "./src/ed25519/ge_p3_to_p2.c",
      "./src/ed25519/ge_p3_tobytes.c",
      "./src/ed25519/ge_precomp_0.c",
      "./src/ed25519/ge_scalarmult_base.c",
      "./src/ed25519/ge_sub.c",
      "./src/ed25519/ge_tobytes.c",
      "./src/ed25519/open.c",
      "./src/ed25519/sc_muladd.c",
      "./src/ed25519/sc_reduce.c",
      "./src/ed25519/sign.c",
      "./src/ed25519/sha512/sha2big.c",
      "./src/ed25519/sha512/crypto_hash_sha512.c",
      "./wrapper.cc"
    ],
    "include_dirs": [
      "<!@(node -p \"require('node-addon-api').include\")",
      "src/ed25519/nacl_includes",
      "src/ed25519",
      "src/ed25519/sha512"
    ],
    "defines": [ 
      "NAPI_VERSION=10",
      "NAPI_DISABLE_CPP_EXCEPTIONS",
      "SPH_UPTR",
      "SPH_UNALIGNED",
      "SPH_BIG_ENDIAN=0",
      "SPH_LITTLE_ENDIAN=1",
      "SPH_SPARCV9_GCC_32",
      "SPH_SMALL_FOOTPRINT=0",
      "SPH_64"
    ]
  }]
}
