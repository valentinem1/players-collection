export const setMetadata = (metadata) => {
    return {
        type: "SET METADATA",
        metadata
    }
}

export const updateMetadata = (data) => {
    return {
        type: "UPDATE METADATA",
        data
    }
}