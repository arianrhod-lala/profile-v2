# Sharp binaries for Netlify

Netlify builds use these unmodified upstream Linux x64 archives to avoid
GitHub release downloads failing with HTTP 504 during dependency installation.
Only Netlify sets the local archive paths, so other platforms keep Sharp's
normal installation behavior. The archives are outside Gatsby's static folder
and are not published as website assets.

Sources:

- https://github.com/lovell/sharp/releases/download/v0.32.6/sharp-v0.32.6-napi-v7-linux-x64.tar.gz
- https://github.com/lovell/sharp-libvips/releases/download/v8.14.5/libvips-8.14.5-linux-x64.tar.br

SHA-256:

```text
994679b5089fee0608f94f1b5f6f75a0dcc79a64f3a929d147503e8d0e91dd2f  sharp-v0.32.6-napi-v7-linux-x64.tar.gz
11959c03864960f812d861bf7291020540a49fafd2c746b7a3228d9f2bd2200d  v8.14.5/libvips-8.14.5-linux-x64.tar.br
```

The libvips archive is also verified against the SHA-512 integrity embedded in
Sharp 0.32.6's package metadata. Upstream license notices remain in the archives.
Sharp is Apache-2.0; libvips and its bundled dependencies have their own licenses.

When upgrading Sharp, update these archives, checksums, and Netlify configuration
together. Remove this workaround when Gatsby supports Sharp's newer npm-hosted
binary distribution.
