export const clsx = (...args: string[]) => {
    return [...args].filter(Boolean).join(" ").trim();
}