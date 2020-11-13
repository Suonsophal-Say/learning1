import React from 'react'

function NameList(){
    const name=['Bruce', 'Clark', 'Diana', 'Bruce']//Array
const nameList=name.map((name, index) =><h1 key={index}>{index} {name}</h1>)
// const list=name.map(name=><h1>{name}</h1>)
return <div>{nameList}</div>


}
export default NameList