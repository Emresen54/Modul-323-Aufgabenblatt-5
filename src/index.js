const addMeal = (mealName, mealCalories) => (tableBody, totalCalories) => {
    const createCell = (text, className) => {
        const cell = document.createElement('td');
        cell.className = className;
        cell.textContent = text;
        return cell;
    };

    const createDeleteButton = (mealCalories, row) => {
        const button = document.createElement('button');
        button.textContent = '🗑️';
        button.addEventListener('click', () => {
            updateTotalCalories(totalCalories - mealCalories);
            row.remove();
        });
        return button;
    };

    const updateTotalCalories = (calories) => {
        document.getElementById('total-calories').textContent = calories;
    };

    const row = document.createElement('tr');
    row.appendChild(createCell(mealName, 'p-2'));
    row.appendChild(createCell(mealCalories, 'p-2'));
    const deleteCell = createCell('', 'p-2');
    deleteCell.appendChild(createDeleteButton(mealCalories, row));
    row.appendChild(deleteCell);

    tableBody.appendChild(row);
    updateTotalCalories(totalCalories + mealCalories);

    return totalCalories + mealCalories;
};

const clearInputs = () => {
    document.getElementById('meal-name').value = '';
    document.getElementById('meal-calories').value = '';
};

const handleSaveClick = (totalCalories) => () => {
    const mealName = document.getElementById('meal-name').value;
    const mealCalories = parseInt(document.getElementById('meal-calories').value);

    if (mealName && mealCalories) {
        const tableBody = document.getElementById('table-body');
        totalCalories = addMeal(mealName, mealCalories)(tableBody, totalCalories);
        clearInputs();
    }
};

const handleCancelClick = () => {
    clearInputs();
};

const initializeApp = () => {
    let totalCalories = 0;
    document.getElementById('save-btn').addEventListener('click', handleSaveClick(totalCalories));
    document.getElementById('cancel-btn').addEventListener('click', handleCancelClick);
};

initializeApp();
