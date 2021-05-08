import React, {useEffect} from 'react'
import { useSelector,  useDispatch } from "react-redux"
import { LayThongTinPhimAction } from "../../Redux/Actions/FilmAction"
export default function Detail(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        let {id} = props.match.params;
        dispatch(LayThongTinPhimAction(id))
    }, [])

    return (
        <section>

        </section>
    )
}
