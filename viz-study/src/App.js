function App() {
  return (
    <div className="App" style={{margin:"50px"}}>
      <h1>Usability Study</h1>
      <p>Note: Some of these visualizations have a hover feature! Feel free to hover over the elements of each viz to understand them better!</p>
      <div className="subheading">
        <h2>Idiom 1:</h2>
        <h3>The level of poverty in a given region can have an impact on the number of individuals who succumb to cancer.</h3>
        <div style={{display:'flex'}}>
        <div style={{flex: 5}}>
        <iframe title="1" width="69%" height="584" frameborder="0"
  src="https://observablehq.com/embed/d965bd95f47f0561@1332?cells=povertyChart"></iframe>
        </div>
        <div style={{flex: 1, marginLeft: '-300px', marginRight: '30px'}}>
        <p>The purpose of analyzing poverty rates and cancer deaths is to determine if there is a correlation between the two. By examining the correlation between poverty and cancer deaths, we can gain valuable insight into which regions are most affected by poverty and how it impacts cancer outcomes. This initial visualization is the first step in a deeper analysis of this relationship, which will help us to better understand the complex interactions between poverty and cancer outcomes. By identifying areas that are particularly impacted by poverty, we can begin to develop targeted interventions that address the underlying social determinants of health that contribute to disparities in cancer outcomes. </p>
        </div>
        </div>
        <iframe title="1" width="65%" height="584" frameborder="0"
  src="https://observablehq.com/embed/d965bd95f47f0561@1332?cells=cancerDeathChart"></iframe>
      </div>
      <div className="subheading">
        <h2>Idiom 2:</h2>
        <h3>The proportion of a region's population enrolling in experimental cancer cure trials depends on how many people get diagnosed with cancer.</h3>
        <div style={{display:'flex'}}>
        <div style={{flex: 6}}>
        <iframe title="1" width="65%" height="660" frameborder="0"
  src="https://observablehq.com/embed/2cea4c2992f50ecc@1170?cells=incChart"></iframe>
        </div>
        <div style={{flex: 1, marginLeft: '-300px', marginRight: '30px'}}>
        <p>Clinical trials are an important step in developing new treatments for cancer and other diseases. Trial enrollments refer to the patients who choose to participate in these studies, with the hope of finding successful experimental cures for their ailments. Clinical trials typically involve the testing of new drugs or therapies to determine their safety and effectiveness in treating specific diseases.</p>
        </div>
        </div>
      </div>
      <div className="subheading">
        <h2>Idiom 3:</h2>
        <h3>The median income of a region may play a role in determining whether or not its residents choose to participate in clinical trials for experimental treatments.</h3>
        <div style={{display:'flex'}}>
        <div style={{flex: 6}}>
        <iframe title="1" width="65%" height="684" frameborder="0"
  src="https://observablehq.com/embed/d965bd95f47f0561@1332?cells=medIncomechart"></iframe>
        </div>
        <div style={{flex: 1, marginLeft: '-300px', marginRight: '30px'}}>
          <p>Clinical trials are an essential component of modern medicine, but they can be costly, creating barriers to participation for many individuals, particularly those from lower socioeconomic backgrounds. The high cost of clinical trials is often due to the extensive testing, data collection, and analysis required to ensure the safety and efficacy of new treatments. This cost is often passed on to patients in the form of high medical bills, which can be a significant burden for those with limited financial resources.

These barriers to clinical trial participation can have a disproportionate impact on marginalized communities.</p>
        </div>
        </div>
      </div>
      <div className="subheading">
        <h2>Idiom 4:</h2>
        <h3>The type of cancer a person suffers from can influence their decision to enroll in a clincal study hoping for a cure.</h3>
        <div style={{display:'flex'}}>
        <div style={{flex: 6}}>
        <iframe title="1" width="100%" height="1084" frameborder="0"
  src="https://observablehq.com/embed/2cea4c2992f50ecc@1170?cells=treeEnrollChart"></iframe>
        </div>
        <div style={{flex: 1, marginLeft: '-300px', marginRight: '30px'}}>
          <p>Patients with aggressive, extremely malignant types of cancer often do not find the results they need with any kind of cure, so they may decide to not enroll in studies at all. The opposite could also be true, where patients with very aggressive cancers are overrepresented in cancer cure clinical trials.</p>
        </div>
        </div>
      </div>
      <div className="subheading">
        <h2>Idiom 5:</h2>
        <iframe title="1" width="100%" height="126" frameborder="0"
  src="https://observablehq.com/embed/fcf2fc1dc793c481@1159?cells=key"></iframe>
        <h3>Some specific population groups may participate in clinical trials at a lower rate compared to other groups.</h3>
        <div style={{display:'flex'}}>
        <div style={{flex: 6}}>
        <iframe title="1" width="65%" height="1084" frameborder="0"
  src="https://observablehq.com/embed/fcf2fc1dc793c481@1159?cells=racechart"></iframe>
        </div>
        <div style={{flex: 1, marginLeft: '-300px', marginRight: '30px'}}>
          <p>The issue of restricted access to cancer cure trials based on socioeconomic factors is particularly relevant when it comes to race. Certain racial groups are overrepresented in trial participation, while others are underrepresented. This could be due to a variety of factors, including differences in income, education levels, and access to healthcare.
          </p>
          <p style={{fontWeight: "bold", fontSize: "1.2rem"}}>Races - White, Black, API - Asian/Pacific Islander, AI - American Indian</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;