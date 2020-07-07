export const openSidebar = (data) => {
    return{
        type: "OPEN SIDEBAR",
        data
    }
}

export const closeSidebar = (data) => {
    return{
        type: "CLOSE SIDEBAR",
        data
    }
}