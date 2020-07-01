export const setMetadata = (data) => {
    // console.log(data);
    return {
        type: "SET METADATA",
        data
    }
}

export const updateMetadata = (current_page) => {
    return {
        type: "UPDATE METADATA",
        current_page
    }
}