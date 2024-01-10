import React, {useState} from "react";
import FakeAPI from "./data/fakeAPI.js";


const AccountData = () => {
    const [data, setData] = useState(false)

    FakeAPI.then( response => setData(response))
    if(data === false){
        return<div>. . .</div>
    }else{
        return (
            <table>
                <tr>
                    <th>Day</th>
                    <th>Balance</th>
                    <th>Change</th>
                </tr>
                <tbody>
                    {data.map((row,idx) => <tr key={idx}/>)}
                    <td>{row.day}</td>
                    <td>{row.Balance}</td>
                    <td>{row.Change}</td>
                </tbody>
            </table>
        )
      
    }

};

export default AccountData;