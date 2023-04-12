import key from './key.jpg'
function App() {
  return (
    <div className="App">
      <h1>Usability Study</h1>
      <div className="subheading">
        <h2>Idiom 3:</h2>
        <h3>The median income of a region may play a role in determining whether or not its residents choose to participate in clinical trials for experimental treatments.</h3>
        <iframe width="100%" height="1000" frameBorder="0" src="https://observablehq.com/embed/58b5f44567334d62?cells=medIncomechart" title="Idiom 3"></iframe>
      </div>
      <div className="subheading">
        <h2>Idiom 4:</h2>
        <h3>The type of cancer a person suffers from can influence their decision to enroll in a clincal study hoping for a cure.</h3>

        <iframe className="second-iframe" width="100%" height="1941" frameBorder="0" src="https://observablehq.com/embed/58b5f44567334d62?cells=treeEnrollChart" title="Idiom 4"></iframe>
      </div>
      <div className="subheading">
        <h2>Idiom 5:</h2>
        <img src = {key} alt="key for the chart"/>
        <h3>Some specific population groups may participate in clinical trials at a lower rate compared to other groups.</h3>
        <iframe className="second-iframe" width="100%" height="584" frameBorder="0" src="https://observablehq.com/embed/58b5f44567334d62?cells=racechart" title="Idiom 5"></iframe>
      </div>
    </div>
  );
}

export default App;