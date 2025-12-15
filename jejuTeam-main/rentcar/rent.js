document.addEventListener('DOMContentLoaded', function() {
    const filterBoxes = document.querySelectorAll('.filter-box');

    filterBoxes.forEach(box => {
        box.addEventListener('click', function(event) {
            const isAlreadyActive = this.classList.contains('active');

            filterBoxes.forEach(item => item.classList.remove('active'));

            if (!isAlreadyActive) {
                this.classList.add('active');

                const dateInput = this.querySelector('.date-input');
                if (dateInput && dateInput.showPicker) {
                    setTimeout(() => {
                        dateInput.showPicker();
                    }, 0);
                }
            }

            event.stopPropagation();
        });
    });

    document.addEventListener('click', function() {
        filterBoxes.forEach(box => box.classList.remove('active'));
    });

    // ✅ 옵션 선택
    document.querySelectorAll('.option-list li').forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            const box = this.closest('.filter-box');
            box.querySelector('.value-display').textContent = this.textContent;
            box.classList.remove('active');
        });
    });

    // ✅ 날짜 선택
    document.querySelectorAll('.date-input').forEach(input => {
        input.addEventListener('change', function(e) {
            e.stopPropagation();
            const box = this.closest('.filter-box');
            box.querySelector('.value-display').textContent =
                this.value.replace('T', ' ');
            box.classList.remove('active');
        });
    });
});

const showMoreBtn = document.querySelector(".more-btn");
const hiddenCards = document.querySelectorAll(".car-card.hidden");

showMoreBtn.addEventListener("click", () => {
    hiddenCards.forEach(card => card.classList.remove("hidden"));
    showMoreBtn.style.display = "none"; // 버튼 숨기기
});