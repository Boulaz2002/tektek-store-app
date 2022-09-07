import axios from "axios"; // Import Axios as axios

export const postFetch = (data)=> {
    axios
        .post(
            "http://localhost:3001/users/", 
            data, 
            {
            headers: {
                "Content-Type": "application/json",
            },
            })
        .then((res) => {
            console.log(res);
            alert("Registered")
        })
        .catch(
            (err) => { console.log(err);}
        );
}

export const getFtech = async () => {
    await fetch(`http://localhost:3001/users/all`)
        .then(response => response.json())
        .then(response => {
            //setProducts(response);
        })
        .catch(err => console.error(err));
    
}