import React, { useState, useEffect } from 'react'
import "../../App.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


const List = () => {

    const [text, setText] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const geturl = 'http://localhost:8080/generator/schedule/tasks';

    const getData = async () => {
        const result = await axios.get(geturl)
        setText(result.data)
    }

    const handleOnClick = async (e) => {
        e.preventDefault()
        try {
            getData();
        }
        catch (err) {
            console.log(err)
        }
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
                    text.length > 0 ? text.map(item => {
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
    )
}
export default List