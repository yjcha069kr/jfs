// --- 좋아요 클릭 이벤트 ---
// $(selector).on(eventName, childSelector, handler)  // 이벤트 위임
$(document).on('click', '.like', function () {
    let $btn = $(this);
    // 하트, 좋아요 숫자
    let text = $btn.text();
    // 하트 142 -> 142.0
    // 하트 3.7k -> 3.7
    let current = parseFloat(text);
    // 142 -> 142
    // 3.7 * 1000 -> 3700
    // 'text가 'k'를 가지고 있으면 1000을 곱해라 '
    if (text.includes('k')) current *= 1000;

    // '버튼이 .active를 가지고 있으면'
    if ($btn.hasClass('active')) {
        current -= 1;
        $btn.removeClass('active');
        $btn.find('i').attr('class', 'fa-regular fa-heart');
    } else {
        // '버튼이 .active를 가지고 있지 않으면'
        current += 1;
        // '버튼에 .active를 추가하고'
        $btn.addClass('active');
        // '빨간 하트가 된다'
        $btn.find('i').attr('class', 'fa-solid fa-heart');
    }

    $btn.contents().last()[0].textContent = formatCount(current);
});