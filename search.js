const input = document.getElementById('search');
const items = document.querySelectorAll('.index-list li');
const groups = document.querySelectorAll('.index-group');
const empty = document.getElementById('search-empty');

input.addEventListener('input', function () {
    const query = input.value.trim().toLowerCase();
    let visibleCount = 0;

    items.forEach(function (item) {
        const matches = item.textContent.toLowerCase().includes(query);
        item.hidden = !matches;
        if (matches) {
            visibleCount += 1;
        }
    });

    groups.forEach(function (group) {
        const anyVisible =
            group.querySelectorAll('.index-list li:not([hidden])').length > 0;
        group.hidden = !anyVisible;
    });

    empty.hidden = visibleCount > 0;
});