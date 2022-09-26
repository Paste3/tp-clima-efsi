import React, { useEffect, useState } from "react";
const axios = require('axios');

const Valores = (props) => {
    const [datos, setDatos] = useState([]);
    useEffect(() => {
        axios.get(`https://www.universal-tutorial.com/api/getaccesstoken`, {
            'headers': {
                "api-token": "SW2brFfHBovkJv9ZuPhYhB9pq4AU01ZtBqKANeZmQty49qaB60MX9Aa_vBD2laUIUTc",
                "user-email": "matias.past@gmail.com"
            }
        })
            .then(function (response) {
                axios.get(`https://www.universal-tutorial.com/api/countries/`, {
                    'headers': {
                        "Authorization": `Bearer ${response.data.auth_token}`,
                        "Accept": "application/json"
                    }
                })
                    .then(function (response1) {
                        setDatos(response1.data);
                    })
            })
    }, [props.id])
    return (
        <>
            {
                datos.map(
                    (i) => (
                        <>
                            <option value={i.country_name}>{i.country_name}</option>
                        </>
                    )
                )
            }
        </>
    );
}

export default Valores;