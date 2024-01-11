function repplaceRelativeTime() {
  const bgColor = $($('.State')[0]).css('background-color') || '#00a497';
  $('relative-time').each(function () {
    const absTime = moment($(this).attr('datetime')).format('llll');
    const height = $(this).height();
    this.shadowRoot.innerHTML = absTime
    $(this).css({backgroundColor: bgColor, color: 'white', borderRadius: `${height / 2}px`, padding: '2px 4px', fontSize: 'smaller'});
  });
}
setTimeout(repplaceRelativeTime, 0.5 * 1000);
setInterval(repplaceRelativeTime, 1 * 1000);
