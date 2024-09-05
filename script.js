document.addEventListener('DOMContentLoaded', function() {
    const trees = document.querySelectorAll('.tree-card');

    trees.forEach(tree => {
        tree.addEventListener('click', function() {
            alert(`Lär dig mer om ${this.querySelector('h3').innerText}!`);
        });
    });
});
