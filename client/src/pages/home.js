import React, {useState, useEffect} from "react";
import Container from "../components/container";
import Row from "../components/row";
import Column from "../components/column";
import Form from "../components/form";
import API from "../utils/API"
import FoodBankContext from "../utils/FoodBankContext"

export default function Homepage(props) {
  const [foodBankList, setFoodBankList] = useState({
    results: [],
    original: []
  })
  
const [search,setSearch] = useState("")

  useEffect(() => {

    API.search().then(API => {
      console.log(API.data)

      setFoodBankList({
        results: API.data,
        original: API.data
      })
    })
    
  }, [])
  
  const handleChange = (event) => {
    const { value } = event.target
    setSearch(value)

    let newFoodBankList = foodBankList.original.filter(location => {
        return location.name.first.toLowerCase().indexOf(value.toLowerCase()) > -1
    })

    setFoodBankList({
      
      results: newFoodBankList,
      original: foodBankList.original
    })
}
  return (
    <FoodBankContext.Provider value={foodBankList}>
     <Container>
      <Row>
        <Column size="col-sm-6">
          <Form />

          
        </Column>
        <Column size="col-sm-6"></Column>
      </Row>
    </Container> 
   </FoodBankContext.Provider>


    
  );
}
