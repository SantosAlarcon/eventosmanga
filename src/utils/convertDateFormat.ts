export const convertDateFormat = (date: Date) => {
    return date.toISOString().replaceAll('-', '').replaceAll(':', '').replace('.', '').replace('Z', '');
}
