# tinyland-admin-data (RETIRED)

> **Retired 2026-10-09.** This repository is archived and receives no further
> changes. There is no replacement module.

`@tummycrypt/tinyland-admin-data` held one-off snake_case/camelCase transform
and migration helpers for the legacy admin JSON files. No live app or Bazel
registry module depends on it, so it was retired in the 2026-10 estate uplift
(rulings RU2/RU7) rather than moved to the new stack.

- Bazel registry: `tummycrypt_tinyland_admin_data` 0.2.2 in
  [xoxd-ai/bazel-registry](https://github.com/xoxd-ai/bazel-registry) is marked
  `deprecated`. It stays resolvable; nothing is yanked.
- npm: no further versions will be published (RU8). Published versions are not
  unpublished.
- Code: the last released source is tag `v0.2.2`. Copy the transforms you need
  into your own app instead of depending on this package.
