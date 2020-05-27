import React from 'react';

class App extends React.Component {
  state = {
    skills: [{ skill: "JavaScript", level: 4 }],
    newSkill: {
      skill: '',
      level: 3,
    },
  };

  descRef = React.createRef();

  addSkill = e => {
    e.preventDefault();
    console.log(this.descRef.current)
    this.setState( state => ({
      skills: [...state.skills, state.newSkill],
      newSkill: {skill: '', level: 3}
    }))
  };

  handleChange = e => {
    e.persist();
    this.setState( state => {
      const newState = { newSkill: {...state.newSkill} };
      newState.newSkill[e.target.name] = e.target.value;
      return newState;
    })
  }

  render() {
    return (
      <section>
        <h2>DEV SKILLS</h2>
        <hr />
        {this.state.skills.map(s => (
          <article key={s.skill}>
            <div>{s.skill}</div> <div>{s.level}</div>
          </article>
        ))}
        <hr />
        <form onSubmit={this.addSkill}>
          <label>
            <span>SKILL</span>
            <input name='skill' value={this.state.newSkill.skill} onChange={this.handleChange} required pattern=".{2,}"/>
          </label>
          <label>
            <span>LEVEL</span>
            <select name='level' value={this.state.newSkill.level} onChange={this.handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <label>
          <span>DESC</span>
            <input name='desc' ref={this.descRef}/>
          </label>
          <button onClick={this.addSkill}>ADD SKILL</button>
        </form>
      </section>
    );
  }
}

export default App;
