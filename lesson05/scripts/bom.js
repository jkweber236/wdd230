const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list')


button.addEventListener('click', () => {
    if (input.value != '' && list.children.length < 10) {
        const li = document.createElement('li');
        const deletebutton = document.createElement('button');
        li.textContent = input.value;
        deletebutton.textContent = '❌';
        li.append(deletebutton);
        list.append(li);

        deletebutton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        })
        input.value = '';
    }
    input.focus();
});