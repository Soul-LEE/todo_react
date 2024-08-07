// import './App.css';
import Persons from './Persons';


function PersonList({persons}) {
  var people = persons.map((data, idx)=>{
    return data;
  });

  console.log(people);
  return (
    <div className="PersonList">
    <Persons></Persons>
    </div>
  );
}

export default PersonList;
