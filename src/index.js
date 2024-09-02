let totalCalories = 0;

document.getElementById('save-btn').addEventListener('click', function() {
    const mealName = document.getElementById('meal-name').value;
    const mealCalories = parseInt(document.getElementById('meal-calories').value);

    if (mealName && mealCalories) {
        const tableBody = document.getElementById('table-body');
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.className = 'p-2';
        nameCell.textContent = mealName;

        const caloriesCell = document.createElement('td');
        caloriesCell.className = 'p-2';
        caloriesCell.textContent = mealCalories;

        const deleteCell = document.createElement('td');
        deleteCell.className = 'p-2';
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '🗑️';
        deleteButton.addEventListener('click', function() {
            totalCalories -= mealCalories;
            document.getElementById('total-calories').textContent = totalCalories;
            row.remove();
        });
        deleteCell.appendChild(deleteButton);

        row.appendChild(nameCell);
        row.appendChild(caloriesCell);
        row.appendChild(deleteCell);

        tableBody.appendChild(row);

        totalCalories += mealCalories;
        document.getElementById('total-calories').textContent = totalCalories;

        document.getElementById('meal-name').value = '';
        document.getElementById('meal-calories').value = '';
    }
});

document.getElementById('cancel-btn').addEventListener('click', function() {
    document.getElementById('meal-name').value = '';
    document.getElementById('meal-calories').value = '';
});
