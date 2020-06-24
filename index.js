function repplaceRelativeTime() {
  const bgColor = $($('.TableObject-item > .State')[0]).css('background-color') || '#00a497';
  $('relative-time').each(function() {
    const absTime = moment($(this).attr('datetime')).format('llll');
    const height = $(this).height();
    $(this).html(absTime).css({ backgroundColor: bgColor, color: 'white', borderRadius: `${height/2}px`, padding: '2px 4px', fontSize: 'smaller' });
  });
}
setTimeout(repplaceRelativeTime, 0.5 * 1000);
setInterval(repplaceRelativeTime, 10 * 1000);
