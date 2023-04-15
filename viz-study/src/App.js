import key from './key.jpg'
function App() {
  return (
    <div className="App" style={{margin:"50px"}}>
      <h1>Usability Study</h1>
      <div className="subheading">
        <h2>Idiom 1:</h2>
        <h3>The level of poverty in a given region can have an impact on the number of individuals who succumb to cancer.</h3>
        <div style={{display:'flex'}}>
        <div style={{flex: 5}}>
        <iframe width="65%" height="585" frameborder="0" src="https://observablehq.com/embed/58b5f44567334d62?cells=povertyChart" title="Idiom 1"></iframe>
        </div>
        <div style={{flex: 1, marginLeft: '-300px', marginRight: '30px'}}>
        <p>The idea behind this idiom is to analyze if poverty and cancer deaths are correlated. This initial visualization will help us understand which regions are more affected by poverty.</p>
        </div>
        </div>
      </div>
      <div className="subheading">
        <h2>Idiom 2:</h2>
        <h3>The proportion of a region's population enrolling in experimental cancer cure trials depends on how many people get diagnosed with cancer.</h3>
        <div style={{display:'flex'}}>
        <div style={{flex: 6}}>
        <iframe width="65%" height="548" frameborder="0" src="https://observablehq.com/embed/58b5f44567334d62?cells=incChart" title="Idiom 2"></iframe>
        </div>
        <div style={{flex: 1, marginLeft: '-300px', marginRight: '30px'}}>
        <p>Trial enrollments here denotes patients who enroll in clinical trials, hoping to find successful, experimental cures for their cancers and other ailments.</p>
        </div>
        </div>
      </div>
      <div className="subheading">
        <h2>Idiom 3:</h2>
        <h3>The median income of a region may play a role in determining whether or not its residents choose to participate in clinical trials for experimental treatments.</h3>
        <div style={{display:'flex'}}>
        <div style={{flex: 6}}>
        <iframe width="65%" height="1000" frameBorder="0" src="https://observablehq.com/embed/58b5f44567334d62?cells=medIncomechart" title="Idiom 3"></iframe>
        </div>
        <div style={{flex: 1, marginLeft: '-300px', marginRight: '30px'}}>
          <p>Clinical trials can be expensive, which limits their accessibility to certain groups based on socioeconomic factors. This can create barriers to participation, especially for marginalized communities. Addressing these issues will require innovative solutions to reduce costs and ensure equitable access to clinical trials.</p>
        </div>
        </div>
      </div>
      <div className="subheading">
        <h2>Idiom 4:</h2>
        <h3>The type of cancer a person suffers from can influence their decision to enroll in a clincal study hoping for a cure.</h3>
        <div style={{display:'flex'}}>
        <div style={{flex: 6}}>
        <iframe className="second-iframe" width="65%" height="1200" frameBorder="0" src="https://observablehq.com/embed/58b5f44567334d62?cells=treeEnrollChart" title="Idiom 4"></iframe>
        </div>
        <div style={{flex: 1, marginLeft: '-300px', marginRight: '30px'}}>
          <p>Patients with aggressive, extremely malignant types of cancer often do not find the results they need with any kind of cure, so they may decide to not enroll in studies at all. The opposite could also be true, where patients with very aggressive cancers are overrepresented in cancer cure clinical trials.</p>
        </div>
        </div>
      </div>
      <div className="subheading">
        <h2>Idiom 5:</h2>
        <img src = {key} alt="key for the chart"/>
        <h3>Some specific population groups may participate in clinical trials at a lower rate compared to other groups.</h3>
        <div style={{display:'flex'}}>
        <div style={{flex: 6}}>
        <iframe className="second-iframe" width="65%" height="584" frameBorder="0" src="https://observablehq.com/embed/58b5f44567334d62?cells=racechart" title="Idiom 5"></iframe>
        </div>
        <div style={{flex: 1, marginLeft: '-300px', marginRight: '30px'}}>
          <p>As mentioned earlier, certain population groups might have restricted access to cancer cure trials based on socioeconomic factors. This applies to race, as well. Certain race groups are overrepresented in trial participation.
            Here, API - Asian and Pacific Islander, AI  - American Indian.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;