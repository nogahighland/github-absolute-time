function repplaceRelativeTime() {
  const bgColor = $($('.TableObject-item > .State')[0]).css('background-color') || '#00a497';
  $('relative-time').each(function() {
    const absTime = moment($(this).attr('datetime')).format('llll');
    $(this).html(absTime).css({ backgroundColor: bgColor, color: 'white', borderRadius: '3px', padding: '2px 3px', fontSize: 'smaller' });
  });
}
repplaceRelativeTime();
setInterval(repplaceRelativeTime, 60 * 1000);
