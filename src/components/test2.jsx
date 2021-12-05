import  {useEffect, useState} from 'react';



function TestTwo() {
    const [dataTwo, setDataTwo] = useState([]);

    useEffect(() => {
        fetch("/projectsView")
            .then((res) => res.json())
            .then((result) => {
                setDataTwo(result)
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
                {dataTwo.map(item => (
                    <li key={item.id}>
                    {item.title} {item.date}
                    </li>
                ))}
            </ul>            
        </div>

    );
      
}
 
export default TestTwo;