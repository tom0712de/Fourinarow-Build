
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Fourinarow-Build"
  },
  {
    "renderMode": 2,
    "route": "/Fourinarow-Build/game"
  },
  {
    "renderMode": 2,
    "route": "/Fourinarow-Build/party"
  },
  {
    "renderMode": 2,
    "route": "/Fourinarow-Build/online"
  },
  {
    "renderMode": 2,
    "route": "/Fourinarow-Build/online-login"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7837, hash: '4a10b59b3fb1689d3e42dfab5a3e9f54423e7e623ea3a7d918158d61244d1331', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1053, hash: '467a7c9ca0a0fd6cd74a3428e670069f1540a5b3730843e7a4d5366f60206d94', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Fourinarow-Build/index.html': {size: 29963, hash: 'e079fa26bc78cff13cbcf2eaf7e0838996fddbf4119c31b078852fe54e8dc891', text: () => import('./assets-chunks/Fourinarow-Build_index_html.mjs').then(m => m.default)},
    'Fourinarow-Build/game/index.html': {size: 26740, hash: '2e6b58780db5309a1c76149d5821e5a21ff1cea9676aaca49355907a7adfd520', text: () => import('./assets-chunks/Fourinarow-Build_game_index_html.mjs').then(m => m.default)},
    'Fourinarow-Build/party/index.html': {size: 30359, hash: '1c32fe5f296cef3493f99630fdf984e6a75bbb422ee4e921c5ad985ab60d8d43', text: () => import('./assets-chunks/Fourinarow-Build_party_index_html.mjs').then(m => m.default)},
    'Fourinarow-Build/online-login/index.html': {size: 13589, hash: '5f594a4440d383d595a7a6864ad4e144716a046a157c8f0eb0cc8a47446d5637', text: () => import('./assets-chunks/Fourinarow-Build_online-login_index_html.mjs').then(m => m.default)},
    'Fourinarow-Build/online/index.html': {size: 24006, hash: 'be314974b5562d51c579bccdc58b8b4a28b1a775e387cbe077754c31d1247172', text: () => import('./assets-chunks/Fourinarow-Build_online_index_html.mjs').then(m => m.default)},
    'styles-NF3EFLZ3.css': {size: 18341, hash: 'nWv6owzn+y8', text: () => import('./assets-chunks/styles-NF3EFLZ3_css.mjs').then(m => m.default)}
  },
};
