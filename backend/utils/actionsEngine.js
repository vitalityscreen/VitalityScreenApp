
module.exports.generateActions = (data) => {
  const actions = [];
  data.diseases.forEach(d => {
    if (d.risk === 'High' || d.risk === 'Medium') {
      actions.push({
        disease: d.name,
        action: `Exercise and reduce sugar for ${d.name}`,
        type: "Lifestyle"
      });
    }
  });
  return actions.slice(0, 3);
};
