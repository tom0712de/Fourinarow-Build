
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/fourinarow-build"
  },
  {
    "renderMode": 2,
    "route": "/fourinarow-build/game"
  },
  {
    "renderMode": 2,
    "route": "/fourinarow-build/party"
  },
  {
    "renderMode": 2,
    "route": "/fourinarow-build/online"
  },
  {
    "renderMode": 2,
    "route": "/fourinarow-build/online-login"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7810, hash: '6dd897a20ab5dae4885c1a05088cf12108cd35eee1456fc291ae1b87839eb0de', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1026, hash: 'fd4f633e5b37e487b1f5d90b4389acc48fe94c2fbd61efa1997a7ec5a5d24199', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'fourinarow-build/game/index.html': {size: 26713, hash: 'e9c74069fc2736e5ecf225fbc5477bc9d00b34fa4e1ac3390a20ce4439645f2b', text: () => import('./assets-chunks/fourinarow-build_game_index_html.mjs').then(m => m.default)},
    'fourinarow-build/index.html': {size: 29972, hash: '748da47027a7d932bbbbbf0b162c3a9839c2bf188710f6b6876126e3eccb9346', text: () => import('./assets-chunks/fourinarow-build_index_html.mjs').then(m => m.default)},
    'fourinarow-build/party/index.html': {size: 30332, hash: '8c618a211c36cd8821bc09851bba6bd917571652e6ff9fb1bf9bcd9fc85547be', text: () => import('./assets-chunks/fourinarow-build_party_index_html.mjs').then(m => m.default)},
    'fourinarow-build/online/index.html': {size: 23979, hash: 'd46205eca695b63464bd20a2561d61eb8de605f2d2ed301f4e4e8a6949eebfe2', text: () => import('./assets-chunks/fourinarow-build_online_index_html.mjs').then(m => m.default)},
    'fourinarow-build/online-login/index.html': {size: 13562, hash: 'dfc6ffa304974f2035ef054ac5dbfc2af7f9ea03ccaacddf492d0c08d09e6d12', text: () => import('./assets-chunks/fourinarow-build_online-login_index_html.mjs').then(m => m.default)},
    'styles-NF3EFLZ3.css': {size: 18341, hash: 'nWv6owzn+y8', text: () => import('./assets-chunks/styles-NF3EFLZ3_css.mjs').then(m => m.default)}
  },
};
