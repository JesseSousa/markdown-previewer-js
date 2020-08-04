import marked from 'marked';

const mdInput = document.querySelector('#markdown-input');
const mdOutput = document.querySelector('.markdown-output');
const clipboardButton = document.querySelector('#copy-to-clipboard');

mdInput.addEventListener('input', (e) => {
  mdOutput.innerHTML = marked(e.target.value);
});

clipboardButton.addEventListener('click', () => {
  mdInput.select();
  document.execCommand('copy');
});
