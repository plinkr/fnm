'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "fbae8d9c9049ca6f31fff4d62a17fef4",
"index.html": "c721523cf9041c6b621b55117047c8dd",
"/": "c721523cf9041c6b621b55117047c8dd",
"main.dart.js": "2341f91611f9fd4a3f3363a2c25c18ed",
"version.json": "2d064c241e0dc99cf2e3ebc291596308",
"assets/assets/info.svg.vec": "7f1b584dacc9be2f5e96b8d50a1a3733",
"assets/assets/arrow-down-a-z-solid.svg.vec": "ecd4c94445fb00706aaac8cc67e557d9",
"assets/assets/blister_pills_oval_x14.svg.vec": "3af88637788068fca7de9e5648743885",
"assets/assets/blister_pills_round_x14.svg.vec": "ac0e54202dc8286ba6fdf5c177397a37",
"assets/assets/child_program.svg.vec": "8f4c100acd2984964b39ac8e23c437d6",
"assets/assets/fetus.svg.vec": "e6eb1691d129ff3b25255ae1498c032b",
"assets/assets/kidneys.svg.vec": "38a4cb13d010a75ce0cd3d49ebf4be50",
"assets/assets/lactation.svg.vec": "08b0613446ad3aeeb0583c9303a12c95",
"assets/assets/liver.svg.vec": "e5f495018f89f9f2f6c554cc66dcca3a",
"assets/assets/medicines.svg.vec": "57ec24794c0e6e9ff19052ea8b21c3fa",
"assets/assets/noun-air-6314787.svg.vec": "8b477aa14b14f6a26c00248b7a35f547",
"assets/assets/noun-ampoule-5507231.svg.vec": "3bb8c4aaa6704412ab36a44ec3496073",
"assets/assets/noun-ampoule-576049.svg.vec": "9b1ac88bfc4c76ef6f7900466a6f3b1e",
"assets/assets/noun-anesthetic-cartridges-5694748.svg.vec": "df661214a53a709a5624d4f98ad503eb",
"assets/assets/noun-chewable-tablet-6179236.svg.vec": "0a3e7778f6543323a94e1db2e68a0782",
"assets/assets/noun-drops-6111347.svg.vec": "92814bf0db79f9b60c51466f297b5b2f",
"assets/assets/noun-elixir-4931044.svg.vec": "b1f0b5466c5ac8ee2db7f9eca42c6eae",
"assets/assets/noun-empty-vial-1514423.svg.vec": "8492dc08d023f800b87ea0ec8e53ed23",
"assets/assets/noun-eye-drops-5449985.svg.vec": "f52002849afc8daca162fdacea8c164d",
"assets/assets/noun-liquid-5143724.svg.vec": "b2a540ad90baa9318e172e3597957ab7",
"assets/assets/noun-liquid-medicine-5575677.svg.vec": "81b2b2b2b4ab03ec5d32dca12b518fdb",
"assets/assets/noun-lotion-5956008.svg.vec": "f3c74a6bb20cf56df000e589caa582f6",
"assets/assets/noun-ointment-6278252.svg.vec": "cdfbed187def4f8d99633244ccf3c111",
"assets/assets/noun-ointment-7077420.svg.vec": "f78f229734e77e08c58cdd66c4cabd40",
"assets/assets/noun-ointment-7190825.svg.vec": "9121a472c118fce88f0de1e990c0c516",
"assets/assets/noun-oral-suspension-6179229.svg.vec": "7c187fe4c47eccc650785b854cc179af",
"assets/assets/noun-powder-3965085.svg.vec": "38eb2c6a99fd8f0c47119d8ea6dff3c3",
"assets/assets/noun-shampoo-7245733.svg.vec": "a56198fbf11e30163aef4af6bc11200f",
"assets/assets/noun-sort-asc.svg.vec": "d9de082b0aef3065eb0d80c3878a89dd",
"assets/assets/noun-sort-desc.svg.vec": "94e7ddc977b8818281e1857d1c1ee3aa",
"assets/assets/noun-spray-5481885.svg.vec": "2e16c22d906a21aff94724ddb6e18bb7",
"assets/assets/noun-suppository-3100011.svg.vec": "94ef37e457e15b041f23b1083c2130b7",
"assets/assets/noun-suppository-6363058.svg.vec": "340d747e8f86ece607ad7e2db4848733",
"assets/assets/noun-syrup-6891159.svg.vec": "3c04b397e03f6ddc702aff0eaa725c6e",
"assets/assets/noun-vial-1514423.svg.vec": "4b845c0726a93b0e374877466b7b1b9f",
"assets/assets/old_man.svg.vec": "20d3d374c3047b5e674e47ed1e6b23a7",
"assets/assets/register_book.svg.vec": "5f41af1fa72831528b81e609e99ce5d9",
"assets/assets/fnm.db.xz": "2981a76e887e6e9008265829bab0ed51",
"assets/fonts/MaterialIcons-Regular.otf": "871aaf3c857777bc7aa64236ba49dcbe",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "dbd264322bfa9d6c268311a113a4a801",
"assets/AssetManifest.bin": "95de3dceaa16ccffd583abca63ed13d3",
"assets/AssetManifest.bin.json": "dcdc94e13c20addd9c68191df71c4612",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/NOTICES": "a79ca12d9b74b4dd4e2f9ac543b27f00",
"icons/Icon-192.png": "d0ae218ab83ec298c6d8d07160784a23",
"icons/Icon-512.png": "0aaf6a80361865e827e1d86b9f2f5429",
"manifest.json": "325c7d162c7166b4861a7e7a4d43675a",
"favicon.png": "cdb6ffd42e4f1f3188b82e170992c29f",
"sqflite_sw.js": "b33d5d23a10fb2afb682e01d36f59ead",
"sqlite3.wasm": "fa7637a49a0e434f2a98f9981856d118"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
