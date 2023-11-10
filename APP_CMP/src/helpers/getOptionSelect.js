export default function getOptionsSelect(e) {
    const select = e.target;
    const optionValue = select.value;
    const allOptions = [...select.options];
    return allOptions.find(option => option.value == optionValue);
}