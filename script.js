'use strict';

/* ---------- Ürün verisi ---------- */
const PRODUCTS = [
  { id: 1,  name: 'Işıltı Veren C Vitamini Serumu', cat: 'cilt',   catLabel: 'Cilt Bakımı', desc: '30 ml • Ton eşitleyici', price: 549, old: 689, rating: 4.8, reviews: 412, tag: 'Çok Satan', shape: 'dropper', color: '#f0a96b', cap: '#2b2220' },
  { id: 2,  name: 'Hyaluronik Nem Kremi',           cat: 'cilt',   catLabel: 'Cilt Bakımı', desc: '50 ml • Yoğun nem',      price: 429, rating: 4.7, reviews: 289, shape: 'jar',     color: '#f6e7dd', cap: '#b8935a' },
  { id: 3,  name: 'Nazik Köpük Temizleyici',        cat: 'cilt',   catLabel: 'Cilt Bakımı', desc: '150 ml • Hassas cilt',  price: 259, rating: 4.6, reviews: 198, shape: 'tube',    color: '#cfe4dc', cap: '#2b2220' },
  { id: 4,  name: 'Niasinamid %10 Gözenek Serumu',  cat: 'cilt',   catLabel: 'Cilt Bakımı', desc: '30 ml • Gözenek bakımı', price: 479, old: 560, rating: 4.9, reviews: 521, tag: 'Yeni', shape: 'dropper', color: '#dfe4f5', cap: '#7b83b8' },
  { id: 5,  name: 'Saten Mat Ruj – Gül Kurusu',     cat: 'makyaj', catLabel: 'Makyaj',      desc: 'Uzun süre kalıcı',      price: 289, rating: 4.7, reviews: 640, tag: 'Çok Satan', shape: 'lipstick', color: '#b45a68', cap: '#b8935a' },
  { id: 6,  name: 'Işıltılı Hafif Fondöten',        cat: 'makyaj', catLabel: 'Makyaj',      desc: '30 ml • SPF 20',        price: 399, rating: 4.5, reviews: 233, shape: 'bottle',  color: '#e8c3a2', cap: '#2b2220' },
  { id: 7,  name: 'Tatlı Pembe Allık Paleti',       cat: 'makyaj', catLabel: 'Makyaj',      desc: '3 tonluk palet',        price: 319, old: 380, rating: 4.6, reviews: 156, shape: 'compact', color: '#e9a1ae', cap: '#d9bba0' },
  { id: 8,  name: 'Hacim Veren Maskara',            cat: 'makyaj', catLabel: 'Makyaj',      desc: 'Suya dayanıklı',        price: 229, rating: 4.4, reviews: 301, shape: 'tube',    color: '#3a2e2c', cap: '#b8935a' },
  { id: 9,  name: 'Argan Yağlı Onarıcı Şampuan',    cat: 'sac',    catLabel: 'Saç Bakımı',  desc: '300 ml • Sülfatsız',    price: 249, rating: 4.7, reviews: 372, shape: 'bottle',  color: '#e7d3a7', cap: '#2b2220' },
  { id: 10, name: 'Yoğun Besleyici Saç Maskesi',    cat: 'sac',    catLabel: 'Saç Bakımı',  desc: '200 ml • Kuru saçlar',  price: 339, rating: 4.8, reviews: 267, tag: 'Yeni', shape: 'jar', color: '#d7e6cf', cap: '#6f8f5e' },
  { id: 11, name: 'Parlaklık Veren Saç Yağı',       cat: 'sac',    catLabel: 'Saç Bakımı',  desc: '50 ml • Isıya karşı',   price: 299, rating: 4.6, reviews: 144, shape: 'dropper', color: '#e9bd78', cap: '#2b2220' },
  { id: 12, name: 'Gül & Vanilya Vücut Losyonu',    cat: 'vucut',  catLabel: 'Vücut',       desc: '250 ml • 24 saat nem',  price: 279, rating: 4.7, reviews: 318, shape: 'bottle',  color: '#f3cfd3', cap: '#a8606f' },
  { id: 13, name: 'Kuru Vücut Yağı',                cat: 'vucut',  catLabel: 'Vücut',       desc: '100 ml • Hafif doku',   price: 349, rating: 4.5, reviews: 121, shape: 'dropper', color: '#f0d9a6', cap: '#b8935a' },
  { id: 14, name: 'Raiana Eau de Parfum',          cat: 'vucut',  catLabel: 'Parfüm',      desc: '50 ml • Çiçeksi-odunsu', price: 899, old: 1050, rating: 4.9, reviews: 482, tag: 'Sınırlı', shape: 'perfume', color: '#f1c8cf', cap: '#b8935a' },
  { id: 15, name: 'El & Tırnak Bakım Kremi',        cat: 'vucut',  catLabel: 'Vücut',       desc: '75 ml • Besleyici',     price: 149, rating: 4.4, reviews: 205, shape: 'tube',    color: '#e4d9f1', cap: '#7b6aa8' },
  { id: 16, name: 'Güneş Koruyucu Fluid SPF 50',    cat: 'cilt',   catLabel: 'Cilt Bakımı', desc: '50 ml • Görünmez doku', price: 369, rating: 4.8, reviews: 590, tag: 'Çok Satan', shape: 'tube', color: '#fbe7a8', cap: '#e29b3e' }
];

/* ---------- SVG şişe/ürün çizimleri ---------- */
function productSVG(shape, color = '#eee', cap = '#222') {
  const shade = 'rgba(0,0,0,.08)';
  const shine = 'rgba(255,255,255,.55)';
  const shapes = {
    dropper: `<svg viewBox="0 0 120 200" xmlns="http://www.w3.org/2000/svg">
      <rect x="48" y="6" width="24" height="30" rx="12" fill="${cap}"/>
      <rect x="42" y="34" width="36" height="22" rx="4" fill="${cap}"/>
      <rect x="22" y="56" width="76" height="132" rx="20" fill="${color}"/>
      <rect x="22" y="56" width="76" height="132" rx="20" fill="${shade}" opacity=".4"/>
      <rect x="30" y="66" width="10" height="110" rx="5" fill="${shine}"/>
      <rect x="40" y="105" width="40" height="46" rx="6" fill="rgba(255,255,255,.7)"/>
      <rect x="46" y="114" width="28" height="3" fill="${cap}"/><rect x="46" y="124" width="20" height="2" fill="${cap}" opacity=".5"/><rect x="46" y="132" width="24" height="2" fill="${cap}" opacity=".5"/>
    </svg>`,
    jar: `<svg viewBox="0 0 140 150" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="22" width="104" height="36" rx="10" fill="${cap}"/>
      <rect x="14" y="56" width="112" height="86" rx="18" fill="${color}"/>
      <rect x="14" y="56" width="112" height="86" rx="18" fill="${shade}" opacity=".35"/>
      <rect x="22" y="64" width="9" height="68" rx="4.5" fill="${shine}"/>
      <rect x="44" y="82" width="52" height="38" rx="6" fill="rgba(255,255,255,.7)"/>
      <rect x="52" y="92" width="36" height="3" fill="${cap}"/><rect x="52" y="102" width="26" height="2" fill="${cap}" opacity=".5"/>
    </svg>`,
    tube: `<svg viewBox="0 0 90 210" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 14h54l6 40-6 150H18L12 54z" fill="${color}"/>
      <path d="M18 14h54l6 40-6 150H18L12 54z" fill="${shade}" opacity=".3"/>
      <rect x="20" y="4" width="50" height="22" rx="6" fill="${cap}"/>
      <rect x="22" y="58" width="8" height="130" rx="4" fill="${shine}"/>
      <rect x="30" y="100" width="34" height="46" rx="4" fill="rgba(255,255,255,.7)"/>
      <rect x="35" y="110" width="24" height="3" fill="${cap}"/><rect x="35" y="119" width="18" height="2" fill="${cap}" opacity=".5"/>
    </svg>`,
    bottle: `<svg viewBox="0 0 110 210" xmlns="http://www.w3.org/2000/svg">
      <rect x="38" y="4" width="34" height="34" rx="7" fill="${cap}"/>
      <rect x="44" y="36" width="22" height="14" fill="${cap}" opacity=".85"/>
      <rect x="14" y="50" width="82" height="152" rx="22" fill="${color}"/>
      <rect x="14" y="50" width="82" height="152" rx="22" fill="${shade}" opacity=".35"/>
      <rect x="22" y="62" width="10" height="126" rx="5" fill="${shine}"/>
      <rect x="34" y="104" width="46" height="54" rx="6" fill="rgba(255,255,255,.72)"/>
      <rect x="40" y="114" width="34" height="3" fill="${cap}"/><rect x="40" y="124" width="24" height="2" fill="${cap}" opacity=".5"/><rect x="40" y="132" width="28" height="2" fill="${cap}" opacity=".5"/>
    </svg>`,
    lipstick: `<svg viewBox="0 0 70 210" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 6l26 0 4 40H18z" fill="${color}"/>
      <path d="M22 6l14 0 0 40H18z" fill="${shine}" opacity=".35"/>
      <rect x="14" y="44" width="42" height="26" rx="3" fill="${cap}"/>
      <rect x="10" y="70" width="50" height="132" rx="8" fill="#26201f"/>
      <rect x="16" y="78" width="6" height="110" rx="3" fill="rgba(255,255,255,.2)"/>
      <rect x="10" y="108" width="50" height="3" fill="${cap}"/>
    </svg>`,
    compact: `<svg viewBox="0 0 160 150" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="20" width="140" height="120" rx="22" fill="${cap}"/>
      <rect x="20" y="30" width="120" height="100" rx="16" fill="#fff"/>
      <circle cx="52" cy="80" r="26" fill="${color}"/><circle cx="108" cy="80" r="26" fill="#d98391"/>
      <circle cx="46" cy="72" r="8" fill="${shine}" opacity=".6"/>
    </svg>`,
    perfume: `<svg viewBox="0 0 130 200" xmlns="http://www.w3.org/2000/svg">
      <rect x="46" y="4" width="38" height="40" rx="6" fill="${cap}"/>
      <rect x="54" y="42" width="22" height="14" fill="${cap}" opacity=".85"/>
      <rect x="14" y="56" width="102" height="138" rx="14" fill="${color}"/>
      <rect x="14" y="56" width="102" height="138" rx="14" fill="${shade}" opacity=".3"/>
      <rect x="22" y="64" width="10" height="122" rx="5" fill="${shine}"/>
      <rect x="38" y="108" width="54" height="50" rx="4" fill="rgba(255,255,255,.78)"/>
      <rect x="46" y="118" width="38" height="3" fill="${cap}"/><rect x="50" y="128" width="30" height="2" fill="${cap}" opacity=".6"/><rect x="54" y="136" width="22" height="2" fill="${cap}" opacity=".6"/>
    </svg>`
  };
  return shapes[shape] || shapes.bottle;
}

/* ---------- Yardımcılar ---------- */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const LOCALES = { tr: 'tr-TR', en: 'en-US', ru: 'ru-RU' };
const FREE_SHIPPING = 750;
const TAG_KEY = { 'Çok Satan': 'tag_best', 'Yeni': 'tag_new', 'Sınırlı': 'tag_limited' };
const CAT_KEY = { 'Cilt Bakımı': 'cat_skin', 'Makyaj': 'cat_makeup', 'Saç Bakımı': 'cat_hair', 'Vücut': 'cat_body', 'Parfüm': 'cat_perfume' };

/* ---------- Durum ---------- */
const savedLang = localStorage.getItem('raiana_lang');
const state = {
  lang: I18N[savedLang] ? savedLang : 'tr',
  filter: 'all',
  query: '',
  sort: 'featured',
  cart: JSON.parse(localStorage.getItem('raiana_cart') || '[]')
};

/* ---------- Çeviri yardımcıları ---------- */
const t = key => (I18N[state.lang] && I18N[state.lang][key]) ?? I18N.tr[key] ?? key;
const fmt = n => new Intl.NumberFormat(LOCALES[state.lang]).format(n) + ' ₺';
const pText = p => {
  const tr = PRODUCT_TEXT[p.id] && PRODUCT_TEXT[p.id][state.lang];
  return { name: tr ? tr[0] : p.name, desc: tr ? tr[1] : p.desc };
};

function applyLang() {
  const lang = state.lang;
  document.documentElement.lang = lang;
  document.title = t('title');
  $('meta[name="description"]').setAttribute('content', t('meta_desc'));
  $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  $$('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  $$('[data-i18n-placeholder]').forEach(el => el.setAttribute('placeholder', t(el.dataset.i18nPlaceholder)));
  $$('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
  $$('#lang button').forEach(b => b.classList.toggle('is-active', b.dataset.lang === lang));
  $('#newsletterMsg').textContent = '';
  renderProducts();
  renderCart();
}

function setLang(lang) {
  if (!I18N[lang]) return;
  state.lang = lang;
  localStorage.setItem('raiana_lang', lang);
  applyLang();
}

/* ---------- Ürün listesi ---------- */
function renderProducts() {
  const q = state.query.toLocaleLowerCase(LOCALES[state.lang]);
  let list = PRODUCTS.filter(p =>
    (state.filter === 'all' || p.cat === state.filter) &&
    (q === '' || [p.name, pText(p).name].some(n => n.toLocaleLowerCase(LOCALES[state.lang]).includes(q)))
  );
  if (state.sort === 'price-asc')  list.sort((a, b) => a.price - b.price);
  if (state.sort === 'price-desc') list.sort((a, b) => b.price - a.price);
  if (state.sort === 'rating')     list.sort((a, b) => b.rating - a.rating);

  $('#productGrid').innerHTML = list.map(p => {
    const x = pText(p);
    return `
    <article class="card">
      <div class="card__img">
        ${p.tag ? `<span class="tag">${t(TAG_KEY[p.tag])}</span>` : ''}
        ${productSVG(p.shape, p.color, p.cap)}
      </div>
      <div class="card__body">
        <span class="card__cat">${t(CAT_KEY[p.catLabel])}</span>
        <h3 class="card__name">${x.name}</h3>
        <p class="card__desc">${x.desc}</p>
        <div class="rating">${'★'.repeat(Math.round(p.rating))}${'☆'.repeat(5 - Math.round(p.rating))}<span>${p.rating} (${p.reviews})</span></div>
        <div class="card__foot">
          <div class="price">${fmt(p.price)}${p.old ? `<del>${fmt(p.old)}</del>` : ''}</div>
          <button class="add" data-add="${p.id}">${t('add')}</button>
        </div>
      </div>
    </article>`;
  }).join('');
  $('#empty').hidden = list.length > 0;
}

/* ---------- Sepet ---------- */
function saveCart() { localStorage.setItem('raiana_cart', JSON.stringify(state.cart)); }

function addToCart(id) {
  const item = state.cart.find(i => i.id === id);
  item ? item.qty++ : state.cart.push({ id, qty: 1 });
  saveCart(); renderCart();
  toast(t('toast_added'));
}

function changeQty(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) state.cart = state.cart.filter(i => i.id !== id);
  saveCart(); renderCart();
}

function removeItem(id) {
  state.cart = state.cart.filter(i => i.id !== id);
  saveCart(); renderCart();
}

function renderCart() {
  const count = state.cart.reduce((s, i) => s + i.qty, 0);
  const subtotal = state.cart.reduce((s, i) => s + PRODUCTS.find(p => p.id === i.id).price * i.qty, 0);
  $('#cartCount').textContent = count;
  $('#subtotal').textContent = fmt(subtotal);

  if (!state.cart.length) {
    $('#cartItems').innerHTML = `<p class="cart-empty">${t('cart_empty')}</p>`;
  } else {
    $('#cartItems').innerHTML = state.cart.map(i => {
      const p = PRODUCTS.find(x => x.id === i.id);
      return `
      <div class="line">
        <div class="line__img">${productSVG(p.shape, p.color, p.cap)}</div>
        <div>
          <div class="line__name">${pText(p).name}</div>
          <div class="line__price">${fmt(p.price)}</div>
          <div class="qty">
            <button data-dec="${p.id}" aria-label="${t('dec')}">−</button>
            <span>${i.qty}</span>
            <button data-inc="${p.id}" aria-label="${t('inc')}">+</button>
          </div>
        </div>
        <button class="remove" data-remove="${p.id}" aria-label="${t('remove')}">✕</button>
      </div>`;
    }).join('');
  }

  const remaining = FREE_SHIPPING - subtotal;
  const pct = Math.min(100, (subtotal / FREE_SHIPPING) * 100);
  $('#shippingNote').innerHTML = (remaining > 0
    ? t('ship_more').replace('{amt}', fmt(remaining))
    : t('ship_free')) + `<div class="bar"><i style="width:${pct}%"></i></div>`;
}

function openCart(open = true) {
  $('#drawer').classList.toggle('is-open', open);
  $('#overlay').classList.toggle('is-open', open);
  $('#drawer').setAttribute('aria-hidden', String(!open));
  document.body.style.overflow = open ? 'hidden' : '';
}

/* ---------- Bildirim ---------- */
let toastTimer;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 1800);
}

/* ---------- Olaylar ---------- */
function setFilter(f) {
  state.filter = f;
  $$('#filters .chip').forEach(c => c.classList.toggle('is-active', c.dataset.filter === f));
  renderProducts();
}

document.addEventListener('click', e => {
  const t = e.target;
  if (t.closest('[data-lang]'))   return setLang(t.closest('[data-lang]').dataset.lang);
  if (t.closest('[data-add]'))    return addToCart(+t.closest('[data-add]').dataset.add);
  if (t.closest('[data-inc]'))    return changeQty(+t.closest('[data-inc]').dataset.inc, 1);
  if (t.closest('[data-dec]'))    return changeQty(+t.closest('[data-dec]').dataset.dec, -1);
  if (t.closest('[data-remove]')) return removeItem(+t.closest('[data-remove]').dataset.remove);
  if (t.closest('#filters .chip')) return setFilter(t.closest('.chip').dataset.filter);
  if (t.closest('.collection'))   setFilter(t.closest('.collection').dataset.filter);
  if (t.closest('.nav a'))        $('#nav').classList.remove('is-open');
});

$('#cartOpen').addEventListener('click', () => openCart(true));
$('#cartClose').addEventListener('click', () => openCart(false));
$('#overlay').addEventListener('click', () => openCart(false));
document.addEventListener('keydown', e => { if (e.key === 'Escape') openCart(false); });
$('#menuToggle').addEventListener('click', () => $('#nav').classList.toggle('is-open'));
$('#search').addEventListener('input', e => { state.query = e.target.value; renderProducts(); });
$('#sort').addEventListener('change', e => { state.sort = e.target.value; renderProducts(); });

$('#checkout').addEventListener('click', () => {
  if (!state.cart.length) return toast(t('toast_empty'));
  toast(t('toast_demo'));
});

$('#newsletterForm').addEventListener('submit', e => {
  e.preventDefault();
  const email = $('#newsletterEmail').value.trim();
  const msg = $('#newsletterMsg');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    msg.textContent = t('nl_invalid');
    return;
  }
  msg.textContent = t('nl_ok');
  e.target.reset();
});

/* ---------- Başlat ---------- */
$('#year').textContent = new Date().getFullYear();
applyLang();
