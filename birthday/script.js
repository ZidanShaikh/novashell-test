function login() {
  document.getElementById('loginScreen').classList.add('hidden-screen');
  document.getElementById('desktop').classList.remove('hidden-screen');
}

// Handle app opening
function openWindow(id) {
  if (id === 'alien') {
    document.getElementById('desktop').classList.add('hidden-screen');
    const alienPage = document.getElementById('alienPage');
    alienPage.style.display = 'flex';
    alienPage.style.opacity = '1';
    alienPage.style.pointerEvents = 'auto';
    return;
  }

  if (id === 'love') {
    document.getElementById('desktop').classList.add('hidden-screen');
    const lovePage = document.getElementById('lovePage');
    lovePage.style.display = 'flex';
    lovePage.style.opacity = '1';
    lovePage.style.pointerEvents = 'auto';
    return;
  }

  // if (id === 'emotion') {
  //   document.getElementById('desktop').classList.add('hidden-screen');
  //   const emotionPage = document.getElementById('emotionPage');
  //   emotionPage.style.display = 'flex';
  //   emotionPage.style.opacity = '1';
  //   emotionPage.style.pointerEvents = 'auto';
  //   return;
  // }

  if (document.getElementById(id + '-window')) return;

  const windowDiv = document.createElement('div');
  windowDiv.id = id + '-window';
  windowDiv.className = 'absolute top-20 left-32 bg-gray-800 text-white p-4 rounded shadow-xl w-64 z-20 cursor-move';

  const title =
    id === 'love' ? '💌 Love Letters' :
    id === 'emotion' ? '🤖 Emotion Emulator' :
    '📁 App Window';

  const content = `<div class="text-sm">This is the ${id} window. More content coming soon!</div>`;

  windowDiv.innerHTML = `
    <div class="flex justify-between items-center mb-2 font-bold text-lg">
      <span>${title}</span>
      <button onclick="closeWindow('${id}')" class="text-red-400 hover:text-red-600">✖</button>
    </div>
    ${content}
  `;

  document.getElementById('windows').appendChild(windowDiv);
  makeDraggable(windowDiv);
}

// Go back to desktop from Alien Mail
function backToDesktop() {
  const alienPage = document.getElementById('alienPage');
  alienPage.style.display = 'none';
  alienPage.style.opacity = '0';
  alienPage.style.pointerEvents = 'none';

  document.getElementById('desktop').classList.remove('hidden-screen');
}

// Go back to desktop from Love Letters
function backToDesktopFromLove() {
  const lovePage = document.getElementById('lovePage');
  lovePage.style.display = 'none';
  lovePage.style.opacity = '0';
  lovePage.style.pointerEvents = 'none';

  document.getElementById('desktop').classList.remove('hidden-screen');
}

//

// function backToDesktopFromEmotion() {
//   const emotionPage = document.getElementById('emotionPage');
//   emotionPage.style.display = 'none';
//   emotionPage.style.opacity = '0';
//   emotionPage.style.pointerEvents = 'none';

//   document.getElementById('desktop').classList.remove('hidden-screen');
// }

// function showEmotionDetail(emotion) {
//   const paragraphs = {
//     sad: "Hey, it's okay to feel like this. Sadness isn't weakness — it's proof that your heart still feels, that you care deeply. I'm proud of you for getting through even when it hurts. I love you. Always.",
//     annoyed: "Ugh, I get it. People can be annoying, expectations even worse. You're doing your best and that’s more than enough. Step back, breathe. You're allowed to protect your peace.",
//     scared: "Fear means you're about to do something brave. Even if it doesn’t feel like it now, you’ve survived every bad day until this one. You’re stronger than the thing that scares you.",
//     anxious: "Breathe. You don’t need to fix everything right now. You don’t need to control every outcome. Just take this moment, and know I'm here, quietly rooting for you.",
//     loved: "You’re loved in loud and quiet ways. In texts, in thoughts, in stares from across the room. In late night overthinking. You matter more than you’ll ever know."
//   };

//   const detailPage = document.getElementById('emotionDetailPage');
//   document.getElementById('emotionText').textContent = paragraphs[emotion];


//   document.getElementById('emotionPage').style.display = 'none';
//   detailPage.style.display = 'flex';
//   detailPage.style.opacity = '1';
//   detailPage.style.pointerEvents = 'auto';
// }

// function backToEmotionMenu() {
//   const detailPage = document.getElementById('emotionDetailPage');
//   detailPage.style.display = 'none';
//   detailPage.style.opacity = '0';
//   detailPage.style.pointerEvents = 'none';

//   const emotionPage = document.getElementById('emotionPage');
//   emotionPage.style.display = 'flex';
//   emotionPage.style.opacity = '1';
//   emotionPage.style.pointerEvents = 'auto';
// }


// Close any popup window
function closeWindow(id) {
  const win = document.getElementById(id + '-window');
  if (win) win.remove();
}

// Make window draggable
function makeDraggable(el) {
  let isDragging = false, offsetX = 0, offsetY = 0;

  el.onmousedown = function (e) {
    isDragging = true;
    offsetX = e.clientX - el.offsetLeft;
    offsetY = e.clientY - el.offsetTop;
    el.style.zIndex = 100;
  };

  document.onmousemove = function (e) {
    if (!isDragging) return;
    el.style.left = e.clientX - offsetX + 'px';
    el.style.top = e.clientY - offsetY + 'px';
  };

  document.onmouseup = function () {
    isDragging = false;
    el.style.zIndex = 20;
  };
}

