const truncate = (text: string, length: number) => {
    if (text.length > length) {
        return text.split("").slice(0, length).join("") + "...";
    } else {
        return text
    }
}

export {truncate}