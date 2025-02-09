import {create} from 'zustand'
import { contactdialog } from './slice/contactslice'

export const useAppStore = create()((...a)=>({
     ...contactdialog(...a)
}))