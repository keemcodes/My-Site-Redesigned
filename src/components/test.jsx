import  {useEffect, useState} from 'react';



function Test() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/json")
            .then((res) => res.json())
            .then((result) => {
                setData(result)
                console.log(result)
            },
            (error) => {
                console.log(error)
            })
            // .catch((r) =>
        
    }, [])

    return (
        <div className="test-div">
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                    {item.firstName} {item.lastName}
                    </li>
                ))}
            </ul>            
        </div>

    );
      
}
 
export default Test;