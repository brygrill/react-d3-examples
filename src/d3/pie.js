import * as d3 from 'd3';
import _ from 'lodash';

// CREDIT/THANKS: https://link.medium.com/N0Qr8tiSwX
class PieElement {
  ref;
  props;
  constructor(ref, props) {
    this.props = props;
    this.ref = ref;
    this.format = d3.format('.2f');
    this.colors = d3.scaleOrdinal(d3.schemeCategory10);
    this.createPie = d3
      .pie()
      .value(d => d.value)
      .sort(null);
    this.createArc = d3
      .arc()
      .innerRadius(props.innerRadius)
      .outerRadius(props.outerRadius);
    const data = this.createPie(props.data);
    const group = d3.select(ref.current);
    const groupWithData = group.selectAll('g.arc').data(data);

    groupWithData.exit().remove();

    const groupWithUpdate = groupWithData
      .enter()
      .append('g')
      .attr('class', 'arc');

    const path = groupWithUpdate
      .append('path')
      .merge(groupWithData.select('path.arc'));

    path
      .attr('class', 'arc')
      .attr('d', this.createArc)
      .attr('fill', (d, i) => this.colors(i))
      .on('mouseup', (d, i, nodes) => this.setActiveDatapoint(d, i, nodes));

    const text = groupWithUpdate
      .append('text')
      .merge(groupWithData.select('text'));

    text
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .attr('transform', d => `translate(${this.createArc.centroid(d)})`)
      .style('fill', 'white')
      .style('font-size', 10)
      .text(d => this.format(d.value));
  }

  setActiveDatapoint = (data, active, nodes) => {
    _.map(nodes, (v, k) => {
      const node = nodes[k]
      if (active === k) {
        d3.select(node).style('stroke', 'yellow');
      } else {
        d3.select(node).style('stroke', null);
      }
    })

    this.props.handleClick(data);
  };
}

export default PieElement;
