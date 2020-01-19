import React from "react";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/any',
    'name': '박길동',
    'birthday': '960202',
    'gender': '여자',
    'job': '대학생'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '김길동',
    'birthday': '960303',
    'gender': '남자',
    'job': '대학생'
  }
]

function App() {
  return (
    <>
      {
        customers.map(customer => (
          <Customer
            key={customer.id}
            id={customer.id}
            image={customer.image}
            name={customer.name}
            birthday={customer.birthday}
            gender={customer.gender}
            job={customer.job}
          />
        ))
      }
    </>
  );
}

export default App;
