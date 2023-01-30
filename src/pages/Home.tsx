import { useEffect } from "react"
import { exampleAction } from "../redux/common.reducer"
import { useAppDispatch, useAppSelector } from "../redux/hooks"

const Example = () => {
    const dispatch = useAppDispatch()
    const data = useAppSelector(store => store.exampleStore.example)
    const getExample = () => {
      dispatch(exampleAction())
    }
    useEffect(() => {
        getExample()
    }, [])
    return (
        <div>
            poke:
            <p>{data.name}</p>
            <p>{data.id}</p>
        </div>
    )
}

export default Example