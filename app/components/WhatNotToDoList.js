import React, { Component } from 'react';

class ToDoItem extends Component {
  render() {
    return (
      <div className="todoItem">
        <div className="todoStringContainer">
          <div className="todoTitle">
            <p>{this.props.title}</p>
          </div>
          <div className="todoDescription">
            <p>{this.props.description}</p>
          </div>
        </div>
        <div className="todoOptionContainer">
          <div className="todoEdit">
            <span className="todoOption">Edit</span>
          </div>
          <div className="todoDelete">
            <span className="todoOption">Delete</span>
          </div>
        </div>
      </div>
    );
  }
}

class Home extends Component {
  render() {
    const list = [
      {
        title: 'moo',
        description:
          "go do moo things, probably gotta go moo moo moo and not baa baa baa cuz i'm a cow not a sheep lol xd xd hehe"
      },
      { title: 'cow', description: 'go do cow things' },
      { title: 'cheese', description: 'go do cheesy things' },
      { title: 'burger', description: 'go do fat things' }
    ];
    return (
      <div className="todoContainer">
        {list.map(e => {
          return (
            <ToDoItem
              key={e.title}
              title={e.title}
              description={e.description}
            />
          );
        })}
      </div>
    );
  }
}

export default Home;
