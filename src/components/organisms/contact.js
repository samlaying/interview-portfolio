export function initContact() {
  const wechatCopy = document.getElementById('wechat-copy');
  if (!wechatCopy) return;

  const label = wechatCopy.querySelector('.copy-label');
  const wechatId = wechatCopy.dataset.copy;

  wechatCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(wechatId).then(() => {
      label.textContent = 'Copied';
      setTimeout(() => { label.textContent = 'Copy'; }, 2000);
    });
  });
}
