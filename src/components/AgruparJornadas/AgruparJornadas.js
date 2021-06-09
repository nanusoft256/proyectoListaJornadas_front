import axios from 'axios'
import { useEffect, useState } from 'react'
import AxiosClient from '../AxiosClient/AxiosClient'


const Agrupar = () => {
    const [agrupar, setListado] = useState([])

    const [attrs, setAttrs] = useState({
        "name": "",
        "description": "",
        "time": ""
    })

    const geturl = 'http://localhost:8080/generator/schedule/tasks';
    const posturl = 'http://localhost:9090/task';

    useEffect(async() => {
        console.log("comienzo");
        const result = await axios.get(geturl);
        console.log(result);
        console.log("final");
        const result2 = await axios.post(posturl, result.data);
        console.log(result2);
        setListado(result2);
    }, [])
    

    const handleOnClick = async (e) => {
        e.preventDefault()
        const message = [{
            "task_id": attrs.name,
            "task_name": attrs.description,
            "duration": parseInt(attrs.time),
        }]
        try {
            const result2 = await axios.post(posturl, message);
            console.log(result2)
        }
        catch (err) {
            console.log(err)
        }
    }

    const setearAttrs = (e) => {

        setAttrs(
            { ...attrs, [e.target.id]: e.target.value }
        )

    }

    return (
        <div>

        <div className="container">
            <form>
                <div className="form-group ">
                    <button className="btn btn-dark d-block" type="submit" onClick={handleOnClick}>Traer Nuevos datos</button>
                </div>
            </form>

            <form>
                <div className="form-group ">
                    <button className="btn btn-dark d-block" type="submit" onClick={handleOnClick}>Traer Nuevos datos</button>
                </div>
            </form>
        </div>

        <div className="">
            {
                Agrupar.length > 0 ? Agrupar.map(item => {
                    return (
                        <div key={item.task_id}>
                            <div className="card text-dark">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="">
                                            Id: {item.task_id}
                                        </div>
                                        <br></br>
                                        <div className="">
                                            <small>
                                            Nombre: {item.task_name}
                                            </small>
                                            <br></br>
                                            <small>
                                            Duracion: {item.duration}
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }) : null
            }
        </div>
    </div>
    );

}
export default Agrupar;