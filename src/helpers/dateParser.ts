import moment from "moment";

export const dateParser = (text: string): string[] => {
    const regexDate = new RegExp('\\d{0,2}\\/\\d{0,2}\\/\\d{4}', 'g');
    const results: string[] = [];

    Array.from(text.matchAll(regexDate)).forEach(item => {
        results.push(moment(item.shift(), 'DD/MM/YYYY').format('DD/MM/YYYY'))
    })

    return results;
}