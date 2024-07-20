function ConvertTemp() {
    const inputElement = document.getElementById('celsius');
    const inputValue = Number(inputElement.value);
    const result =( (inputValue * 9)/5)+32;
    document.getElementById('f').value = result;

    
}