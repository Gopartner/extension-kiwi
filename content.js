let menuVisible = false;

function toggleMenu() {
  if (menuVisible) {
    document.getElementById('bet-menu').remove();
    menuVisible = false;
  } else {
    const menu = document.createElement('div');
    menu.id = 'bet-menu';
    menu.innerHTML = `
      <button id="bet-red">Bet Merah</button>
      <button id="bet-black">Bet Hitam</button>
      <button id="bet-8">Bet 8</button>
      <button id="bet-9">Bet 9</button>
      <button id="bet-twin">Bet Kembar</button>
      <button id="sanggong">Sanggong</button>
    `;
    document.body.appendChild(menu);
    menuVisible = true;

    // Add event listeners
    document.getElementById('bet-red').addEventListener('click', function() {
      alert('Siap eksekusi bosku');
    });
    document.getElementById('bet-black').addEventListener('click', function() {
      alert('Siap eksekusi bosku');
    });
    document.getElementById('bet-8').addEventListener('click', function() {
      alert('Siap eksekusi bosku');
    });
    document.getElementById('bet-9').addEventListener('click', function() {
      alert('Siap eksekusi bosku');
    });
    document.getElementById('bet-twin').addEventListener('click', function() {
      alert('Siap eksekusi bosku');
    });
    document.getElementById('sanggong').addEventListener('click', function() {
      alert('Siap eksekusi bosku');
    });
  }
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "toggleMenu") {
    toggleMenu();
  }
});

