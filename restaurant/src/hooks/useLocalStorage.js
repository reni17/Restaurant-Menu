import { useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
const [value, setValue] = useState(() => {
    let savedData = localStorage.getItem(key)
    return savedData ? JSON.parse(savedData) : defaultValue
})

const setLocalStorageValue = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue))
    setValue(newValue)
}

return[
    value,
    setLocalStorageValue
]
} 