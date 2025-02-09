export const contactdialog = (set)=>({
    open: false,
    setopen: ()=>set((state)=>({open:!state.open}))
    
})