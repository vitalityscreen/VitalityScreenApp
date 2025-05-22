
module.exports.calculateRisk = (data) => {
  return {
    diseases: data.map(d => ({
      name: d.name,
      risk: Math.random() > 0.66 ? 'High' : (Math.random() > 0.5 ? 'Medium' : 'Low'),
    })),
    overallScore: Math.floor(Math.random() * 100)
  };
};
