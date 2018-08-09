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
      </div>
    );
  }
}

class Home extends Component {
  render() {
    const list = [
      {
        title: 'moo',
        description: 'go do moo things'
      },
      { title: 'cow', description: 'go do cow things' },
      { title: 'cheese', description: 'go do cheesy things' },
      { title: 'burger', description: 'go do fat things' }
    ];
    return (
      <React.Fragment>
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexWrap: 'nowrap',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center'
          }}
        >
          <div className="todoContainer">
            {list.map(e => (
              <ToDoItem
                key={e.title}
                title={e.title}
                description={e.description}
              />
            ))}
          </div>
          <div style={{ width: '100%', padding: '5% 10%' }}>
            <form className="todoInput">
              <p style={{ fontSize: '20px' }}>Add New</p>
              <p>Title</p>
              <input
                className="todoTitleInput"
                type="text"
                placeholder="Remove that arrow from my wretched knee..."
              />
              <br />
              <p>Description</p>
              <input
                className="todoDescriptionInput"
                type="text"
                placeholder="After 7 years it's time I become an adventure again..."
              />
              <div className="todoAddButton">
                <a style={{ color: 'white' }}>Add!</a>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
