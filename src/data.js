import _ from 'lodash';

const data = {
  pie(r = 5) {
    return _.chain(r)
      .range()
      .map((v, k) => {
        return {
          date: k,
          value: _.random(100, true),
        };
      })
      .value();
  },
};

export default data;
