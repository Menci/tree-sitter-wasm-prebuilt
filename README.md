# tree-sitter-wasm-prebuilt
Prebuilt WASM binaries for tree-sitter's language parsers.

Install with NPM:

```bash
$ yarn add tree-sitter-wasm-prebuilt
```

Use it in Webpack:

```ts
import treeSitterCpp from "tree-sitter-wasm-prebuilt/lib/tree-sitter-cpp.wasm"
parser.setLanguage(treeSitterCpp);
```

# Supported Languages
* tree-sitter-bash
* tree-sitter-c
* tree-sitter-c
* tree-sitter-cpp
* tree-sitter-css
* tree-sitter-elm
* tree-sitter-embedded
* tree-sitter-go
* tree-sitter-html
* tree-sitter-java
* tree-sitter-javascript
* tree-sitter-lua
* tree-sitter-markdown
* tree-sitter-php
* tree-sitter-python
* tree-sitter-ruby
* tree-sitter-rust
* tree-sitter-systemrdl
* tree-sitter-toml
* tree-sitter-verilog
* tree-sitter-vue
* tree-sitter-yaml

# Missing Languages
### tree-sitter-typescript
Its `src` directory required by the WASM building is not shipped with its NPM module.

### tree-sitter-eno
Its native code compiles error with `clang`. [eno-lang/tree-sitter-eno#1](https://github.com/eno-lang/tree-sitter-eno/issues/1)

### tree-sitter-ocaml
Its Node.js bindings doesn't build on Node 12.

### tree-sitter-verilog
`emcc command failed - shared:ERROR: Memory is not large enough for static data (57424432) plus the stack (5242880), please increase TOTAL_MEMORY (33554432) to at least 62668336`
