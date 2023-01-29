import React,{Component} from 'react';
import axios from 'axios';
import Hello from './Hello';
import ContactList from './ContactList';
//import './App.css';



function isSearched(searchTerm){
  return function(data){
    return !searchTerm || data.title.includes(searchTerm);
  }
}
const contacts = [
  {
    name: 'Raja Reddy',
    phone: '555-555-5555',
    email: 'Raja.Reddy@example.com'
  },
  {
    name: 'Raja Kumar',
    phone: '555-555-5556',
    email: 'Raja.Kumar@example.com'
  }
];

class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      data: []
    };
    this.removezitem=this.removezitem.bind(this);
    this.searchValue=this.searchValue.bind(this);
  }
  componentDidMount() {
    axios('https://hn.algolia.com/api/v1/search?query=javascript').then(response1=> 
    this.setState({
      data:response1.data.hits
    })
    )
  }
  removezitem(id){
    function isNotId(data){
      return data.objectID!==id;
    }
    const updatedList=this.state.data.filter(isNotId);
    this.setState({
      data:updatedList});
  }

  searchValue(event){
    this.setState({searchTerm : event.target.value})
  }

  render(){
    const {data,searchTerm}=this.state;
    return <div className='App'>

      
           <Hello name="Reddy" />;

           <ContactList contacts={contacts} />            
                 
                    <div className='jumbotorn'>
                    <form>
                      <input type="text" onChange={this.searchValue} />
                    </form>
                   {
                       data.filter(isSearched(searchTerm)).map(data=>
                      <div  key={data.objectID}>{data.title} - <a href={data.url} >{data.url}</a>
                         <button type='button' onClick= {()=>this.removezitem(data.objectID)} >Remove</button>
                      </div>)
                   }
                    </div>
                  
           
      </div>
  }
}
export default App;
