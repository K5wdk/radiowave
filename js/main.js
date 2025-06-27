//             ____  _  _    __ 
///           / ___)( \/ ) _(  )
//            \___ \ )  ( / \) \
//            (____/(_/\_)\____/
//          Made by Jonah and Samuel
//      https://github.com/k5wdk/RadioWave

const radios = {
    WDR: [
      { name: "1Live", image: "https://www.radio.de/300/1live.png?version=833858d2831baf1f43a9c5349a22b5a82", streamUrl: "https://wdr-1live-live.icecastssl.wdr.de/wdr/1live/live/mp3/128/stream.mp3" },
      { name: "WDR 2", image: "https://www1.wdr.de/radio/wdr2/wdrzwei236~_v-Podcast.jpg", streamUrl: "https://wdr-wdr2-aachenundregion.icecastssl.wdr.de/wdr/wdr2/aachenundregion/mp3/128/stream.mp3" },
      { name: "WDR 3", image: "https://www.radio.de/300/wdr3.png?version=2f8075055d0fa8b46ec39aa71a59cd56", streamUrl: "https://wdr-wdr3-live.icecastssl.wdr.de/wdr/wdr3/live/mp3/128/stream.mp3" },
      { name: "WDR 4", image: "https://www.radio.de/300/wdr4.png?version=f566779205ed639501cefdb005fe480a", streamUrl: "http://icecast.wdr.de/wdr/wdr4/aachenundregion/mp3/128/stream.mp3" },
      { name: "WDR 5", image: "https://www.radio.de/300/wdr5.png?version=e444162b209e5b492ecccd86b6b76db5", streamUrl: "https://wdr-wdr5-live.icecastssl.wdr.de/wdr/wdr5/live/mp3/128/stream.mp3" },
      { name: "WDR Cosmo", image: "https://api.my-radios.com/images/thumb.php?countryCode=DE&name=29046-852154.png&size=200", streamUrl: "https://wdr-cosmo-live.icecastssl.wdr.de/wdr/cosmo/live/mp3/128/stream.mp3" }
    ],
    Rundfunk: [
      { name: "RauteMusik", image: "https://play-lh.googleusercontent.com/plpEeCu8sIJf6WYRiVRY8VSDTXAxTyNGg_G-IrRv93x3ktiXtcEhkT7pV512IVwpOQbU", streamUrl: "https://deutschrap-high.rautemusik.fm/" },
      { name: "ffn (Radio Bollerwagen)", image: "https://media.tenor.com/Po82UwnCgmgAAAAe/ffn-radio-ffn.png", streamUrl: "http://stream.ffn.de/radiobollerwagen/mp3-192/stream.mp3" },
      { name: "Blasmusik Radio", image: "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg", streamUrl: "" },
      { name: "Radio Paloma", image: "https://play-lh.googleusercontent.com/QvGMNv5teMiAnjc6OAZCA4ODd9H5JESRHqGrhsk_Vx3Y2lJWEarPJGw0KsgdoUjfR0dG", streamUrl: "https://geostream.silvacast.com/RPLive/mp3-128/com/" },
      { name: "Radio Energy", image: "https://www.radio.de/300/energyhits.png?version=1ea209d590055bf6de256ac6aa30a339", streamUrl: "https://edge09.streamonkey.net/energy-madeingermany" },
      { name: "BigFM", image: "https://www.radio.de/300/bigfm.png?version=2fa01c49acfb4bca18f35f24a9eb1dc3", streamUrl: "https://stream.bigfm.de/deutschland/mp3-128/" }
    ],
    Placeholder3: [
      { name: "SWR 3", image: "https://radiowerbung.shop/wp-content/uploads/swr3.jpg", streamUrl: "http://liveradio.swr.de/tn8jep3/swr3/" },
      { name: "Radio Bob", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3fx1pk4ksQfbzDmcSnhR-zrw5WrZamUKlg&s", streamUrl: "http://streams.radiobob.de/live-nrw-mitte/mp3-192/" },
      { name: "Antenne AC", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzq0-x_O-NgMakSVpqWFQJg6UiRMhsPcF0zg&s", streamUrl: "https://stream.antenneac.de/444z58q" },
      { name: "100.5", image: "https://www.radio.de/300/alemannia.png?version=2ea6d7e54e561fa1d42df0a19813755f", streamUrl: "https://stream.dashitradio.de/dashitradio/mp3-128/stream.mp3" },
      { name: "RTL Radio", image: "https://play-lh.googleusercontent.com/XeEnMEvTk5HtulVECgkaiXDSbhc4ilCmZxSp-eTUVrZV8jJ9OHsRInMF_wlNk2S5LA", streamUrl: "http://stream.89.0rtl.de/live/mp3-256/" },
      { name: "RPR1", image: "https://play-lh.googleusercontent.com/TPDYyi5K8GRUhpAe5rwHnWSDsfIhm06U2dJIotKFjRCoA6ApAomoURmiwqbX2x5Kwfa_", streamUrl: "https://stream.rpr1.de/webradio/mp3-128/" }
    ],
  International: [
    { name: "QMusic - BE", image: "https://play-lh.googleusercontent.com/CYeSivy9LENsspqOIl01jzTJxml_XcONH99cTj4piUn-Ku7XhW0M_887Im20NMS9s9I", streamUrl: "https://icecast-qmusicnl-cdp.triple-it.nl/Qmusic_nl_live.mp3" },
    { name: "Kiss Kiss - IT", image: "https://myradioonline.it/public/uploads/radio_img/radio-kiss-kiss/play_250_250.webp", streamUrl: "https://kisskiss.fluidstream.eu/KKNapoli.mp3" },
    { name: "Los 40 - ES", image: "https://www.radio.de/300/los40.png?version=db64e7dd28221ca22d05372cdf75730d", streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/LOS40.mp3" },
    { name: "KissFM - UKR", image: "https://www.radio.de/300/kissfmes.jpeg?version=630265c067540f2625fbbe2f7bfb1f38", streamUrl: "https://online.kissfm.ua/KissFM_Ukr" },
    { name: "MNM", image: "https://uk.radio.net/300/mnm.png?version=1ac11139a0f3e6268fa4b0a5ea27696c", streamUrl: "" },
    { name: "House Music Radio", image: "https://www.radio.de/300/housemusicradio.png?version=5a8e2e0b672f369c96ed7ed84eecf632", streamUrl: "http://online.kissfm.ua/KissFM_Digital" }
  ]
  };

let currentPlayingIndex = null;
let currentPlayingGenre = null;

window.addEventListener('load', () => {
  const loader = document.getElementById('loading-screen');
  const mainContent = document.getElementById('main-content');
  loader.style.display = 'none';
  mainContent.style.opacity = '1';

  const radioSectionsContainer = document.getElementById('radio-sections');

  function createRadioCard(radio, genre, index) {
    const card = document.createElement('div');
    card.className = "radio-card";

    card.innerHTML = `
      <img src="${radio.image}" alt="Bild von ${radio.name}" />
      <div class="content">
        <h3>${radio.name}</h3>
        <p>${radio.streamUrl ? 'Online <span class="status-dot online"></span>' : 'Offline <span class="status-dot offline"></span>'}</p>
      </div>
    `;

    card.addEventListener('click', () => {
      if (!radio.streamUrl) {
        alert("Der Sender ist derzeit nicht verfügbar.");
        return;
      }

      if (currentPlayingIndex === index && currentPlayingGenre === genre) {
        audio.pause();
        currentPlayingIndex = null;
        currentPlayingGenre = null;
        updatePlayer(null);
        updateActiveCard(null);
      } else {
        currentPlayingIndex = index;
        currentPlayingGenre = genre;
        audio.src = radio.streamUrl;
        audio.play();
        updatePlayer(radio);
        updateActiveCard(card);
      }
    });

    return card;
  }

  function updateActiveCard(activeCard) {
    document.querySelectorAll('.radio-card').forEach(card => {
      card.classList.remove('active');
    });
    if (activeCard) activeCard.classList.add('active');
  }

  function updatePlayer(radio) {
    const playerImage = document.getElementById('player-image');
    const playerTitle = document.getElementById('player-title');

    if (radio) {
      playerImage.src = radio.image;
      playerTitle.textContent = radio.name;
      playPauseIcon.setAttribute('data-state', 'playing');
      playPauseIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
    } else {
      playerImage.src = '';
      playerTitle.textContent = "Bitte wähle einen Sender aus";
      playPauseIcon.setAttribute('data-state', 'paused');
      playPauseIcon.innerHTML = '<path d="M8 5v14l11-7z" />';
    }
  }

  const audio = document.getElementById('player-audio');
  const playPauseBtn = document.getElementById('play-pause-btn');
  const playPauseIcon = document.getElementById('play-pause-icon');

  playPauseBtn.addEventListener('click', () => {
    if (!audio.src) return;

    if (audio.paused) {
      audio.play();
      playPauseIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
    } else {
      audio.pause();
      playPauseIcon.innerHTML = '<path d="M8 5v14l11-7z" />';
    }
  });

  audio.addEventListener('ended', () => {
    currentPlayingIndex = null;
    currentPlayingGenre = null;
    updatePlayer(null);
    updateActiveCard(null);
  });

  for (const genre in radios) {
    const section = document.createElement('section');
    section.className = 'mb-10';

    const heading = document.createElement('h2');
    heading.textContent = genre;
    heading.className = 'text-2xl font-semibold mb-4 text-green-400';
    section.appendChild(heading);

    const scrollContainer = document.createElement('div');
    scrollContainer.className = 'scroll-container flex gap-6 overflow-x-auto';

    radios[genre].forEach((radio, index) => {
      const card = createRadioCard(radio, genre, index);
      scrollContainer.appendChild(card);
    });

    section.appendChild(scrollContainer);
    radioSectionsContainer.appendChild(section);
  }
});
