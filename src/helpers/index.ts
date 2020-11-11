export const debounce = (fun: any, wait: number) => {
    let timeout: any;

    return function execFunction(...args: any) {
        const later = () => {
            clearTimeout(timeout);
            fun(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    }
};