import marked from 'marked';

const MdInput = document.querySelector('#markdown-input');
const MdOutput = document.querySelector('.markdown-output');

MdInput.addEventListener('input', (e) => {
  MdOutput.innerHTML = marked(e.target.value);
});
