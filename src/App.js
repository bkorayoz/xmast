import React, {useState, useEffect} from 'react'
import './App.css';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

function App() {
  const client = new ApolloClient({
    uri: 'https://wealthy-seal-95.hasura.app/v1/graphql',
    cache: new InMemoryCache()
  });
  const  [isFinish, setIsFinish] = useState(false)
  const  [names, setNames] = useState([])

  useEffect(()=>{
    updateData()
  },[])

  const mutateList = (newNames) =>{
    client
    .mutate({
      mutation: gql`
        mutation MyMutation {
          update_constants(where: {key:{_eq: "xmastNames"}}, _set: {value: ${JSON.stringify(newNames)}}) {
            affected_rows
          }
        }
      `
    })
    .then(result => console.log(result));
  }

  const mutateBool = (status) =>{
    client
    .mutate({
      mutation: gql`
        mutation MyMutation {
          update_constants(where: {key:{_eq: "isXmastNumbersLocked"}}, _set: {value: ${JSON.stringify([status])}}) {
            affected_rows
          }
        }
      `
    })
    .then(result => console.log(result));
    setIsFinish(true);
  }

  const updateData = () =>{
    client
      .query({
        query: gql`
          query MyQuery {
            constants(where:{_or:[{key:{_eq:"isXmastNumbersLocked"}}]}) {
              key
              value
            }
          }
        `
      })
      .then(result => {
        console.log(result);
        setIsFinish((result.data?.constants?.length > 0 && result.data?.constants[0].value[0] === "locked") || false);
      });
    client
      .query({
        query: gql`
          query MyQuery {
            constants(where:{_or:[{key:{_eq:"xmastNames"}}]}) {
              key
              value
            }
          }
        `
      })
      .then(result => {
        console.log(result);
        setNames((result.data?.constants?.length > 0 && result.data?.constants[0].value) || []);
      });
  }

  const randomOrderGenerator = (array) =>{
    let newArray = JSON.parse(JSON.stringify(array))
    var currentIndex = newArray.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = newArray[currentIndex];
      newArray[currentIndex] = newArray[randomIndex];
      newArray[randomIndex] = temporaryValue;
    }
    setNames(JSON.parse(JSON.stringify(newArray)))
    mutateList(newArray)
  }
  
  return (
    <div className="App">
      {names.map((item, index)=><p>{`${index+1} - ${item}`}</p>)}
      {!isFinish && <button onClick={()=>randomOrderGenerator(names)}>Press to suffle names</button>}
      {!isFinish &&
      <button onClick={()=>mutateBool("locked")}>Lock the numbers</button>
      }
      {/* <button onClick={()=>mutateList(["koray", "rabia", "kaan", "melisa", "idil", "hasan", "ozan", "efekan"])}>update</button> */}
    </div>
  );
}

export default App;
