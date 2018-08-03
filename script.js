class List extends React.Component {
  constructor(){
    super()
    this.changeHandler = this.changeHandler.bind( this );
    this.clickHandler = this.clickHandler.bind( this );
  }

  state = {
    list : [],
    word : "",
  }

  changeHandler(event){
    this.setState({word:event.target.value});
  }

  clickHandler(){
    let task = this.state.word;
    let storeIntoList = this.state.list;

    storeIntoList.push(task)

    console.log(this.state.list);

    this.setState({list: this.state.list})
  
    
  }

  render() {
      let tasks = this.state.list.map((item, index) => {
        return <li key={index}>{item}</li>;
      });
      return (
        <div className="list">
          <input onChange={this.changeHandler} value={this.state.word}/>
          <button onClick={this.clickHandler}>add item</button>
          {tasks}
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);

