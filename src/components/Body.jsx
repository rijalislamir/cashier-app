import React, { useEffect } from "react"
import LeftPane from "./LeftPane"
import RightPane from "./RightPane"
import { getProducts } from "../store/productSlice"
import { useDispatch } from "react-redux"

const Body = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <main className="body">
            <LeftPane />
            <RightPane />
        </main>
    );
}

export default Body;