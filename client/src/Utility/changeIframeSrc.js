export const handleChangeIframeSrc = (id, iframeDom) => {
  const iframeDomAlter = !iframeDom
    ? document.getElementsByTagName('iframe')[0]
    : iframeDom;

  const newSrc = `https://www.youtube.com/embed/${id}?enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A3000&widgetid=1`;
  iframeDomAlter.src = newSrc;
};
