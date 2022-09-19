import React, { useEffect, useState } from "react";
const axios = require('axios');

const Valores = (props) => {
    const [datos, setDatos] = useState([]);
    console.log(props.id)
    let ghostList = [];
    useEffect(() => {
        axios.get(`https://www.universal-tutorial.com/api/getaccesstoken`, {
            'headers': {
                "api-token": "SW2brFfHBovkJv9ZuPhYhB9pq4AU01ZtBqKANeZmQty49qaB60MX9Aa_vBD2laUIUTc",
                "user-email": "matias.past@gmail.com"
            }
        })
            .then(function (response) {
                console.log(response.data);
                axios.get(`https://www.universal-tutorial.com/api/states/${props.pais}`, {
                    'headers': {
                        "Authorization": `Bearer ${response.data.auth_token}`,
                        "Accept": "application/json"
                    }
                })
                    .then(function (response1) {
                        console.log(response1.data);
                        setDatos(response1.data);
                        console.log("aaaaaaaaaaaaaa")
                    })
            })
    }, [props.id])
    return (
        <>
            {
                datos.map(
                    (i) => (
                        <>
                            <option value={i}>{i}</option>
                        </>
                    )
                )
            }
        </>
    );
}

export default Valores;