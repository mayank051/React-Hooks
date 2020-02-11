import React, {useEffect, useState} from 'react';


function HookMouse(props) {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e =>{
        console.log("Mouse Event")
        setX(e.clientX)
        setY(e.clientY)
    }
// In this case we have passed empty array as second argument in useEffect so it will be clled only once
// during the time of first render (behaves same as componentDidMount)
    useEffect(() => {
        console.log("useEffect Called")
        window.addEventListener('mousemove', logMousePosition)

        //This will unmount the listner (works as componentWillUnmount)
        return() => {
            console.log("Component Unmounting Code")
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
    return (
        <div>
            Hooks X - {x} Y = {y}
        </div>
    );
}

export default HookMouse;