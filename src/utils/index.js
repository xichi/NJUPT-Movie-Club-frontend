/* 滚动到顶部 */
export function scrollToTop() {
  (function smoothscroll() {
    var currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(smoothscroll);
      window.scrollTo(0, currentScroll - currentScroll / 5);
    }
  })();
}

/* 跨域获取图片 */
export function getImage(url) {
  // 把现在的图片连接传进来，返回一个不受限制的路径
  if (url !== undefined) {
    return "https://images.weserv.nl/?url=" + url;
  }
}