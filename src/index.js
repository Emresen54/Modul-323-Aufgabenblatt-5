// TotalCalories als globale Variable definieren, damit es seinen Wert behält
let totalCalories = 0;

const addMeal = (mealName, mealCalories) => (tableBody) => {
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
            totalCalories -= mealCalories;
            updateTotalCalories(totalCalories);
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
    totalCalories += mealCalories;
    updateTotalCalories(totalCalories);
};

const clearInputs = () => {
    document.getElementById('meal-name').value = '';
    document.getElementById('meal-calories').value = '';
};

const handleSaveClick = () => {
    const mealName = document.getElementById('meal-name').value;
    const mealCalories = parseInt(document.getElementById('meal-calories').value);

    if (mealName && mealCalories) {
        const tableBody = document.getElementById('table-body');
        addMeal(mealName, mealCalories)(tableBody);
        clearInputs();
    }
};

const handleCancelClick = () => {
    clearInputs();
};

const initializeApp = () => {
    document.getElementById('save-btn').addEventListener('click', handleSaveClick);
    document.getElementById('cancel-btn').addEventListener('click', handleCancelClick);
};

initializeApp();
