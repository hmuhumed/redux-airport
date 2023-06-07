import {useSelector} from 'react-redux';
function AirLineList() {

    const airlineCount = useSelector(store => store.airlineCount)


    return (

        <>
            <ul>

                {airlineCount.map((airline , i) => (
                    <li key={i}>
                        {airline}
                    </li>
                ))}
            </ul>
        
        </>


    )
}

export default AirLineList;